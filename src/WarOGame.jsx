import React from 'react';

const WarO = ({hand}) => {
    return (
        <div className="something">
            {hand.map(entry => (
                    <button key={entry}>
                        <div style={{color: "blue", fontSize:"30px"}}>{entry}</div>
                    </button>
                )
            )}
        </div>
    );
};

export default WarO;