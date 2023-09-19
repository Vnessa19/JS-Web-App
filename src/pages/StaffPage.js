import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js"      

function StaffPage() {
    const [info, setInfo] = useState([]);
    const fetchInfo = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then ((response) => {
            setInfo(response.results);
        })
        .catch(() => {
            alert("It looks like the Random User Generator is down. Please check back later.")
        });
    };
    return(
        <>
        <h2>Staff Information</h2>
        <article>
        <p>
            <button id="listenToServer" onClick={fetchInfo} value="generate">Generate</button>
            Click the button to generate 10 staff information from 
            <a href="https://randomuser.me/">The Random User</a> website.
        </p> 
        <h3>Staff information generated:</h3>
        <table className="staffTable">
            <caption>Staff basic information</caption>
            <thead>
                <tr>
                <th>Portrait</th>
                <th>Name & Email</th>
                <th>Telephone</th>
                <th>City</th>
                </tr>
            </thead>
            <tbody id="randomStaff" >
            {info.map((staff, i) => <StaffRow staff={staff} key={i} />)}
            </tbody>
        </table>

        </article>
        </>
    )
}
export default StaffPage;