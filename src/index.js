
import React from "react";
import ReactDom from "react-dom"
import "./index.css"


let currentTime = new Date();
currentTime = currentTime.getHours();
let greeting = "";

if(currentTime >= 6 && currentTime <= 11 ){
  greeting = "Good Morning"
}
else if(currentTime >= 12 && currentTime <= 19){
  greeting = "Good Afternoon"
}
else{
  greeting = "Good Night"
}
ReactDom.render(
  <>
  <div>
  <h1>Hello sir, {greeting}</h1>
  </div>
  </>
  ,
  document.getElementById("root")
)