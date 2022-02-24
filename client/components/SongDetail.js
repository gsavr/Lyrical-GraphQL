import React from "react";
import { graphql } from "react-apollo";
import songDetailQuery from "../queries/songDetail";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import withRouter from "./withRouter";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = ({ data: { song, loading }, params: { id } }) => {
  //console.log(song);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/" className="back-button waves-effect btn-flat btn-small left">
        <i className="material-icons">backspace</i>
      </Link>
      <p style={{ color: "white" }}>.</p>
      <h4>Song Details</h4>
      <h3>{`"${song.title}"`}</h3>
      <h6>Lyrics:</h6>
      <LyricList lyrics={song.lyrics} songId={id} />
      <LyricCreate songId={id} />
    </div>
  );
};

//export default SongDetail;
export default compose(
  withRouter,
  graphql(songDetailQuery, {
    options: (props) => {
      return { variables: { id: props.params.id } };
    },
  })
)(SongDetail);

//since React-router-dom v6 does not have params props, created own withRouter HOC, and wrapped using compose
