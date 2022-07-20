import React from "react";
 
export default function Footer(){
    
    const date = new Date();
    const year = date.getFullYear();

    return(
    <div>
        <footer> Copyright Ⓒ {`${year}`}</footer>
    </div>);
}