import Emoji from "./emoji";
import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { UserContext } from "../UserProvider";
import { useContext } from "react";
import { TextField, Button } from "@mui/material";
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
            <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        {...firstNameInputProps}
      />
        <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        {...emailInputProps}
      />
      <Button variant="outlined" onClick={handleSubscribe}>Subscribe</Button>
      {currentUser.username ? (
        <Button variant="outlined" onClick={() => handleUpdateUser({})}>LogOut</Button>
      ) : null}

      <div>{status}</div>

      <p style={{color: "red"}}>Hit the button to change the emoji in BitcoinRates!</p>
       <Emoji></Emoji>
    </div>
  );
}

export default LoginForm;
