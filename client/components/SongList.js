import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchSongsQuery from "../queries/fetchSongs";
import deleteSongMutation from "../queries/deleteSong";

const SongList = ({ data: { songs, loading }, mutate, data }) => {
  //console.log(songs);
  const onSongDelete = (id) => {
    mutate({
      variables: { id },
      //refetchQueries could be used but refetch is built in on this on graphql since it is on this component
      //refetchQueries: [{ query: fetchSongsQuery }],
    }).then(() => data.refetch());
  };

  const renderSongs = () => {
    return songs.map(({ title, id }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}> {title}</Link>
          <Link
            to="#"
            className="material-icons right"
            onClick={() => onSongDelete(id)}
          >
            delete
          </Link>
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
