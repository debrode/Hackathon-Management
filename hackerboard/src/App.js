import React from 'react';
import "./App.css";
import feedItemGenerate from "./Data.js"
import {v4 as uuidv4} from "uuid";
let data= feedItemGenerate();
function App() {
  
  console.log(feedItemGenerate(data,"Hacker Noon","Elon Musk",uuidv4(),"5/5/21","10:00a.m.","2:00 p.m.","Bangalore","1000","ended"));
  // console.log(data);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
