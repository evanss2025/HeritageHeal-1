import "../output.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Match() {
  const profile = localStorage.getItem('profileString');
  const profileList = JSON.parse(profile);
  let matchScore = checkMatchScore();

  setTimeout(function() { loadProfile(); }, 10);
  setTimeout(function() { createMatchLists(); }, 10);
  setTimeout(function() { matchNames(); }, 10);

  function checkMatchScore() {
    let matchScore = JSON.parse(localStorage.getItem('matchScore'));
    if (matchScore !== null) {
      matchScore = matchScore;
      console.log('match from stroage');
    } else {
      matchScore = 0;
      console.log('score is 0')
    }
    console.log(matchScore);
    return matchScore;
  }

  function loadProfile() {
    const userName = document.getElementById('userName');
    const locationProfile = document.getElementById('locationProfile');
    const industryProfile = document.getElementById('industryProfile');
    const languageProfile = document.getElementById('languageProfile');
    const experienceProfile = document.getElementById('experienceProfile');

    console.log(profileList);
    console.log(profile);

    userName.innerHTML = "Name: " + profileList[0];
    locationProfile.innerHTML = "Location: " + profileList[1];
    industryProfile.innerHTML = "Industry: " + profileList[2];
    languageProfile.innerHTML = "Language: " + profileList[3];
    experienceProfile.innerHTML = "Experience: " + profileList[4];
  }
  
  function matchNames() {
    let matchNamesList = [
      {name: "Aarshe Marley", score: "2"},
      {name: "Abby Johnson", score: "5"},
      {name: "Janine O'Brien", score: "8"},
      {name: "Shelby Grace", score: "4"},
      {name: "Bethany Thomas", score: "6"},
      {name: "Melissa Gregory", score: "3"},
      {name: "Madison Tony", score: "11"},
      {name: "Jemma Stone", score: "1"},
      {name: "Emily Brown", score: "7"},  
    ];
    
    console.log(matchNamesList);
    matchNamesList = JSON.stringify(matchNamesList);
    localStorage.setItem("matchNamesList", matchNamesList);
  }
  
  function createMatchLists() {
    const locationElements = document.querySelectorAll("#location");
    const industryElements = document.querySelectorAll("#industry");
    const languageElements = document.querySelectorAll("#language");
    const experienceElements = document.querySelectorAll("#experience");
  
    locationElements.forEach((location) => {
      if (location.innerHTML === profileList[1]) {
        console.log(location.innerHTML);
        location.classList.add("bg-fuchsia-200");
        location.classList.add("rounded-lg");
      } else {
        console.log("no match");
      }
    });

    industryElements.forEach((industry) => {
      if (industry.innerHTML === profileList[2]) {
        console.log(industry.innerHTML);
        industry.classList.add("bg-fuchsia-200");
        industry.classList.add("rounded-lg");
      } else {
        console.log("no industry match");
      }
    });

    languageElements.forEach((language) => {
      if (language.innerHTML === profileList[3]) {
        console.log(language.innerHTML);
        language.classList.add("bg-fuchsia-200");
        language.classList.add("rounded-lg");
      } else {
        console.log("no language match");
      }
    });

    experienceElements.forEach((experience) => {
      if (experience.innerHTML === profileList[4]) {
        experience.classList.add("bg-fuchsia-200");
        experience.classList.add("rounded-lg");
      }
    });
  }
  function createMatch() {
    // Select all elements with the ID "matchButton"
    const matchButtons = document.querySelectorAll('[id="matchButton"]');

    // Loop through each button and attach click event listener
    matchButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          // Get the target div
          const targetDiv = document.getElementById("matchList");

          // Get the parent div of the button
          const parentDiv = this.parentNode; // Since the button is directly within a div

          let newButton = document.createElement("button");

          newButton.innerHTML = "Email";
          newButton.classList.add("bg-fuchsia-300");
          newButton.classList.add("rounded-lg");
          newButton.classList.add("text-stone-50");
          newButton.classList.add("font-bold");
          newButton.classList.add("px-5");
          newButton.classList.add("m-2");

          parentDiv.classList.add("w-full");

          // Move the parent div to the target div
          targetDiv.appendChild(parentDiv);
          parentDiv.appendChild(newButton);
          button.parentNode.removeChild(button);
      });
    });
    
    matchScore = matchScore + 1;
    localStorage.setItem("matchScore", matchScore);
    console.log(matchScore);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div id="mainContainer" className="flex justify-center w-full">

        <div id="findMatches" className="flex justify-center flex-row w-full bg-fuchsia-300 rounded-2xl p-4 ">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold text-stone-50 justify-center mb-4">Your Profile</p>
          
            <div id="yourProfile" className="text-xl w-full flex flex-col justify-center font-bold bg-stone-50 rounded-lg p-4 text-black-600">

              <p id="userName"></p>
              <p id="locationProfile"></p>
              <p id="industryProfile"></p>
              <p id="languageProfile"></p>
              <p id="experienceProfile"></p>
            </div>
          </div>
          <div id="possibleMatches" className="w-1/2">
            <p className="w-full text-xl font-bold text-stone-50 flex justify-center mr-8 ">Possible matches</p>
            <div id="profiles" className="h-96 overflow-y-scroll overflow-x-hidden">
              <div id="possibleprofile1" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Aarshe Marley</p>
                <p id="location" className="w-full">Boston, MA</p>
                <p id="industry" className="w-full">Computer Science</p>
                <p id="language" className="w-full">English</p>
                <p id="experience" className="w-full">Beginner</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>
              </div>
              <div id="possibleprofile2" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Abby Johnson</p>
                <p id="location" className="w-full">Boston, MA</p>
                <p id="industry" className="w-full">Math</p>
                <p id="language" className="w-full">Spanish</p>
                <p id="experience" className="w-full">Advanced</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>
  
              </div>
              <div id="possibleprofile3" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Janine O'Brien</p>
                <p id="location" className="w-full">San Diego, CA</p>
                <p id="industry" className="w-full">Computer Science</p>
                <p id="language" className="w-full">English</p>
                <p id="experience" className="w-full">Advanced</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>
  
              </div>
              <div id="possibleprofile4" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Shelby Grace</p>
                <p id="location" className="w-full">Boston, MA</p>
                <p id="industry" className="w-full">Non-profits</p>
                <p id="language" className="w-full">English</p>
                <p id="experience" className="w-full">Intermediate</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>
              </div>
              <div id="possibleprofile5" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Bethany Thomas</p>
                <p id="location" className="w-full">Miami, FL</p>
                <p id="industry" className="w-full">Non-profits</p>
                <p id="language" className="w-full">English</p>
                <p id="experience" className="w-full">Beginner</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>
  
              </div>
              <div id="possibleprofile6" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Melissa Gregory</p>
                <p id="location" className="w-full">Philidelpha, PA</p>
                <p id="industry" className="w-full">Computer Science</p>
                <p id="language" className="w-full">French</p>
                <p id="experience" className="w-full">Advanced</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>
  
              </div>
              <div id="possibleprofile6" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Madison Tony</p>
                <p id="location" className="w-full">San Francisco, CA</p>
                <p id="industry" className="w-full">Construction Management</p>
                <p id="language" className="w-full">English</p>
                <p id="experience" className="w-full">Advanced</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>

              </div>
              <div id="possibleprofile6" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Jemma Stone</p>
                <p id="location" className="w-full">Kansas City, MO</p>
                <p id="industry" className="w-full">Computer Science</p>
                <p id="language" className="w-full">English</p>
                <p id="experience" className="w-full">Beginner</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>

              </div>
              <div id="possibleprofile6" className="text-lg justify-center m-4 p-4 font-bold rounded-lg flex flex-col justify-center items-center bg-stone-50">
                <p id="name1" className="w-full">Emily Brown</p>
                <p id="location" className="w-full">Springfield, MA</p>
                <p id="industry" className="w-full">Biology</p>
                <p id="language" className="w-full">Spanish</p>
                <p id="experience" className="w-full">Beginner</p>
                <button id="matchButton" className="w-full bg-fuchsia-300 text-stone-50 rounded-lg m-2 p-2 hover:-translate-y-1" onClick={() => {createMatch(); }}>Match!</button>

              </div>
            </div>
          </div>
        </div>
        <div id="matches" className="h-1/2 flex items-center flex-col w-1/2 bg-fuchsia-300 rounded-2xl m-2 p-4">
          <p className="justify-center items-center text-xl font-bold text-stone-50 justify-center">Matches</p>
          <div id="matchList" className="w-full flex flex-col justify-center items-center">
          </div>
        </div>
      </div>


    </div>
  );
}
