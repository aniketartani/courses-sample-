import React from "react";

function footer()
{
    
const date=new Date().getFullYear();
    return(
            <footer>
                <p> Copyright @ {date}</p>
            </footer>
    );
}

export default footer;