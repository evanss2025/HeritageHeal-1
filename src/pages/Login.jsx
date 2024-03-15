import "../output.css";

export default function Login() {

  function checkInput() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const output = document.getElementById("output");

    if ((username === "") || (password === "")) {
      output.innerHTML = "Please enter a valid username or password";
      
    } else {
      localStorage.setItem("name", username);
      output.innerHTML = "";
      window.location.href = "home";
    }
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex m-8 w-3/5 justify-center items-center bg-fuchsia-300 h-full rounded-2xl">
        <div id="container" className="w-3/5 h-full flex flex-col justify-center items-center m-auto">
          <img src="logo.png" className="mt-5"></img>
          <h1 className="flex font-bold text-stone-50 p-4 m-4 text-5xl items-center justify-center">Log in</h1>
          <input id="username" type="text" placeholder="Username" className="w-3/5 rounded-full p-4 m-4"/>
          <input id="password" type="password" placeholder="Password" className="w-3/5 rounded-full p-4 m-4"/>
          <a
            id="login"
            className="flex justify-center items-center font-bold bg-stone-50 text-black-400 px-4 py-2 rounded-full m-8 p-2 shadow-md bg-fuchsia-300 text-3xl hover:-translate-y-1 duration-300"
            onClick={() => {
              checkInput();
            }}
            >Continue
          </a>
          <p id="output" className="p-2 text-red-600 font-bold"></p>
        
        </div>
  
  
      </div>
    </div>
  );
}
