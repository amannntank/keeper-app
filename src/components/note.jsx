import React from "react";

export default function Note(props){
    return(
    <div className="note" >
        <h1 className=" h1" >{props.title}</h1>
        <p className=" p" >{props.content}</p>
        <button onClick={()=>{props.handleDelete(props.index)}} >delete</button>
    </div>
    );
}