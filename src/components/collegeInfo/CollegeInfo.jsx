import "./collegeInfo.css"

export default function CollegeInfo() {
  return (
      <div className='collegeInfo'>
          <div className="collegeInfoHeading">
              <span className="collegeInfoTitle">Anurag College of Engineering </span>
              <span style={{ fontWeight: "700", fontSize:"14px", color:"#1e519f"}}>2010-2015</span>
          </div>
          <div className="collegeInfoDetail">
              <p style={{fontWeight:"700",fontSize:"14px"}}> Bachelors in Computer Science and Engineering</p>
              <p style={{ fontWeight: "500", fontSize:"14px", color:"#aaaaaa" }}>Specialized in Data Science</p>
          </div>
          <hr className="ieltsRule" />
          <div className="collegeInfoBottom">
              <div className="collegeInfoBottomItem">
                  <span  style={{fontWeight:"600",fontSize:"14px", color:"#aaaaaa"}}>
                      Percentage
                  </span>
                  <span style={{fontWeight:"600",fontSize:"14px",color: "#1e519f"}}>
                      70%
                  </span>
              </div>
              <div className="collegeInfoBottomItem">
                  <span style={{fontWeight:"600",fontSize:"14px", color:"#aaaaaa"}}>
                      Backlogs
                  </span>
                  <span style={{fontWeight:"600",fontSize:"14px",color: "#1e519f"}}>
                      No
                  </span>
              </div>
              <div className="collegeInfoBottomItem">
                  <span style={{fontWeight:"600",fontSize:"14px", color:"#aaaaaa"}}>
                      Gap in Education
                  </span>
                  <span style={{fontWeight:"600",fontSize:"14px",color: "#1e519f"}}>
                      1 Year
                  </span>
              </div>
          </div>
      </div>
  )
}
