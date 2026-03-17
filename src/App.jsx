import React from "react";
import Login from "./components/Login";
import { useState } from "react";
import Signup from "./components/Signup";
const App = () => {
  const [signupToggle,setSignupToggle] = useState(true);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      {signupToggle ? <Login toggle={setSignupToggle} /> : <Signup toggle={setSignupToggle}/>}
      
    </div>
  );
};

export default App;
