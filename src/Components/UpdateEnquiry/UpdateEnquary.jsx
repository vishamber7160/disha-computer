import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateEnquary() {
    let {studentId}=useParams()
    const navigate=useNavigate()
    const navigateToLeed=()=>{
          navigate("/partner-panel/")
    }
  return (
    <div>
        <h3>StudentID{studentId}</h3>
        <button onClick={()=>navigateToLeed()}>Save</button>
    </div>
  )
}

export default UpdateEnquary