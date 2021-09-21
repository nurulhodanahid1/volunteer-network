import React, {useState, useEffect} from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/events")
        .then(response => response.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div className="row">
            {
                events.map(event => <Event event={event}></Event>)
            }
        </div>
    );
};

export default Home;