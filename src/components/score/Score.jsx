import React, { useState } from 'react'
import "./score.css"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
export default function Score() {
  const [progress,setProgress]=useState(85)
  const [size,setSize]=useState(100)
  const [thick,setThick]=useState(5)
  return (
    <div className='score'>
      <span className="title">Profile Score</span>
      <div style={{ width: "40%", height: "40%",fontWeight: 700 }}>
      <CircularProgressbar value={80} text={"80%"} strokeWidth={10} styles={buildStyles({
        textSize: '16px',
        pathTransitionDuration: 0.5,
        pathColor: `#54bc5c`,
        textColor: '#1f1f1f',
        trailColor: '#f1f1f1',
        backgroundColor: '#f0f0f0',
      })} />
      </div>
      <span className='celebrate'>You have achieved this month's goal.</span>
      <span className='celebrate'>Congratulations 🥳</span>
      
    </div>
  )
}
