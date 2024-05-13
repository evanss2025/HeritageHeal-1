import "../output.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Home() {

  function showAbout() {
    const aboutP = document.getElementById('about');
  
    aboutP.style.display = "block";
  }

  function pressPlay() {
    window.location.href = "main";

  }


  return (
    <div id="main" className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col justify-center items-center w-3/4 h-full rounded-lg bg-stone-50 p-8">
        <img id="mainLogo" src="./heritageheal.png" alt="logo" className="h-48 m-4"/>
        <button onClick={() => {
            pressPlay();
          }} className="font-bold bg-red-600 text-stone-50 p-8 w-1/2 m-5 rounded-full text-3xl transition duration-400 hover:bg-red-700">
          <h1>Play!</h1>
        </button>
        <button onMouseOver={() => {showAbout(); }} className="font-bold bg-red-600 text-stone-50 p-8 w-1/2 m-5 rounded-full text-3xl transition duration-300 hover:bg-red-700">
          <h1>About</h1>
        </button>
        <p id="about" className="w-3/4 hidden">
          HeritageHeal is a game where you can learn all about preserving art, why it is important, and what the process is like! You have to keep in mind your budget, your tools, and what type of art restoring is needed to fix the piece of art. 

        </p>
      </div>
     
    </div>
  );
}
