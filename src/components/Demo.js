import { useState } from "react";

const Demo = ()=>{
    const [text, settext]= useState("");
    return (
        <div className="m-4 p-2 border border-black w-48 h-48">
        <div>
        <input className="border border-black w-32 px-2" 
        type="text" 
        value={text} 
        onChange={(e)=>settext(e.target.value)} />
       </div>
        </div>
    )
}
export default Demo;