import React, { useState } from "react";
import { signOut } from "firebase/auth"; // Correct import
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";
import Header from "./Header";


function Signout() {
  const [isAuth, setIsAuth] = useState(false);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const[isLoggedOut, setIsLoggedOut]  = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      alert("You have Successfully Logged Out!! :D");

      if(!isLoggedOut){
        setIsLoggedIn(true);
        signOut(auth)
        .then(()=> {
          navigate('/');
        })
        .catch((error) => {
          console.error('Logout error:' , error);
        })
        .finally(()=>{
          setIsLoggedOut(false);
        });
        }
    });
  };

  return (

    <div>
    
    <nav>
      <div className="navbar">
        <ul>
          <li>
            <a>Dev@Deakin</a>
          </li>
        </ul>
        <div className="search-box">
          <input type="text" name="search" id="Search" placeholder="Search" />
        </div>
      </div>
    </nav>


    
    <div className="con">
        <a>WELCOME TO DEV@DEAKIN!</a>
        <button onClick={handleSignout}>Sign Out?</button>{" "}
      </div>
    </div>
  );
}

export default Signout;
