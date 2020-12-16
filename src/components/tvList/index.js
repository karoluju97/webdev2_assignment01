import React from "react";
import Tv from "../tvCard/";
import "./tvList.css";

const TVList = ({tvShows, action}) => {
   const TvCard = tvShows.map(m => (
    <Tv key={m.id} tv={m} action={action} />
  ));
  return <div className="row tv bg-info">{TvCard}</div>;
};

export default TVList;