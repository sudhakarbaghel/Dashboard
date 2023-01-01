import "./nationality.css"

export default function Nationality() {
    return (
        <div className="nationality">
            <span style={{ fontWeight: "bold" }}>Nationality Information</span>
            <div  className="nationalityWrap">
                <span className="nationalityGray">NATIONALITY</span>
                <span className="nationalityBlue nationalityLeft">Indian</span>
            </div>
            <div className="nationalityWrap">
                <span className="nationalityGray">CITIZENSHIP</span>
                <span className="nationalityBlue nationalityLeft">India</span>
            </div>
            <div  className="nationalityItem">
                <span className="nationalityGray">
                    Do you have citizen ship in multiple
                    countries ?
                </span>
                <p className="nationalityBlue">-</p>
            </div>
            <div className="nationalityItem">
                <span className="nationalityGray">
                    Are you living or studying in other country ?

                </span>
                <p className="nationalityBlue">-</p>
            </div>
        </div>
    )
}
