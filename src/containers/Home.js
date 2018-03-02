import React from 'react';
import Heading from '../components/Heading.js';
import SideMenu from '../components/SideMenu.js';

class Home extends React.Component
{
    
    render(){
        return(
            <section>
                <Heading/>
                <SideMenu/>
            </section>
        );
    };
}
export default Home;