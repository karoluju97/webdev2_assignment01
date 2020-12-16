import React from "react";
import Tv from "../tvCard/";
import "./tvList.css";

const TVList = ({tv, action}) => {
  const tvCards = tv.map(m => (
    <Tv key={m.id} tvs={m} action={action} />
  ));
  return <div className="row tv bg-info">{tvCards}</div>;
};

export default TVList;