import "../output.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Main() {
  
  const numberList = [1, 2, 3];
  const randomNumbers = [1, 2];
  let index = numberList[(Math.floor(Math.random() * numberList.length))];
  let randomNumber = randomNumbers[(Math.floor(Math.random() * randomNumbers.length))]

  let money = 500;

  function newIndex () {
    if (index === 3) {
      index = 1;
    } else {
      index = index + 1; 
    }

    if (randomNumber === 2) {
      randomNumber = 1;
    } else {
      randomNumber = randomNumber + 1;
    }
    
    loadPainting();
  }

  function loadPainting() {
    let img = document.getElementById('pieceImage')
    
    if (index === 1) {
      img.src = 'brokenclean' + randomNumber + '.png';
    } else if (index === 3) {
      img.src = 'brokenpaint' + randomNumber + '.png';
    } else {
      img.src = 'broken' + index + '.png';
    }

    const info = document.getElementById('info');
    const results = document.getElementById('results');

    info.innerHTML = "";
    results.innerHTML = "";

    return randomNumber;
  }

  function costReduce(clicked_id) {
    let img = document.getElementById('pieceImage');
    const info = document.getElementById('info');
    const results = document.getElementById('results');
    
    
    if (index === 1) {
      img.src = 'fixedclean' + randomNumber + '.png';
      console.log(index);
    } else if (index === 3) {
      img.src = 'fixedpaint' + randomNumber + '.png';
      console.log(index);

    } else {
      img.src = 'fixed' + index + '.png';
      console.log(index);
    }

    console.log(clicked_id);

    console.log("costreduce running");
    if (index == 1) {
      money = money - 150;
      info.innerHTML = "Surface cleaning would be best for this piece of art as it has dirt smudges and a lot of water spills. It would be best to clean the surface with a cleaner and use a softener. Surface cleaning is just one way to restore art."
    } else if (index == 2) {
      money = money - 300;
      info.innerHTML = "Consolidation is best to restore this piece of art as it is broken pottery. Consolidation is the process of glueing broken pieces together to restore the piece of art. However, it can be quite costly."
    } else if (index == 3) {
      money = money - 450;
      info.innerHTML = "Inpainting is best to restore this piece of art because the painting is scratched and has spots where paint has chipped. This process can take a lot of time, but is great to restore art."
    } else {
      money = money - 0;
    }

    if (clicked_id === index) {
      money = money + 500;
      updateMoney();
      results.innerHTML = "You got it right! You have gained $500!";
      
    } else {
      results.innerHTML = "You did not get it right! You lost money!";
      money = money - 100;
      updateMoney();
    }
  }
  
  function updateMoney() {
    const moneyText = document.getElementById('moneyText');
    moneyText.innerHTML = ('$' + money);

    if (money < 0) {
      window.location.href = "home";
    }
  }
  
  setTimeout(() => {  
    updateMoney();
    loadPainting();
  }, 20);

  return (
    <div id="main" className="flex justify-center items-center w-full h-full flex justify-items-end">
      <div id="pieceContainer" className="flex flex-col justify-center items-center w-1/2 rounded-lg p-2 h-full">
        <img id="pieceImage" className="w-1/2"></img>
        <p id="info" className="bg-stone-50 rounded-lg p-2 m-2 flex justify-center items-center"></p>
        <button id="nextButton" className="font-bold bg-red-600 text-stone-50 p-2 w-1/2 m-5 rounded-lg hover:bg-red-700 transition duration-300" onClick={() => {
            newIndex();
          }}>Next Piece</button>
        <p id="results" className="bg-stone-50 rounded-lg p-2 m-2 flex justify-center items-center"></p>
      </div>
      <div id="tools" className="flex flex-col bg-stone-50 rounded-lg p-3 m-3">
        <div class="tool" id="1" className="flex flex-col justify-center items-center w-1/8 h-3/4 rounded-lg bg-stone-50 transition duration-300 hover:bg-stone-200">
          <img src="./cleaning.png" className="w-1/2 h-1/2"></img>
          <p className="text-lg font-bold">Surface Cleaning</p>
          <p id="cost1" className="text-lg font-bold text-green-500">$150</p>
        
        </div>
        <button id="1" className="bg-red-600 text-stone-50 rounded-lg transition duration-300 hover:bg-red-700" onClick={() => {
          costReduce(1);
        }}>Use</button>
        
        <div class="tool" id="2" className="m-3 flex flex-col justify-center items-center w-1/8 h-3/4 rounded-lg bg-stone-50 transition duration-300 hover:bg-stone-200">
          <img src="./glue.png" className="w-24 h-1/2 m-3"></img>
          <p className="text-lg font-bold">Consolidation</p>
          <p id="cost2" className="text-lg font-bold text-green-500">$300</p>
        </div>
        <button id="1" className="bg-red-600 rounded-lg text-stone-50 transition duration-300 hover:bg-red-700" onClick={() => {
          costReduce(2);
        }}>Use</button>
        <div class="tool" id="3" className="flex flex-col justify-center items-center w-1/8 h-3/4 rounded-lg bg-stone-50 transition duration-300 hover:bg-stone-200">
          <img src="./brush.png" className="w-14 h-1/2 m-3 "></img>
          <p className="text-lg font-bold">Inpainting</p>
          <p id="cost3" className="text-lg font-bold text-green-500">$450</p>
        </div>
        <button id="1" className="bg-red-600 rounded-lg text-stone-50 transition duration-300 hover:bg-red-700" onClick={() => {
          costReduce(3);
        }}>Use</button>
      </div>
      <div id="money" className="bg-stone-50 rounded-lg flex justify-center items-center p-3 flex justify-items-end">
        <img src="./moneyclipart.png" className="w-20 m-2"></img>
        <p id="moneyText" className="font-bold text-xl"></p>

      </div>     
    </div>
  );
}