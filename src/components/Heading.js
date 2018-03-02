import React from 'react';

const divStyle = {
    position: 'fixed',
    border: '5px solid pink'
};
const H1SchoolName = {
    'font-size': '18px',
    'font-weight': '400'
};
const Heading = () => (
    <div id = "fixed-head" style={divStyle}>
        <h1 style={H1SchoolName}>
           Vatsalya Play School
        </h1>
    </div>
);
export default Heading;