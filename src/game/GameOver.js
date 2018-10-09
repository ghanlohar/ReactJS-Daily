import React from 'react';

const GameOver = (props) => {
    return (
        <div className="col">
            <h3>{props.doneStatus}</h3>
        </div>
    );
} 

export default GameOver;