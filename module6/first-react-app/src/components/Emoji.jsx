import { useState } from "react"

function Emoji() {
    const [mood, setMood] = useState('😁');


    return(
        <div className="Emoji">
            Current Mood: {mood}
            <button onClick={()=>(mood=='😁')? setMood('😵‍💫') : setMood('😁')}>Change Mood</button>
        </div>
        
    )
}

export default Emoji;