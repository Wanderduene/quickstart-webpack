import React from 'react';

export class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'Hallo Welt!'
        };
    }
    render() {
        return <div>{this.state.hello}</div>;
    }
}