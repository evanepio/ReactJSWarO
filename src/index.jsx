import React from 'react';
import ReactDOM from 'react-dom';

import WarOGame from './WarOGame'

const pair = ['Hello', 'World'];

ReactDOM.render(
    <WarOGame pair={pair} />,
    document.getElementById('app')
);