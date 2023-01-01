import "./personalInfo.css"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
export default function PersonalInfo() {
    return (
        <div className="personalInfo">
            <div className="personalInfoHeading">
                <span className="personalInfoTitle">Personal Information</span>
                <div className="personalInfoEdit">
                    <div className="personalInfoWrapper">
                        <p style={{ textAlign: "end", fontSize: "14px", fontWeight: "700" }}>Last Edited</p>
                        <p style={{ textAlign: "end", color: "#aaaaaa", fontSize: "14px", fontWeight: "600" }}>20 Sep 2022, 01:40 PM</p>
                    </div>
                    <button className="personalInfoBtn">
                        <ModeEditOutlineOutlinedIcon style={{ color: "white" }} />
                    </button>
                </div>
            </div>
            <div className="personInfoDetails">
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
    )
}
