import React from "react";
import { useState, useContext } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = (props) => {

    const [currentEmoji, setCurrentEmoji] = useState('😁');

    const handleUpdateEmoji = (emoji) => {
        setCurrentEmoji(emoji);
    }
    const handleClickChangeEmoji = () => {
       let emoji = currentEmoji == '😁' ? '😵‍💫' : '😁';
       setCurrentEmoji(emoji);
    }

    return (
        <EmojiContext.Provider value={{currentEmoji, handleUpdateEmoji, handleClickChangeEmoji}}>
            {props.children}
        </EmojiContext.Provider>
    )
}

export const useEmojiContext = () => {
    return useContext(EmojiContext);
}