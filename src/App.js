import React from "react";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

const shah = (val) => {
  console.log(val);
  return (<Card
  key ={val.id}
    imgsrc={val.imgsrc}
    title ={val.title}
    name = {val.name}
    link = {val.link}
   />);
};

function App(){
  return (
      <>
      <h1 className="heading_style">Top 5 Series. Mah Fav</h1>
      {Sdata.map(shah)}
      </>
  )
}

export default App;