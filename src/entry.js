import React from 'react';
import { render } from 'react-dom';
import Heading from './components/Heading.js';

const Entry = () => {
    return(
        <div>
            <Heading/>
            changed structure
        </div>
    );
};
render(<Entry/>, document.getElementById('root'));