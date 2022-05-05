import "../assets/styles/Card.css";
import React from "react";

import githubLogo from "../assets/images/github-2.png";

const Card = ({ author, commit, sha }) => {
  const isVerified = commit.verification.verified ? "true" : "false";

  const commitVerification = {
    backgroundColor: isVerified === "true" ? "green" : "red",
    color: "white",
    width: "65px",
    borderRadius: "10px",
    padding: "0px 6px",
    height: "20px",
  };

  return (
    <>
      <div className="commit-list-card">
        <img
          className="commit-author-photo"
          src={author?.avatar_url ?? githubLogo}
          alt="githubLogo"
        ></img>
        <h4 style={commitVerification}>
          {commit.verification?.verified ? "true" : "false"}
        </h4>
        <h3>{commit.message}</h3>
        <h5>{commit.author.date}</h5>
        <h4>Author</h4>
        <p>{commit.author.name}</p>
      </div>
    </>
  );
};

const Cards = ({ commits }) => {
  return (
    <div className="container">
      <div className="commit-container">
        {commits.length === 0 ? (
          <h1>There's not commit yet.</h1>
        ) : (
          <div className="commit-list">
            {commits.map(({ author, commit, sha }) => (
              <Card key={sha} author={author} commit={commit} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
