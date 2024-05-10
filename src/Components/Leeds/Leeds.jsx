import React from 'react'
import './leeds.css'
import { Link } from 'react-router-dom'

function Leeds() {
  return (
    <div className='leedscontainer'>
      <table className='dataTable'>
        <thead>
          <tr className='headingRow'>
            <th>Student Name</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Course</th>
            <th>Fee</th>
            <th>Update/Edit</th>
          </tr>
        </thead>
        <tbody>
        <tr className='datarow'>
            <td>Vishamber saini</td>
            <td>kotputli,Jaipur</td>
            <td>9887497160</td>
            <td>Fullstack</td>
            <td>25000</td>
            <td><Link to="/partner-panel/update-enquiry/5" className='updateBtn'>Update</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Leeds