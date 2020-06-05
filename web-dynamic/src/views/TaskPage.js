import React from 'react';
import history from '../history';

export class TaskPage extends React.Component {
    constructor (props) {
        super (props);

        console.log(history);
    }
    
    render() {
        return <h1>TaskPage</h1>
    }
}