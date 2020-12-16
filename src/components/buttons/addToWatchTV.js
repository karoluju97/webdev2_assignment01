import React, { useContext } from "react";
import {TVContext} from "../../contexts/tvContext";

const AddToWatchTVButton = ({ tv }) => {
  const context = useContext(TVContext);

  const handleAddToWatchTV = e => {
    e.preventDefault();
    context.addToWatchTV(tv.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchTV}
    >
      Add TV to Watch List
    </button>
  );
};

export default AddToWatchTVButton;