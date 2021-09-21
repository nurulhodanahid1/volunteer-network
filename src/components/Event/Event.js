import React from 'react';

const Event = ({event}) => {
    const deleteItem = (id) => {

    };
    return (
        <div className="col-md-3">
            <img style={{height:"300px"}} src={event.imageURL} alt="" />
            <h3>{event.name} <button onClick={() => deleteItem(event._id)}>Delete</button></h3>
        </div>
    );
};

export default Event;