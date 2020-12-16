import React, { useState } from "react";
import HeaderList from "../headerTVList";
import TVList from "../tvList";
import FilterControls from "../filterControls";

const TVListPageTemplate = ({ tvShows, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedTv = tvShows
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <HeaderList title={name} numTv={displayedTv.length} />
      <FilterControls onUserInput={handleChange} numTv={displayedTv.length}/>
      <TVList
        action={action}
        tvShows={displayedTv}
      ></TVList>
    </>
  );
};

export default TVListPageTemplate ;