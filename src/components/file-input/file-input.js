import React from 'react'
import "./file-input.css"
import {MdInsertPhoto} from "react-icons/md"

const FileInput =({event,icon,text})=>{
  return(
    <React.Fragment>
    <div className="file-controller">
    <input id="file"type="file"name="image"onChange={event}/>
       <label for="file" className="file-label">
       {icon}
        {text}
     </label> 
     </div>

    </React.Fragment>
    )
}
export default FileInput