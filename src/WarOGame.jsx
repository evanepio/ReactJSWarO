import React from 'react';

export default React.createClass({
    getHand: function () {
        return this.props.hand || [];
    },
    render: function () {
        return <div className="something">
            {this.getHand().map(entry =>
                <button key={entry}>
                    <div style={{color: "blue", fontSize:"30px"}}>{entry}</div>
                </button>
            )}
        </div>;
    }
});