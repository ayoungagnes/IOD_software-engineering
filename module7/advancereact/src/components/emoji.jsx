import { useState } from "react"
import { useEmojiContext } from "../context/EmojiContext";
function Emoji() {
    const [mood, setMood] = useState('😁');
    const {currentEmoji, handleClickChangeEmoji} = useEmojiContext(); 

    return(
        <div className="Emoji">
            {/* Current Mood: {mood} */}
            {/* <button onClick={()=>(mood=='😁')? setMood('😵‍💫') : setMood('😁')}>Change Mood</button> */}
            <button onClick={handleClickChangeEmoji}>Change Emoji</button>
        </div>
        
    )
}

export default Emoji;