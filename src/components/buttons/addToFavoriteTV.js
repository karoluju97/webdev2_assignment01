import React, { useContext } from "react";
import {TVContext} from "../../contexts/tvContext";

const AddToFavoriteTVButton = ({ tv }) => {
  const context = useContext(TVContext);

  const handleAddToFavoriteTV = e => {
    e.preventDefault();
    context.addToFavoriteTV(tv.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavoriteTV}
    >
      Add TV to Favorites
    </button>
  );
};

export default AddToFavoriteTVButton;