import React from "react";
import { useNavigate } from "react-router-dom";

function Home()
{

    const navigate = useNavigate();

    function handleClick ()
    {
        navigate("/contact")
    }

    return(
        <div>
        <button onClick={handleClick}>Click on me to redirect</button>
        </div>
    )
}

export default Home