import React from 'react';
import Dispatchers from './Dispatchers';


export default () => 
    <nav className="navigation">
        <img src="light.png" alt="logo" height="40" />
        <h1>React <strong>Redux</strong> Example</h1>
        <Dispatchers />
    </nav>