import React from 'react';
import ReactDOM from 'react-dom';

const pair = ['Hello', 'World'];

export default function () {
    ReactDOM.render(
        <div>{pair.join()}</div>,
        document.getElementById('app')
    );
}

