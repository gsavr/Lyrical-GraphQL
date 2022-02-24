import React from "react";
import { graphql } from "react-apollo";
import likeLyricMutation from "../queries/likeLyric";
import songDetailQuery from "../queries/songDetail";
import { Link } from "react-router-dom";

const LyricList = ({ lyrics, mutate, songId }) => {
  const onLike = (id, likes) => {
    //console.log(`You liked lyric: ${id}`);

    mutate({
      variables: { id },
      //optimistic response will allow instant change of likes before nwetwork response
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
      refetchQueries: [{ query: songDetailQuery, variables: { id: songId } }],
    });
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <span
            className="right"
            style={{ color: "#039BE5", display: "flex", alignItems: "center" }}
          >
            {likes}
            <Link
              to="#"
              className="material-icons"
              style={{ paddingLeft: "5px" }}
              onClick={() => onLike(id, likes)}
            >
              thumb_up
            </Link>
          </span>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default graphql(likeLyricMutation)(LyricList);
