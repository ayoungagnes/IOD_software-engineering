import { useState } from "react"
import { useEmojiContext } from "../context/EmojiContext";
import Button from "@mui/material/Button";
function Emoji() {
    const [mood, setMood] = useState('😁');
    const {currentEmoji, handleClickChangeEmoji} = useEmojiContext(); 

    return(
        <div className="Emoji">
            {/* Current Mood: {mood} */}
            {/* <button onClick={()=>(mood=='😁')? setMood('😵‍💫') : setMood('😁')}>Change Mood</button> */}
            <Button variant="outlined" onClick={handleClickChangeEmoji}>Change Emoji</Button>
        </div>
        
    )
}

export default Emoji;