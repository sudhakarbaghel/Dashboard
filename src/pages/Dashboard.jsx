import "./dashboard.css"
import Info from "../components/info/Info"
import Score from "../components/score/Score"
import Mailing from "../components/mailing/Mailing"
import Ielts from "../components/ielts/Ielts"


export default function Dashboard() {

    return (
        <div className="dashboard">
            <span>
                Our Branches
            </span>
            <div className="dashboardContainer">
                <div className="dashboardWrapper">
                    <div className="dashboardItem">
                        <Info />
                    </div   >

                    <div className="dashboardItem">
                        <Score />
                    </div></div>
                <div className="dashboardWrapper">
                    <div className="dashboardItem">
                        <Mailing />

                    </div >
                    <div className="dashboardItem">
                        <Ielts />
                    </div>
                </div>
            </div></div>
    )
}
