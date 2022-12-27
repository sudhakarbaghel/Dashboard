import "./ielts.css"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
export default function Ielts() {
  return (
    <div className="ielts">
      <span className="ieltsTitle">IELTS</span>
      <hr className="ieltsRule" />
      <div className="ieltsWrapper">
        <div style={{ width: "25%", height: "25%",fontWeight:"bolder"}} >
          <CircularProgressbar value={75} text={"7.5"} strokeWidth={10} styles={buildStyles({
            textSize: '24px',
            pathTransitionDuration: 0.5,
            pathColor: `#ff9d00`,
            textColor: '#1f1f1f',
            trailColor: '#f1f1f1',
            backgroundColor: '#f0f0f0',
          })} />
        </div>
        <div className="ieltsDetails">
          <div >
            <div className="ieltsDark">120</div>
            <div className="ieltsLight">Listening</div>
          </div>
          <div>
            <div className="ieltsDark">108</div>
            <div className="ieltsLight">Reading</div>
          </div>
        </div>
        <div className="ieltsDetails">
          <div>
            <div className="ieltsDark">84</div>
            <div className="ieltsLight">Speaking</div>
          </div>
          <div>
            <div className="ieltsDark">108</div>
            <div className="ieltsLight">Writing</div>
          </div>
        </div>


      </div >
    </div >
  )
}
