import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const EditPage = ( { travel } ) => {

    const [destination, setDestination]  = useState(travel.destination);
    const [days, setDays] = useState(travel.days);
    const [date, setDate] = useState(travel.date);
    
    const navigation = useNavigate();

    const editTravel = async () => {

        const response = await fetch(`/travels/${travel._id}`, {
            method: 'put',
            body: JSON.stringify({
                destination:destination,
                days:days,
                date:date
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.status === 200){
            alert(`Travel record is updated`);
            navigation("/travel");
        } else {
            alert(`Failed to update travel record. Status ${response.status}`);
            navigation("/travel");
        }
    };


    return (
        <>
        <article>
            <h2>Edit the travel record</h2>
            <p>Edit information of a travel record</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Edit destination, days and date</legend>
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
                        onClick={editTravel}
                        id="submit"
                    >Save Record</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default EditPage;