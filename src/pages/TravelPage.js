import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDifference } from "react-icons/md";
import TravelTable from '../components/TravelTable';

function TravelPage({ setTravel }) {
    // Use the Navigate for redirection
    const navigation = useNavigate();

    // Use state to bring in the data
    const [travels, setTravels] = useState([]);

    // RETRIEVE the entire list of travel collection
    const loadTravels = async () => {
        const response = await fetch('/travels');
        const travels = await response.json();
        setTravels(travels);
    } 
    

    // UPDATE a single travel record
    const onEditTravel = async travel => {
        setTravel(travel);
        navigation("/edit-travel");
    }


    // DELETE a single travel record
    const onDeleteTravel = async _id => {
        const response = await fetch(`/travels/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/travels');
            const travels = await getResponse.json();
            setTravels(travels);
        } else {
            console.error(`Failed to delete the travel record with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the travel records
    useEffect(() => {
        loadTravels();
    }, []);

    const handleClick = () => {
        navigation('/add-travel');
      };
    // DISPLAY the travel records
    return (
        <>
            <h2>List of Travel Records</h2>
            <p>These are some of the places I have travelled to for the past five years.</p>
            <button onClick={handleClick}><MdOutlineDifference /> Add new record</button>
            <TravelTable 
                travels={travels} 
                onEdit={onEditTravel} 
                onDelete={onDeleteTravel} 
            />
        </>
    );
}

export default TravelPage;