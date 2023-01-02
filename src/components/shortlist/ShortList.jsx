import { useState } from "react"
import "./shortList.css"

export default function Shortlist() {
  const [edit, setEdit] = useState(true)
  const [value, setValue] = useState("")
  function handleChange(e)
  {
    console.log(e.currentTarget.value)
    setValue(e.currentTarget.value)
  }
  return (
    <div onClick={() => {
      setEdit(true)
      
    }}  className="shortlist">
      <input type="text" placeholder="Shortlist a University"style={{border:"none",fontWeight:"700",backgroundColor:"inherit",outline:"none",height:"100%",width:"100%"}} />
          <button contentEditable={false}>+</button>
      </div>

  )
}
