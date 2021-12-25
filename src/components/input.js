import React, { useState } from "react";

function input(){
    const [input, setInput] = useState("");
    return(
        <input onChange={(e)=>{
            useState(e.target.value)
        }}
    )
}