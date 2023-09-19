import React from "react";

function StaffRow({ staff }) {
    return(
    
        <tr>
            <td>
                <img src={staff.picture.thumbnail} alt="RamdomStaff" />
            </td>
            <td>
                <a href={`mailto:${staff.email}`}>
                {staff.name.first} {staff.name.last}</a>
            </td>
            <td>{staff.phone}</td>
            <td>{staff.location.city}</td>
        </tr>
    
    )
}

export default StaffRow;