import { useUserContext } from "../context/UserContext";
import Emoji from "./emoji";
import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { UserContext } from "../UserProvider";
import { useContext } from "react";

function LoginForm() {
  const [status, setStatus] = useState("");
  const [firstNameInputProps, resetFirstName] = useFormInput("Ayoung");
  const [emailInputProps, resetEmail] = useFormInput("ayoung@email.com");
  const { currentUser, handleUpdateUser } = useContext(UserContext);


  const handleSubscribe = (e) => {
    handleUpdateUser({username : firstNameInputProps.value});
    resetEmail();
    resetFirstName();
    setStatus("Thank you for subscribing!");
  };
  return (
    <div className="SubscribeForm componentBox">
      <label>
        First Name : {/* form input with similar props*/}
        <input {...firstNameInputProps} />
      </label>
      <label>
        Email: {/* form input with similar props*/}
        <input {...emailInputProps} />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      {currentUser.username ? (
        <button onClick={() => handleUpdateUser({})}>LogOut</button>
      ) : null}

      <div>{status}</div>

      <p style={{color: "red"}}>Hit the button to change the emoji in BitcoinRates!</p>
       <Emoji></Emoji>
    </div>
  );
}

export default LoginForm;
