import React from 'react';
import Travel from './TravelRow';

function TravelTable({ travels, onDelete, onEdit }) {
    return (
        <table id="travels">
            <caption></caption>
            <thead>
                <tr>
                    <th>Destination</th>
                    <th>Days</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {travels.map((travel, i) => 
                    <Travel 
                        travel={travel} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TravelTable;