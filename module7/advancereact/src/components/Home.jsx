import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { UserContext } from "../UserProvider";
import { useContext } from "react";


function Home () {
       const { currentUser, handleUpdateUser } = useContext(UserContext);
       let user = currentUser.username ? currentUser.username : "Stranger"
    return(
    <div className="HomePage">
      <p>Welcome to your home page, <strong style={{color:"blue"}}>{user}!</strong></p>
    </div>
 
  );
}

export default Home;