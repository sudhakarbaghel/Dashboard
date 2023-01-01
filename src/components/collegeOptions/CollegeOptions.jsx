import "./collegeOptions.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState } from "react";

export default function CollegeOptions() {
    const [btn, setBtn] = useState({
        btn1: false, btn2: false, btn3: false
    });

    function handleClick(x) {
        (x === "btn1") && setBtn({ [x]: !btn.btn1 });
        (x === "btn2") && setBtn({ [x]: !btn.btn2 });
        (x === "btn3") && setBtn({ [x]: !btn.btn3 });

    }

    return (
        <div className="collegeOptions">
            <div className="collegeOptionsHeading">
                <div className="collegeOptionsHeadingItem">
                    <select style={{ color: "#17851f", fontWeight: "bold" }} className="collegeOptionsSelectBorder" name="" id="">
                        <option className="collegeOptionsSelectOption">Priority 1</option>
                        <option className="collegeOptionsSelectOption">Priority 2</option>
                        <option className="collegeOptionsSelectOption">Priority 3</option>
                        <option className="collegeOptionsSelectOption">Priority 4</option>
                    </select>

                    <select style={{ color: "#ff9d00", fontWeight: "bold" }} className="collegeOptionsSelectBorder" name="" id="">
                        <option className="collegeOptionsSelectOption">Masters</option>
                        <option className="collegeOptionsSelectOption">P.H.D</option>
                        <option className="collegeOptionsSelectOption">Graduate</option>

                    </select>

                    <select style={{ color: "#fe4f8e", fontWeight: "bold" }} className="collegeOptionsSelectBorder" name="" id="">
                        <option className="collegeOptionsSelectOption">Intake</option>
                        <option className="collegeOptionsSelectOption">Fall</option>
                        <option className="collegeOptionsSelectOption">Summer</option>
                    </select>
                </div>
                <span style={{ fontWeight: "bold", color: "#aaaaaa" }}>...</span>


            </div>
            <div className="collegeOptionsItem">
                <div className="collegeOptionsImgWrapper">
                    <img className="collegeOptionsImg" src="https://res.cloudinary.com/dw7xu0fus/image/upload/v1672393925/upload/fiualonetransreverse-removebg-preview_1_itecb1.png" alt="" />
                </div>
                <div>
                    <p style={{ fontWeight: "700" }}>Kings College London</p>
                    <p className="collegeOptionsLight">Masters in Data Science and Visualization</p>
                    <div className="collegeOptionsLocationWrapper">
                        <LocationOnOutlinedIcon className="collegeOptionsLight" /> <span className="collegeOptionsLight">Chicago, Illinios</span>
                    </div></div>
            </div>

            <div className=" ">
                <div>
                    <span style={{ fontWeight: "bold" }}>Status</span>
                    <span style={{ marginLeft: "20px" }}>i20 issued from university</span>
                </div>
                <div>
                    <span className="collegeOptionsLight">20 Sep 2022, 01:40 PM</span>
                </div>
            </div>
            <div className="collegeOptionsItem1">
                <button className="collegeOptionsBtn collegeOptionsBtnVisibility" style={{ backgroundColor: '#f6fbf7', color: "#54bc5c",border:"none" }}>Track</button>

                <button onClick={() => handleClick("btn1")} className="collegeOptionsBtn" style={btn.btn1 ? { backgroundColor: '#1e519f', color: "white" } : {}}>Request Payments</button>
                <button onClick={() => handleClick("btn2")} className="collegeOptionsBtn" style={btn.btn2 ? { backgroundColor: '#1e519f', color: "white" } : {}}>Request Documents</button>
                <button onClick={() => handleClick("btn3")} className="collegeOptionsBtn" style={btn.btn3 ? { backgroundColor: '#1e519f', color: "white" } : {}}>Update Status</button>
            </div>

        </div>
    )
}
