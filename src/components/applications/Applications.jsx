import "./applications.css"

export default function Applications() {
    return (
        <div className="applications">
            <div className="applicationsHeading">
                <span className="applicationsTitle">Applications</span>
                <span className="applicationsView">View All</span>
            </div>
            <div className="applicationsDetail">
                <div className="applicationsItem">
                    <span className="applicationsPriority">Priority</span>
                    <span className="applicationsMasters">Masters</span>
                    <span className="applicationsSpring">Spring 2022</span>
                </div>
                <div className="applicationsItem1">
                    <img className="applicationsImg" src="data:image/png;base64,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" alt="" />
                    <div>
                        <p style={{fontWeight:"700"}}>Kings College London</p>
                        <p className="applicationsLight">Masters in Data Science and</p>
                        <p className="applicationsLight">Visualization</p>
                    </div>
                </div>

                <div className="applicationsItem2">
                    <div>
                        <span style={{fontWeight:"bold"}}>Status</span>
                        <span style={{marginLeft:"20px"}}>i20 issued from university</span>
                    </div>
                    <div>
                        <span className="applicationsLight">20 Sep 2022, 01:40 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
