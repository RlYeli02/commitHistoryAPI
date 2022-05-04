import "../assets/styles/Card.css"
import React from "react";

import githubLogo from "../assets/images/github-2.png"

const Card = ({ commit }) => {
    
    const { message, author, verification } = commit;
    const isVerified = verification.verified?  "true":"false";

    const commitVerification = { 
        backgroundColor : isVerified === "true"? "green":"red",
        color :"white",
        width:"65px",
        borderRadius:"10px",
        padding:"0px 6px",
        height:"20px"
    }
    
    return (

        <div className="commit-listCard">
            <img className="githubLogo" src={githubLogo} alt="githubLogo"></img>
            <h4  style={commitVerification}>{isVerified}</h4>
            <h3>{message}</h3>
            <h5>{author.date}</h5>
            <h4>Author</h4>
            <p>{author.name}</p>
        </div>




    )
}

export default Card;