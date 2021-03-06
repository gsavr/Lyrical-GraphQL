import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { useNavigate, Link } from "react-router-dom";
import addSongMutation from "../queries/addSong";
import fetchSongsQuery from "../queries/fetchSongs";

const SongCreate = ({ mutate }) => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  //console.log(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    //runs mutation prop
    mutate({
      variables: {
        title: title,
      },
      //this will rerun the fetchSongs in the songsList component
      refetchQueries: [{ query: fetchSongsQuery }],
    }).then(() => {
      navigate("/songs/list");
      //setTitle("");
    });
  };

  return (
    <div>
      <Link
        to="/songs/list"
        className="back-button waves-effect btn-flat btn-small left"
      >
        <i className="material-icons">backspace</i>
      </Link>
      <p style={{ color: "white" }}>.</p>
      <h3>Add a New Song</h3>
      <form onSubmit={handleSubmit}>
        <label>Song Title:</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
      </form>
    </div>
  );
};

export default graphql(addSongMutation)(SongCreate);
