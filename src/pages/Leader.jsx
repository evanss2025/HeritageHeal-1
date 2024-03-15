import "../output.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Leader() {
  
  setTimeout(function() { nameList(); }, 10);
  setTimeout(function() { progressBarOne(); }, 10);
  setTimeout(function() { progressBarTwo(); }, 10);
  setTimeout(function() { progressBarThree(); }, 10);
  setTimeout(function() { progressBarFour(); }, 10);
  setTimeout(function() { progressBarFifth(); }, 10);

  function nameList() {
    console.log('namelist running');
    const matchScore = localStorage.getItem('matchScore');
    const profile = localStorage.getItem('profileString');
    const profileList = JSON.parse(profile);
    const nameListP = document.getElementById('nameListP');
    const namesforLeader = JSON.parse(localStorage.getItem('matchNamesList'));
    let profilePlace;

    namesforLeader.push({name: profileList[0], score: matchScore});
    namesforLeader.sort(function(a, b) { return b.score - a.score })

    console.log(namesforLeader);

    let i = 0;

    while (i < namesforLeader.length) {
      let newDivLeader = document.createElement("div");

      newDivLeader.classList.add("text-black-400");
      newDivLeader.classList.add("px-8");
      newDivLeader.classList.add("py-2");
      newDivLeader.classList.add("rounded-lg");
      newDivLeader.classList.add("m-4");
      newDivLeader.classList.add("shadow-md");
      newDivLeader.classList.add("w-full");
      newDivLeader.classList.add("font-bold");
      newDivLeader.innerHTML = namesforLeader[i].name + ": " + namesforLeader[i].score + " matches "

      if (i === 0) {
        newDivLeader.classList.add("bg-yellow-400");
        if (profileList[0] === namesforLeader[i].name) {
          profilePlace = "first";
        }
      } else if (i === 1) {
        newDivLeader.classList.add("bg-stone-300");
        if (profileList[0] === namesforLeader[i].name) {
          profilePlace = "second";
        }
      } else if (i === 2) {
        newDivLeader.classList.add("bg-yellow-700");
        if (profileList[0] === namesforLeader[i].name) {
          profilePlace = "third";
        }
      } else {
        newDivLeader.classList.add("bg-stone-50");
      }

      if (namesforLeader[i].name === profileList[0]) {
        newDivLeader.classList.add("outline");
        newDivLeader.classList.add("outline-fuchsia-300");
        console.log("name detected");
      }
      
      nameListP.append(newDivLeader);
      console.log(namesforLeader[i]);
      
      i++;
    }

    localStorage.setItem("profilePlace", profilePlace);
    console.log(profilePlace);
  }

  function progressBarOne() {
    const progress1 = document.getElementById('progress-done1');
    const goalOne = document.getElementById('goalOne');

    let max = 5;
    const finalValue = JSON.parse(localStorage.getItem('matchScore'));

    progress1.style.width = `${(finalValue / max) * 100}%`;
    progress1.innerHTML = (finalValue + "/" + max);

    if (finalValue >= max) {
      goalOne.innerHTML = "Get 5 Matches: Goal Completed!";
      progress1.style.width = `${100}%`;
    }
  }

  function progressBarTwo() {
    const progress2 = document.getElementById('progress-done2');
    const goalTwo = document.getElementById('goalTwo');

    let max = 10;
    const finalValue = JSON.parse(localStorage.getItem('matchScore'));

    progress2.style.width = `${(finalValue / max) * 100}%`;
    progress2.innerHTML = (finalValue + "/" + max);

    if (finalValue >= max) {
      goalTwo.innerHTML = "Get 10 Matches: Goal Completed!";
      progress2.style.width = `${100}%`;
    }
  }

  function progressBarThree() {
    const progress3 = document.getElementById('progress-done3');
    const goalThree = document.getElementById('goalThree');
    const userPlace = localStorage.getItem("profilePlace");
    const thirdStorageCheck = localStorage.getItem("thirdPlace");

    let max = 1;
    let finalValue = 0;

    if (thirdStorageCheck === "true") {
      finalValue = 1;
      goalThree.innerHTML = "Get to Third Place: Goal Completed!";
      progress3.style.width = `${100}%`;
      progress3.innerHTML = (finalValue + "/" + max);

    } else {
      progress3.style.width = `${(finalValue / max) * 100}%`;
      progress3.innerHTML = (finalValue + "/" + max);
  
      if (userPlace === "third") {
        finalValue = 1;
        goalThree.innerHTML = "Get to Third Place: Goal Completed!";
        progress3.style.width = `${100}%`;
        progress3.innerHTML = (finalValue + "/" + max);

        localStorage.setItem("thirdPlace", "true");
      }
    }
  }
  
  function progressBarFour() {
    const progress4 = document.getElementById('progress-done4');
    const goalFour = document.getElementById('goalFour');
    const userPlace = localStorage.getItem("profilePlace");
    const secondStorageCheck = localStorage.getItem("secondPlace");

    let max = 1;
    let finalValue = 0;

    if (secondStorageCheck === "true") {
      finalValue = 1; 
      goalFour.innerHTML = "Get to Second Place: Goal Completed!";
      progress4.style.width = `${100}%`;
      progress4.innerHTML = (finalValue + "/" + max);
      
    } else {
      progress4.style.width = `${(finalValue / max) * 100}%`;
      progress4.innerHTML = (finalValue + "/" + max);
  
      if (userPlace === "second") {
        finalValue = 1; 
        goalFour.innerHTML = "Get to Second Place: Goal Completed!";
        progress4.style.width = `${100}%`;
        
        localStorage.setItem("secondPlace", "true");
      }
    }
  }

  function progressBarFifth() {
    const progress5 = document.getElementById('progress-done5');
    const goalFifth = document.getElementById('goalFifth');
    const userPlace = localStorage.getItem("profilePlace");
    const firstStorageCheck = localStorage.getItem("firstPlace");

    console.log(userPlace);

    let max = 1;
    let finalValue = 0;

    if (firstStorageCheck === "true") {
      finalValue = 1; 
      goalFifth.innerHTML = "Get to First Place: Goal Completed!";
      progress5.style.width = `${100}%`;
      progress5.innerHTML = (finalValue + "/" + max);

    } else {
      progress5.style.width = `${(finalValue / max) * 100}%`;
      progress5.innerHTML = (finalValue + "/" + max);
  
      if (userPlace === "first") {
        finalValue = 1; 
        goalFifth.innerHTML = "Get to First Place: Goal Completed!";
        progress5.style.width = `${100}%`;
        progress5.innerHTML = (finalValue + "/" + max);

        localStorage.setItem("firstPlace", "true");
      }
    }
  }

  return (
    <div className="w-full h-full justify-center items-center">
      <div id="mainContainer" className="flex flex-row justify-center w-full">
        <div id="leftSide" className="w-3/5 h-full flex flex-col justify-center items-center bg-fuchsia-300 rounded-lg m-4">
          <p className="text-stone-50 font-bold text-3xl m-4">Your Goals</p>
          <div id="goals" className="w-full m-4 flex flex-col justify-center items-center">
            <div id="firstGoal" className="w-3/5 flex flex-col justify-center items-center mb-6">
                <p id="goalOne" className="text-stone-50 font-bold text-xl m-2">Get 5 Matches</p>
                <div id="progress1" className="w-full outline outline-stone-50 bg-stone-50 rounded-lg height-60 w-full shadow-lg">
                  <div id="progress-done1" className="transition duration-300 w-full flex items-center justify-center bg-fuchsia-400"></div>
                </div>
            </div>
            <div id="secondGoal" className="w-3/5 flex flex-col justify-center items-center mb-6">
              <p id="goalTwo" className="text-stone-50 font-bold text-xl m-2">Get 10 Matches</p>
              <div id="progress2" className="w-full outline outline-stone-50 bg-stone-50 rounded-lg height-60 w-full shadow-lg">
                <div id="progress-done2" className="transition duration-300 w-full flex items-center justify-center bg-fuchsia-400"></div>
              </div>
            </div>
            <div id="thirdGoal" className="w-3/5 flex flex-col justify-center items-center mb-6">
              <p id="goalThree" className="text-stone-50 font-bold text-xl m-2">Get to third place!</p>
              <div id="progress3" className="w-full outline outline-stone-50 bg-stone-50 rounded-lg height-60 w-full shadow-lg flex items-center justify-center">
                <div id="progress-done3" className="transition duration-300 w-full flex items-center justify-center bg-fuchsia-400"></div>
              </div>
            </div>
          <div id="fourthGoal" className="w-3/5 flex flex-col justify-center items-center mb-6">
              <p id="goalFourth" className="text-stone-50 font-bold text-xl m-2">Get to second place!</p>
              <div id="progress4" className="w-full outline outline-stone-50 bg-stone-50 rounded-lg height-60 w-full shadow-lg flex items-center justify-center">
                <div id="progress-done4" className="transition duration-300 w-full flex items-center justify-center bg-fuchsia-400"></div>
              </div>
            </div>
          </div>
          <div id="fifthhGoal" className="w-3/5 flex flex-col justify-center items-center mb-6">
              <p id="goalFifth" className="text-stone-50 font-bold text-xl m-2">Get to first place!</p>
              <div id="progress5" className="w-full outline outline-stone-50 bg-stone-50 rounded-lg height-60 w-full shadow-lg flex items-center justify-center">
                <div id="progress-done5" className="transition duration-300 w-full flex items-center justify-center bg-fuchsia-400"></div>
              </div>
          </div>
          <br></br>
        </div>
        <div id="rightSide" className="flex flex-col justify-center items-center w-2/5 bg-fuchsia-300 rounded-lg m-4">
          <div id="leaderboard" className="w-1/2 flex flex-col justify-center items-center w-full h-full bg-stone-100 rounded-lg p-8">
            <p className="font-bold text-3xl m-4">🏆Leaderboard🏆</p>
            <div id="nameListP" className="flex flex-col justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
