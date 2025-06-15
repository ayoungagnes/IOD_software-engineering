import { useState } from "react";

function AddCatForm ({onAddCat}){
    const [name,setName] = useState("")
    const [latinName, setLatinName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, imageUrl})
    }
    
    return (
     <div className="AddCatForm">
       <form onSubmit={handleSubmit}>
          <label>Cat name: 
            <input name="name" value={name} 
            onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>LatinName:
            <input name="latinName" value={latinName}
            onChange={(e) => setLatinName(e.target.value)}/> 
          </label>
          <label>imageUrl:
            <input name="imageUrl" value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)}/>
          </label>
          <button>Add Cat</button>
       </form>
     </div>
    )
}

export default AddCatForm;