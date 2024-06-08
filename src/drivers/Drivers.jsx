import React from 'react';
import NavBar from '../NavBar';

class Drivers extends React.Component {
    render() {
        const nav_key = 'drivers'
        return (
            <>
            <NavBar nav_key={ nav_key } />
            <div>
                <p>Hello!</p>
            </div>
            </>
        );
    }
}

export default Drivers;