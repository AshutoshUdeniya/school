import React from 'react';
import { render } from 'react-dom';
import Home from './containers/Home.js';
const Entry = () => {
    return(
        <div>
            <Home/>
        </div>
    );
};
render(<Entry/>, document.getElementById('root'));