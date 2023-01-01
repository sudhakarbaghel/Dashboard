import "./profileCard.css"
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import { useState } from "react";
export default function ProfileCard() {
  const [btn, setBtn] = useState({
    btn1: true, btn2: false, btn3: false, btn4: false
  });

  function handleClick(x) {
    (x === "btn1") && setBtn({ [x]: !btn.btn1 });
    (x === "btn2") && setBtn({ [x]: !btn.btn2 });
    (x === "btn3") && setBtn({ [x]: !btn.btn3 });
    (x === "btn4") && setBtn({ [x]: !btn.btn4 });

  }
  return (
    <div className="profileCard">
      <div className="profileCardHead">
        <div className="profileCardBtnWrapper" style={btn.btn1 ?{backgroundColor:"white"} : {}}>
          <button onClick={() => handleClick("btn1")} className="profileCardBtn" style={btn.btn1 ? { backgroundColor: "#1e519f", color: "white" } : {}}> <PersonOutlineRoundedIcon /> Profile</button>
        </div>
        <div className="profileCardBtnWrapper" style={btn.btn2 ?{backgroundColor:"white" }: {}}>
          <button onClick={() => handleClick("btn2")} className="profileCardBtn" style={btn.btn2 ? { backgroundColor: "#1e519f", color: "white" } : {}}> <DescriptionOutlinedIcon />Documents</button>
        </div>
        <div className="profileCardBtnWrapper" style={btn.btn3 ?{backgroundColor: "white" }: {}}>
          <button onClick={() => handleClick("btn3")} className="profileCardBtn" style={btn.btn3 ? { backgroundColor: "#1e519f", color: "white" } : {}}> <GridViewOutlinedIcon />Applications</button>
        </div>
        <div className="profileCardBtnWrapper" style={btn.btn4 ?{backgroundColor: "white" }: {}}>
          <button onClick={() => handleClick("btn4")} className="profileCardBtn" style={btn.btn4 ? { backgroundColor: "#1e519f", color: "white" } : {}}> <CenterFocusStrongOutlinedIcon />Records</button>
        </div>
      </div>
      <div className="profileCardContainer">
        <div className="personInfoDetails profileCardContainerDetail">
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              First Name
            </p>
            <p className="personalInfoDark">
              Arekanti
            </p>
          </div>
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              Middle Name
            </p>
            <p className="personalInfoDark">
              -
            </p>
          </div>
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              Last Name
            </p>
            <p className="personalInfoDark">
              Arekanti
            </p>
          </div>
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              Gender
            </p>
            <p className="personalInfoDark">
              Male
            </p>
          </div>
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              Date of Birth
            </p>
            <p className="personalInfoDark">
              09 May 1999
            </p>
          </div>
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              Marital Status
            </p>
            <p className="personalInfoDark">
              Unmarried
            </p>
          </div>
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              Mobile
            </p>
            <p className="personalInfoDark">
              8328524850
            </p>
          </div>
          <div className="personalInfoItem">
            <p className="personalInfoLight">
              Email Address
            </p>
            <p className="personalInfoDark">
              sales@test.com
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
