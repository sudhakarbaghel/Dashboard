import "./collegeCourseCard.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import { useState } from "react";

export default function CollegeCourseCard() {
    const [shortlistState, setShortlistState] = useState("Shortlist")
    const [open, setOpen] = useState(false)
    const [intake, setIntake] = useState(true)
    const [priority, setPriority] = useState("Priority 1")
    function handlePriority(event) {
        console.log(event.target.data)
        setPriority(event.target.innerHTML)
        console.log(priority)
    }

    function handleClick() {
        if (shortlistState === "Shortlist")
            setShortlistState("Shortlisted")
        else
            setShortlistState("Shortlist")
    }
    return (
        <div className="collegeCourseCardWrapper">

            <div className='collegeCourseCard'>
                <div className="collegeCourseCardTop">
                    <div className="collegeCourseCardLeft" onClick={() => setOpen(false)}>
                        <span className="collegeCourseCardMaster">Masters</span>
                        <span className="collegeCourseCardFall">Fall</span>
                        <span className="collegeCourseCardFall">Spring</span>
                        <span className="collegeCourseCardFall">Summer</span>
                    </div>
                    <div className="collegeCourseCardRight">
                        <span onClick={handleClick} id="shortlisted" style={shortlistState === "Shortlist" ? { backgroundColor: "#fffaf3", color: "#ff9d00" } : {}}><span>{shortlistState}</span>  <StarOutlineRoundedIcon /></span>
                        <StarOutlineRoundedIcon onClick={handleClick} id="starIcon" style={shortlistState === "Shortlisted" ? {color: "#ff9d00" } : {}} />
                        <span onClick={() => setOpen(!open)} id="priority">
                            <span >{priority}</span>
                            <KeyboardArrowDownOutlinedIcon />
                            {open && <div className="collegeCoursePriorityOptions">
                                <div className="collegeCoursePriorityOptionsContainer">
                                    <div value="Priority 1" onClick={handlePriority}>Priority 1</div>
                                    <div onClick={handlePriority} value="Priority 2">Priority 2</div>
                                    <div onClick={handlePriority} value="Priority 3">Priority 3</div>
                                    <div onClick={handlePriority} value="Priority 4">Priority 4</div>
                                </div>
                            </div>}

                        </span>
                        <span id="compare"><span>Compare</span> <input style={{ cursor: "pointer" }} className="collegeCourseCardCheckbox" type="checkbox" /></span>
                    </div>
                </div>
                <div className="collegeCourseCardDetailWrapper" onClick={() => setOpen(false)}>
                    <div className="collegeCourseCardDetail">
                        <span className="collegeCourseCardDetailTitle">Data Science in Business Analytics</span>
                        <span className="collegeCourseCardIcon">
                            <CorporateFareOutlinedIcon style={{ color: "#1d57af" }} />
                            <span className="collegeCourseCardDetailGreen"> The University of Mississippi</span>
                            <span className="collegeCourseCardDetailBorder">|</span>
                            <LocationOnOutlinedIcon style={{ color: "#1d57af" }} />
                            <span className="collegeCourseCardDetailGreen">Oxford, Mississippi</span>
                        </span>
                        <p className="collegeCourseCardPara" style={{ color: "#aaaaaa", zIndex: "0" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt non velit urna sagittis, lobortis in amet. Commodo orci mollis laoreet est.
                            Tincidunt volutpat sed vestibulum massa arcu. Venenatis feugiat fermentum vitae nisl eu fermentum mauris
                        </p>
                    </div>
                    <hr className="ieltsRule collegeCourseCardHr" />
                    <div className="collegeCourseCardDetailFee">
                        <div className="collegeCourseCardDetailFeeDiv">
                            <span className="collegeCourseCardDetailDark">
                                Course Fee
                            </span>
                            <span className="collegeCourseCardDetailGreen">
                                $12000 / Year
                            </span>
                        </div>
                        <div className="collegeCourseCardDetailFeeDiv">
                            <span className="collegeCourseCardDetailDark">
                                Application Fee
                            </span>
                            <span className="collegeCourseCardDetailGreen">
                                $120
                            </span>
                        </div>
                        <div className="collegeCourseCardDetailFeeDiv">
                            <span className="collegeCourseCardDetailDark">
                                Course Duration
                            </span>
                            <span className="collegeCourseCardDetailGreen">
                                Full Time (12 Months)</span>
                            <span className="collegeCourseCardDetailBorder">|</span>

                            <span className="collegeCourseCardDetailGreen">Part Time (24 Months)
                            </span>
                        </div>
                        <div className="collegeCourseCardDetailFeeDiv">
                            <span className="collegeCourseCardDetailDark">
                                Next Intake
                            </span>
                            <span className="collegeCourseCardDetailGreen">
                                March
                            </span>
                        </div>
                    </div>
                    <hr className="ieltsRule collegeCourseCardHr" />
                    <div className="collegeCourseCardDetailScore">
                        <div className="collegeCourseCardDetailScoreItem">
                            <span className="collegeCourseCardDetailBlue">IELTS</span>
                            <span className="collegeCourseCardDetailGreen">6.0</span>
                        </div>
                        <div className="collegeCourseCardDetailScoreItem">
                            <span className="collegeCourseCardDetailBlue">GRE</span>
                            <span className="collegeCourseCardDetailGreen">280</span>
                        </div>
                        <div className="collegeCourseCardDetailScoreItem">
                            <span className="collegeCourseCardDetailBlue">TOEFL</span>
                            <span className="collegeCourseCardDetailGreen">70</span>
                        </div>
                        <div className="collegeCourseCardDetailScoreItem">
                            <span className="collegeCourseCardDetailBlue">GMAT</span>
                            <span className="collegeCourseCardDetailGreen">85</span>
                        </div>
                    </div>


                </div>
            </div>
            <div className="collegeCourseMobile">
                <span className="intake" onClick={() => setIntake(!intake)} id="intake">
                    <span >Intake : Spring 2022</span>
                    <KeyboardArrowDownOutlinedIcon />

                    {intake && <div className="collegeCourseIntakeOptions">
                        <div className="collegeCourseIntakeOptionsContainer">
                            <div>Spring</div>
                            <div>Fall</div>
                            <div>Summer</div>
                        </div>
                    </div>}



                </span>


            </div>
        </div>
    )
}
