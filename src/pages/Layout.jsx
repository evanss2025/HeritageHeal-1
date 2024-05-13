import { Outlet, Link } from "react-router-dom";
import "../output.css";


export default function Layout() {

  
  return (
    <div className="overflow-hidden" class="bg-[url('./backgroundheritage.jpg')] bg-center bg-no-repeat bg-cover">


      
      <div className="w-full min-h-screen flex flex-col px-20 py-8">
        <Outlet />
      </div>
  
    </div>
  );
}
