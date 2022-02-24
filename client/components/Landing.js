import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Welcome to Songster</h2>
      <h4>
        <Link to="/songs/list" style={{ color: "black" }}>
          View Songs
        </Link>
      </h4>
      <img
        src={
          "https://static.vecteezy.com/system/resources/previews/000/579/925/original/music-symbols-logo-and-icons-template-vector.jpg"
        }
        height="500"
      />
    </div>
  );
};

export default Landing;
