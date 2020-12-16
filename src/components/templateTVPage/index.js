import React from "react";
import TVHeader from '../headerTV'
import "./moviePage.css";

const TemplateTVPage = ({ tv, children }) => {
  return (
    <>
      <TVHeader tv={tv} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              tv.poster_path
                ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={tv.title}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateTVPage;