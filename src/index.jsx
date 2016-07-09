import React from 'react';
import ReactDOM from 'react-dom';

import WarOGame from './WarOGame'

const hand = [1, 5, 6, 7];

ReactDOM.render(
    <WarOGame hand={hand} />,
    document.getElementById('app')
);