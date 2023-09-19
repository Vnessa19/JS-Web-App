import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {

    const [destination, setDestination]  = useState('');
    const [days, setDays] = useState('');
    const [date, setDate] = useState('');
    
    const navigation = useNavigate();

    const addTravel = async () => {
        const newTravel = { destination, days, date };
        const response = await fetch('/travels', {
            method: 'post',
            body: JSON.stringify(newTravel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`document added`);
            navigation("/travel");
        } else {
            alert(`document not added status code = ${response.status}`);
            navigation("/travel");
        }
    };


    return (
        <>
        <article>
            <h2>Add a new travel record</h2>
            <p>Fill out the information to add a new travel record</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend id="travels">Fill out the destination, days and date</legend>
                    <label for="title">Destination</label>
                    <input 
                        type="text"
                        placeholder="place country"
                        value={destination}
                        onChange={e => setDestination(e.target.value)} 
                        id="destination" />
                    
                    <label for="days">Days spending on the trip</label>
                    <input
                        type="number"
                        value={days}
                        placeholder="days of the trip"
                        onChange={e => setDays(e.target.value)} 
                        id="days" />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        placeholder="Primary language of the movie"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addTravel}
                        id="submit"
                    >Add Record</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default CreatePage;