import React from "react";
import { Link } from "react-router-dom";
import "./tvCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TVCard = ({tv, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/tvs/${tv.id}`}>
        <img
          className="card-img-tag center "
          alt={tv.title}
          src={
            tv.poster_path
              ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{tv.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {tv.air_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {tv.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(tv)}
        </div>
      </div>
    </div>
  );
};

export default TVCard;