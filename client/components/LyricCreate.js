import React, { useState } from "react";
import { graphql } from "react-apollo";
import addLyricsMutation from "../queries/addLyrics";
import songDetailQuery from "../queries/songDetail";

const LyricCreate = ({ mutate, songId }) => {
  const [content, setContent] = useState("");
  //   console.log(`id: ${songId}`);
  //   console.log(content);

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      variables: {
        content,
        songId,
      },
      refetchQueries: [{ query: songDetailQuery, variables: { id: songId } }],
    }).then(setContent(""));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Add Lyrics</label>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </form>
    </div>
  );
};

export default graphql(addLyricsMutation)(LyricCreate);
