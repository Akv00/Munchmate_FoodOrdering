import UserClass from './UserClass'
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>namaste</h2>
                <UserClass name={"cashmere"} location={"kurukshetra"}></UserClass>
            </div>
        );
    }
}
export default About;