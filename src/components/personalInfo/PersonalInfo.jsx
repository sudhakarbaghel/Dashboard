import "./personalInfo.css"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { useState,useEffect } from "react";
export default function PersonalInfo() {
    
    const [edit, setEdit] = useState(false)
    const [icon, setIcon] = useState(false)

     
    return (
        <div className="personalInfo">
            <div className="personalInfoHeading">
                <span className="personalInfoTitle">Personal Information</span>
                <div className="personalInfoEdit">
                    <div className="personalInfoWrapper">
                        <p style={{ textAlign: "end", fontSize: "14px", fontWeight: "700" }}>Last Edited</p>
                        <p style={{ textAlign: "end", color: "#aaaaaa", fontSize: "14px", fontWeight: "600" }}>20 Sep 2022, 01:40 PM</p>
                    </div>
                    <button className="personalInfoBtn" onClick={() => {
                        setEdit(!edit)
                        if (edit)
                            setIcon(false)
                        else
                            setIcon(true)
                            
                        
                    }}>
                        {!edit && <ModeEditOutlineOutlinedIcon style={{ color: "white" }} />}
                        {edit && <span style={{fontWeight:"bold"}}>Save</span>}
                    </button>
                </div>
            </div>
            <div className="personInfoDetails">
                <div className="personalInfoItem">
                    <p className="personalInfoLight" >
                        First Name
                    </p>
                    <p className="personalInfoDark" contentEditable={edit} onClick={() => setIcon(false)} style={{ textDecoration: edit && "underline"}}>
                        <span >Arekanti</span>
                        {icon && <ModeEditOutlineOutlinedIcon  style={{ color: "gray",height:"18px" }} />}
                    </p>
                </div>
                <div className="personalInfoItem">
                    <p className="personalInfoLight">
                        Middle Name
                    </p>
                    <p className="personalInfoDark" contentEditable={edit}>
                        -
                    </p>
                </div>
                <div className="personalInfoItem">
                    <p className="personalInfoLight">
                         Last Name
                    </p>
                    <p className="personalInfoDark" contentEditable={edit}>
                        Arekanti
                    </p>
                </div>
                <div className="personalInfoItem">
                    <p className="personalInfoLight">
                        Gender
                    </p>
                    <p className="personalInfoDark" contentEditable={edit}>
                        Male
                    </p>
                </div>
                <div className="personalInfoItem">
                    <p className="personalInfoLight">
                         Date of Birth
                    </p>
                    <p className="personalInfoDark" contentEditable={edit}>
                        09 May 1999
                    </p>
                </div>
                <div className="personalInfoItem">
                    <p className="personalInfoLight">
                        Marital Status
                    </p>
                    <p className="personalInfoDark" contentEditable={edit}>
                        Unmarried
                    </p>
                </div>
                <div className="personalInfoItem">
                    <p className="personalInfoLight">
                         Mobile
                    </p>
                    <p className="personalInfoDark" contentEditable={edit}>
                        8328524850
                    </p>
                </div>
                <div className="personalInfoItem">
                    <p className="personalInfoLight">
                       Email Address
                    </p>
                    <p className="personalInfoDark" contentEditable={edit}>
                        sales@test.com
                    </p>
                </div>
            </div>
        </div>
    )
}
