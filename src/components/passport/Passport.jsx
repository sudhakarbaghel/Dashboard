import "./passport.css"

export default function Passport() {
    return (
        <div className="passport">
            <span style={{ color: "white" }}>Passport Details</span>
            <div className="passportDetails">
                <div className="passportDetailsItem">
                    <span>Passport Number</span>
                    <span style={{fontWeight:"600"}}>V35518TX  </span>
                </div>
                <div className="passportDetailsItemWrapper">
                    <div className="passportDetailsItem">
                        <span>Date of Issue</span>
                        <span style={{fontWeight:"600"}}>12 Feb 2020  </span>
                    </div><div className="passportDetailsItem">
                        <span>Date of Expiry</span>
                        <span style={{fontWeight:"600"}}>12 Feb 2030</span>
                    </div>
                </div>
                <div className="passportDetailsItem">
                    <span>Place of Issue</span>
                    <span style={{fontWeight:"600"}}>India  </span>
                </div>
                <div className="passportDetailsItem">
                    <span>Place of Birth</span>
                    <span style={{fontWeight:"600"}}>India  </span>
                </div>

            </div>
        </div>
    )
}
