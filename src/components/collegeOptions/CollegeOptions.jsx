import "./collegeOptions.css"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState } from "react";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


export default function CollegeOptions() {
    const [btn, setBtn] = useState({
        btn1: false, btn2: false, btn3: false
    });
    const [open, setOpen] = useState({
        priority: false, masters: false, intake: false
    });
    const [data, setData] = useState({
        priority: "Priority 1", masters: "Masters", intake: "Intake"
    })
    function handleClick(x) {
        (x === "btn1") && setBtn({ [x]: !btn.btn1 });
        (x === "btn2") && setBtn({ [x]: !btn.btn2 });
        (x === "btn3") && setBtn({ [x]: !btn.btn3 });

    }
    function handleOpen(x) {
        (x === "p") && setOpen({ priority: !open.priority });
        (x === "m") && setOpen({ masters: !open.masters });
        (x === "i") && setOpen({ intake: !open.intake });
    }
    function handlePriority(x,e) {
        setData(prevState => ({
            ...prevState,
             [x]:e.target.innerHTML
        }));
    }

    return (
        <div className="collegeOptions">
            <div className="collegeOptionsHeading">
                <div className="collegeOptionsHeadingItem">
                    <span onClick={()=>handleOpen("p")} id="collegeOptionspriority">
                        <span >{data.priority}</span>
                        <KeyboardArrowDownOutlinedIcon />
                        {open.priority && <div className="collegeCoursePriorityOptions">
                            <div className="collegeCoursePriorityOptionsContainer">
                                <div onClick={(e) => handlePriority("priority",e)} >Priority 2</div>
                                <div onClick={(e) => handlePriority("priority",e)} >Priority 3</div>
                                <div onClick={(e) => handlePriority("priority",e)} >Priority 4</div>
                            </div>
                        </div>}

                    </span>

                    <span onClick={() => handleOpen("m")} id="collegeOptionspriority" style={{ backgroundColor: "#fffaf3", color:"#ff9d00"}}>
                        <span >{data.masters}</span>
                        <KeyboardArrowDownOutlinedIcon />
                        {open.masters && <div className="collegeCoursePriorityOptions">
                            <div className="collegeCoursePriorityOptionsContainer">
                                <div onClick={(e) => handlePriority("masters",e)} >Graduation</div>
                                <div onClick={(e) => handlePriority("masters",e)} >PhD</div>
                                <div onClick={(e) => handlePriority("masters",e)} >Under Grad</div>
                            </div>
                        </div>}

                    </span>
                    <span onClick={() => handleOpen("i")} id="collegeOptionspriority" style={{ backgroundColor:"#fff6f9",color:"#ff508f"}}>
                        <span >{data.intake}</span>
                        <KeyboardArrowDownOutlinedIcon />
                        {open.intake && <div className="collegeCoursePriorityOptions">
                            <div className="collegeCoursePriorityOptionsContainer">
                                <div onClick={(e) => handlePriority("intake",e)} >Spring</div>
                                <div onClick={(e) => handlePriority("intake",e)} >Fall</div>
                                <div onClick={(e) => handlePriority("intake",e)} >Summer</div>
                            </div>
                        </div>}

                    </span>
                </div>
                <span style={{ fontWeight: "bold", color: "#aaaaaa" }}>...</span>


            </div>
            <div className="collegeOptionsItem">
                <div className="collegeOptionsImgWrapper">
                    <img className="collegeOptionsImg" src="https://res.cloudinary.com/dw7xu0fus/image/upload/v1672393925/upload/fiualonetransreverse-removebg-preview_1_itecb1.png" alt="" />
                </div>
                <div>
                    <p style={{ fontWeight: "700" }}>Florida International University</p>
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
                <button className="collegeOptionsBtn collegeOptionsBtnVisibility" style={{ backgroundColor: '#f6fbf7', color: "#54bc5c", border: "none" }}>Track</button>

                <button onClick={() => handleClick("btn1")} className="collegeOptionsBtn" style={btn.btn1 ? { backgroundColor: '#1e519f', color: "white" } : {}}>Request Payments</button>
                <button onClick={() => handleClick("btn2")} className="collegeOptionsBtn" style={btn.btn2 ? { backgroundColor: '#1e519f', color: "white" } : {}}>Request Documents</button>
                <button onClick={() => handleClick("btn3")} className="collegeOptionsBtn" style={btn.btn3 ? { backgroundColor: '#1e519f', color: "white" } : {}}>Update Status</button>
            </div>

        </div>
    )
}
