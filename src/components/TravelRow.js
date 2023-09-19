import React from 'react';
import { MdCreate, MdDeleteSweep } from "react-icons/md";

function TravelRow({ travel, onEdit, onDelete }) {
    return (
        <tr>
            <td>{travel.destination}</td>
            <td>{travel.days}</td>
            <td>{travel.date.slice(0,10)}</td>
            <td><MdDeleteSweep onClick={() => onDelete(travel._id)} /></td>
            <td><MdCreate onClick={() => onEdit(travel)} /></td>
        </tr>
    );
}

export default TravelRow;