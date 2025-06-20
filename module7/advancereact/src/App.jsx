import { useState } from "react";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import { EmojiProvider } from "./context/EmojiContext";
import Emoji from "./components/emoji";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import { UserProvider } from "./UserProvider";
import ActivityFinder from "./components/ActivityFinder";
import Home from "./components/Home";

// import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
    
      <EmojiProvider>
        <NavBar> </NavBar>
        <AppRoutes></AppRoutes>
      </EmojiProvider>
    </>
  );
}

export default App;
