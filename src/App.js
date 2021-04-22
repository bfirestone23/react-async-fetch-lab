import React, { Component } from 'react'

export default class App extends Component {
    state = {
        apiData: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({ apiData: data.people });
        })
    }

    render() {
        return (
            <div>
                {this.state.apiData.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}
