import "./priorityAndIntake.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from "react";


export default function PriorityAndIntake() {
    const [open,setOpen]=useState(true)
    const [intake, setIntake] = useState(true)
    const [data, setData] = useState({
        priority: "Priority 1", masters: "Masters", intake: "Intake"
    })
    function handlePriority(x, e) {
        setData(prevState => ({
            ...prevState,
            [x]: e.target.innerHTML
        }));
        x==="priority" && setOpen(!open)
        x==="intake" && setIntake(!open)
    }
    return (
        <div className="priorityAndIntake">
            <div className="priorityAndIntakePriority">
                <div onClick={()=>setOpen(!open)} className="priorityAndIntakePriorityTitle">
                    <span>{data.priority}</span>
                    <KeyboardArrowDownOutlinedIcon />
                </div>

              {open && <div className="priorityAndIntakePriorityOptionContainer">
                    <div className="priorityAndIntakePriorityOption">
                        <div onClick={(e) => handlePriority("priority", e)} >Priority 2</div>
                        <div onClick={(e) => handlePriority("priority", e)} >Priority 3</div>
                        <div onClick={(e) => handlePriority("priority", e)} >Priority 4</div>
                    </div>
                </div>}
            </div>
            <div className="priorityAndIntakeIntake">
                <div onClick={()=>setIntake(!intake)} className="priorityAndIntakeIntakeTitle">
                    <span>{data.intake}</span>
                    <KeyboardArrowDownOutlinedIcon />
                </div>
                {intake && <div className="priorityAndIntakeIntakeOptionContainer">
                    <div className="priorityAndIntakeIntakeOption">
                        <div onClick={(e) => handlePriority("intake", e)} >Spring</div>
                        <div onClick={(e) => handlePriority("intake", e)} >Fall</div>
                        <div onClick={(e) => handlePriority("intake", e)} >Summer</div>
                    </div>
                </div>}
            </div>
        </div>
    )
}
