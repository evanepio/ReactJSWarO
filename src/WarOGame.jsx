import React from 'react';

export default React.createClass({
    getPair: function () {
        return this.props.pair || [];
    },
    render: function () {
        return <div className="something">
            {this.getPair().map(entry =>
                <button key={entry}>
                    <h1 style={{color: "blue"}}>{entry}</h1>
                </button>
            )}
        </div>;
    }
});