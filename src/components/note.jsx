import React from "react";

const Note=props =>
{
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <img src={props.img} alt="alternate"/>
            <button src={props.button}>Enroll</button>
        </div>

    );
}

export default Note;