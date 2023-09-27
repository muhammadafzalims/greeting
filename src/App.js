import React, {useState} from 'react'





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
export default function App() { 
    const time = new Date().toLocaleTimeString(); 
    const [ctime, setctime] = useState(time)
    const updateTime = ()=>{
       let ntime = new Date().toLocaleTimeString(); 
       setctime(ntime)
    }
    setInterval(updateTime,1000);
  return (
    <>
    <div className='container'>
     <div className='greet'>
       <h1 >Hello sir, {greeting}</h1>
       <h1>{ctime}</h1>
     </div>
    </div>
  
    </>
  )
}
