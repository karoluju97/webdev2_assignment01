import React from "react";
import Tv from "../tvCard/";
import "./tvList.css";

const TVList = ({tvShow, action}) => {
   const TvCard = tvShow.map(m => (
    <Tv key={m.id} tv={m} action={action} />
  ));
  return <div className="row tv bg-info">{TvCard}</div>;
};

export default TVList;