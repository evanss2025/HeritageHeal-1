import { Outlet, Link } from "react-router-dom";
import "../output.css";


export default function Layout() {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-cyan-400 h-24 flex px-20 items-center justify-center">
        <h1 className="hidden sm:block font-bold text-3xl text-stone-50 p-3 w-full">Sophia's Research Portfolio</h1>
        <div className="bg-cyan-400 h-24 flex px-20 items-center justify-end flex items-center justify-between">
          <a
            id="about"
            className="font-bold bg-stone-50 text-black-400 px-4 py-2 rounded-full 
            m-8 p-2 shadow-md text-xl hover:text-2xl transition ease-in-out hover:-translate-y-1 
            hover:scale-110 duration-300"
            href="home"
            >Home
          </a>
          <a
            id="about"
            className="font-bold bg-stone-50 text-black-400 px-4 py-2 rounded-full 
            m-8 p-2 shadow-md text-xl hover:text-2xl transition ease-in-out hover:-translate-y-1 
            hover:scale-110 duration-300"
            href="about"
            >About
          </a>
          
        </div>
      </div>
      
      <div className="w-full min-h-screen flex flex-col px-20 py-8">
        <Outlet />
      </div>
  
    </div>
  );
}
