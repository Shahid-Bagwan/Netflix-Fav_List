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
      <h1 className="heading_style">Top Rated Series On the Netflix</h1>
      <div>

      {Sdata.map(shah)}
      </div>
      </>
  )
}

export default App;