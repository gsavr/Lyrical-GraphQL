import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchSongsQuery from "../queries/fetchSongs";
import deleteSongMutation from "../queries/deleteSong";

const SongList = ({ data: { songs, loading } }) => {
  //console.log(songs);

  const renderSongs = () => {
    return songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Songs List</h3>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

//since we have a query and mutation we have to use multiple instances of graphql
export default graphql(deleteSongMutation)(graphql(fetchSongsQuery)(SongList));
