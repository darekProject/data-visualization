import React from 'react';

const APoDDescription = (props) => {
    return (
        <div className="explanation">
            <span>Date: {props.date}</span>
            <p>{props.exp}</p>
        </div>
    )
};

export default APoDDescription;