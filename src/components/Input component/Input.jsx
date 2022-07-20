import React from "react";

function Input(props) {


    return(
        <div >
            <form>
                <input onChange={(e)=>{props.handleChange(e)}} name="title" placeholder="Title" />
                <textarea onChange={(e)=>{props.handleChange(e)}} name="content" placeholder="Take a note..." rows="3" />
                <button onClick={(e)=>{props.handleSubmit(e)}} >Add</button>
            </form>
        </div>
    )

}

export default Input;