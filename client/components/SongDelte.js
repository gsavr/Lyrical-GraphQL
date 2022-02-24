import React from "react";

const SongDelete = ({ id, setShowDelete, onSongDelete }) => {
  //console.log(id);
  return (
    <div style={{ textAlign: "center" }}>
      <h5 style={{ color: "#D90000" }}>
        Are you sure you would like to delete this song?
      </h5>
      <button
        className="waves-effect btn-flat btn-small"
        style={{ backgroundColor: "red", color: "white", marginRight: "10px" }}
        onClick={() => onSongDelete(id)}
      >
        YES - DELETE
      </button>
      <button
        className="waves-effect btn-flat btn-small"
        style={{
          backgroundColor: "#039BE5",
          color: "white",
          marginLeft: "10px",
        }}
        onClick={() => setShowDelete("")}
      >
        NO - KEEP MY SONG!
      </button>
    </div>
  );
};

export default SongDelete;
