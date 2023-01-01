import "./profileAndScore.css"
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined"
import Score from "../score/Score"
export default function ProfileAndScore() {
    return (

        <div className="profileAndScore">
            <div className="profileAndScoreItem1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKiE_vVIqldC8YQ8HVXbnxVOhtOLMH4coyg&usqp=CAU" alt="" />
                <div >
                    <p style={{ fontWeight: "bold" }}>
                        Arekanti Dilip kumar
                    </p>
                    <div style={{ marginTop: "5px", gap: "10px", alignItems: "center", display: "flex" }}>
                        <LocationOnOutlined style={{ color: "#1e519f" }} />
                        <span style={{ color: "#aaaaaa", fontWeight: "600" }}>Ameerpet, Hyderabad
                        </span></div>
                </div>
            </div>
            <div className="profileAndScoreContainer">
                <div className="profileAndScoreItem">
                    <div className="profileAndScoreScore">
                        7.5
                    </div>
                    <div className="profileAndScoreExam">
                        IELTS
                    </div>
                </div>
                <div className="profileAndScoreItem">
                    <div className="profileAndScoreScore">
                        320
                    </div>
                    <div className="profileAndScoreExam">
                        GRE
                    </div>
                </div>
                <div className="profileAndScoreItem">
                    <div className="profileAndScoreScore">
                        9.5
                    </div>
                    <div className="profileAndScoreExam">
                        GPA
                    </div>
                </div></div>
            <Score />
        </div>
    )
}
