import "./priorityAndIntake.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from "react";


export default function PriorityAndIntake() {
    const [open,setOpen]=useState(true)
    const [intake,setIntake]=useState(true)
    return (
        <div className="priorityAndIntake">
            <div className="priorityAndIntakePriority">
                <div onClick={()=>setOpen(!open)} className="priorityAndIntakePriorityTitle">
                    <span>Priority 1</span>
                    <KeyboardArrowDownOutlinedIcon />
                </div>

              {open && <div className="priorityAndIntakePriorityOptionContainer">
                    <div className="priorityAndIntakePriorityOption">
                        <div>Priority 2</div>
                        <div>Priority 3</div>
                        <div>Priority 4</div>
                        <div>Priority 5</div>
                    </div>
                </div>}
            </div>
            <div className="priorityAndIntakeIntake">
                <div onClick={()=>setIntake(!intake)} className="priorityAndIntakeIntakeTitle">
                    <span>Intake : Spring 2022</span>
                    <KeyboardArrowDownOutlinedIcon />
                </div>
                {intake && <div className="priorityAndIntakeIntakeOptionContainer">
                    <div className="priorityAndIntakeIntakeOption">
                        <div>Spring</div>
                        <div>Fall</div>
                        <div>Spring</div>
                    </div>
                </div>}
            </div>
        </div>
    )
}
