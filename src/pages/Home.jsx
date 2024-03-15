import "../output.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  const name = localStorage.getItem('name');

  setTimeout(function() { storageProfileCheck(); }, 10);

  function storageProfileCheck() {
    const profile = localStorage.getItem('profileString');
    const image = localStorage.getItem('image');
    const button = document.getElementById('profileButton');
    const profileContainer = document.getElementById('profileContainer');
    const locationProfile = document.getElementById('locationProfile');
    const industryProfile = document.getElementById('industryProfile');
    const languageProfile = document.getElementById('languageProfile');
    const experienceProfile = document.getElementById('experienceProfile');
    const display = document.getElementById('displayPic');
    const elem = document.createElement('img');

    let profileList = JSON.parse(profile);

    console.log('test');
    console.log(image);

    if (profile === null) {
      console.log('null');
    } else {
      if (profile !== null) {
        if (button !== null) {
          button.remove();
        }
        profileContainer.style.display = 'block';

        locationProfile.innerHTML = "Location: " + profileList[1];
        industryProfile.innerHTML = "Industry: " + profileList[2];
        languageProfile.innerHTML = "Language: " + profileList[3];
        experienceProfile.innerHTML = "Experience: " + profileList[4];
        
        if (image !== null) {
          elem.src = image;
          display.appendChild(elem);
          doubleImageCheck();
        }
        
      } else {
        console.log("button is null");
      }
    }
  }

  function submitProfile(locationCheck, experienceCheck) {

    const location = document.getElementById('location').value;
    const industry = document.getElementById('industry').value;
    const language = document.getElementById('language').value;
    const experience = document.getElementById('experience').value;
    const idContainer = document.getElementById('idContainer');
    const profileContainer = document.getElementById('profileContainer');

    if ((locationCheck) && (experienceCheck)) {
      const profile = [name, location, industry, language, experience];
      let profileString = JSON.stringify(profile);
      localStorage.setItem("profileString", profileString);

      console.log(profileString);
      idContainer.remove();
      profileContainer.style.display = 'block';

      setTimeout(function() { storageProfileCheck(); }, 10);
    }
  }

  function createProfile() {
    const id = document.getElementById('idContainer');
    const button = document.getElementById('profileButton');

    button.remove();
    id.style.display = 'block';
  }

  function checkLocation() {
    const location = document.getElementById('location').value;
    const locationOutput = document.getElementById('locationOutput');
    
    if (location.includes(',')) {
      locationOutput.innerHTML = "";
      const locationParts = location.split(',');
      if (locationParts[1].length === 3) {
        locationOutput.innerHTML = "";
        return true;
      } else {
        locationOutput.innerHTML = "Please put your state's abbreviation";
      }
    } else {
      locationOutput.innerHTML = "Please follow the format City, State";
    }
  }

  function checkExperience() {
    const experience = document.getElementById('experience').value;
    const experienceOutput = document.getElementById('experienceOutput');

    if ((experience === "Beginner") || (experience === "Intermediate") || (experience === "Advanced")) {
      experienceOutput.innerHTML = "";
      return true;
    } else {
      experienceOutput.innerHTML = "Please enter either Beginner, Intermediate, or Advanced";
    }
  }

  function changePic() {
    //function keeps running twice which is causing two images to appear
    const display = document.getElementById('displayPic');
    const picInput = document.getElementById('picInput').value;
    const image = document.getElementById('image');
    const storageImage = localStorage.getItem('image');
    const imageOutput = document.getElementById('imageOutput');

    console.log(picInput)
    console.log(image);

    if (storageImage === null) {
      if (image !== null) {
        image.remove();
        changePic();
      } else {
        const elem = document.createElement("img");
        elem.setAttribute("id", "image");
        elem.classList.add("rounded-xl");

        if (picInput === "chemistry") {
          elem.src = 'public/profile2.png';

        } else if (picInput === "biology") {
          elem.src = 'public/profile4.png';

        } else if (picInput === "construction") {
          elem.src = 'public/profile3.png';

        } else if (picInput === "computerscience") {
          elem.src = 'public/profile1.png';
        }
        display.appendChild(elem);
        localStorage.setItem("image", elem.src);
      }
      
    } else {
      imageOutput.innerHTML = "You've already chosen a profile picture!";
    }
  }

  function doubleImageCheck() {
    const display = document.getElementById('displayPic');
    const images = display.getElementsByTagName('img');

    console.log(images);

    if (images.length > 1) {
      console.log("over 2");
      images[1].remove();
    } else {
      console.log("under 2");
    }
  }

  return (
    <div id="main" className="flex flex-col justify-center items-center w-full h-full">
      <button 
        id="profileButton"
        className="w-1/4 bg-fuchsia-300 text-stone-50 font-bold px-4 py-2 rounded-full m-8 p-2 shadow-md text-xl hover:-translate-y-1"
        onClick={() => {
          createProfile();
        }}
        >Create a Profile</button>

      <div id="profileContainer" className="hidden flex flex-col justify-center items-center m-4 p-6 shadow-md w-3/5 rounded-3xl bg-fuchsia-300">
        <div id="mainProfileParts" className="flex flex-row">
          <div id="leftSide" className="text-stone-50">
            <h1 className="font-bold text-3xl">{name}'s Profile</h1><br></br>
            <h1 id="locationProfile" className="font-bold text-3xl"></h1><br></br>
            <h1 id="industryProfile" className="font-bold text-3xl"></h1><br></br>
            <h1 id="languageProfile" className="font-bold text-3xl"></h1><br></br>
            <h1 id="experienceProfile" className="font-bold text-3xl"></h1><br></br>
          </div>
          <div id="rightSide" className="ml-8 flex flex-col text-black-400 m-5">
            <form action="/action_page.php">
              <label for="profile" className="m-4 text-stone-50 font-bold" >Pick a Profile Picture!</label>
              <select name="profile" id="picInput" className="text-black-400" onChange={() => {
                changePic();
              }}>
                <option value="chemistry">Chemistry</option>
                <option value="computerscience">Computer Science</option>
                <option value="construction">Construction</option>
                <option value="biology">Biology</option>
              </select>
              <br></br>
            </form>
            <div id="displayPic" className="rounded-lg justify-center items-center m-5"></div>
            <p id="imageOutput"></p>
          </div>
        </div>
        <a
          id="toMatch"
          className="flex justify-center items-center font-bold bg-stone-50 text-fuchsia-300 px-4 py-2 rounded-full m-8 p-2 shadow-md text-3xl hover:-translate-y-1 duration-300"
          href="match"
          >Match with Others!
        </a>     
      </div>
      <div id="idContainer" className="hidden flex flex-col justify-center items-center m-4 p-6 shadow-md w-3/5 rounded-3xl outline outline-fuchsia-300">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h1 className="flex flex-row justify-center items-center font-bold text-lg">Location
          <input id="location" type="text" placeholder="Location (Town, State)" className="w-3/4 rounded-full p-4 m-4 outline"></input>
        </h1>
        <p id="locationOutput" className="p-2 text-red-600 font-bold"></p>
        <h1 className="flex flex-row justify-center items-center font-bold text-lg">Industry
          <input id="industry" type="text" placeholder="Industry" className="w-3/4 rounded-full p-4 m-4 outline"></input>
        </h1>
        <h1 className="flex flex-row justify-center items-center font-bold text-lg">Language
          <input id="language" type="text" placeholder="Language" className="w-3/4 rounded-full p-4 m-4 outline"></input>
        </h1>
        <h1 className="flex flex-row justify-center items-center font-bold text-lg">Experience
          <input id="experience" type="text" placeholder="Experience" className="w-3/4 rounded-full p-4 m-4 outline"></input>
        </h1>
        <p id="experienceOutput" className="p-2 text-red-600 font-bold"></p>
        <div className="flex justify-center items-center">
          <button id="create" className="w-1/2 flex items-center justify-center bg-fuchsia-300 text-stone-50 font-bold px-4 py-2 rounded-full m-8 p-2 shadow text-xl hover:-translate-y-1"
          onClick={() => {
              submitProfile(checkLocation(), checkExperience());
          }}>Create Profile</button>
        </div>
      </div>
    </div>
  );
}
