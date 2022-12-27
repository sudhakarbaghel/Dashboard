import "./info.css"
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export default function () {
    return (
        <div className='info'>
            <div className="notch"></div>
            <div className="infoContainer">
                <div className="title">
                    <span className="dark">Ameerpet</span>
                    <span className="iconContainer" >
                        <span className="lightno">18</span>
                        <PersonOutlineRoundedIcon className="dark" />
                    </span>
                </div>
                <div className="appl">
                    <div className="applWrap">
                        <span className="light">APPLICATIONS</span>
                        <span className="applNo">+5</span>
                    </div>
                    <div>
                        <span  className="dark">410</span>
                    </div>
                </div>
                <div className="details">
                    <div className="leads">
                        <span  className="light">
                            LEADS
                        </span>
                        <span className="dark">
                            34
                        </span>

                    </div>
                    <div className="student">
                        <span className="light">
                            NEW STUDENTS
                        </span>
                        <span className="dark">
                            2
                        </span> 

                    </div>
                </div>

            </div>

        </div>
    )
}
