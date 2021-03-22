import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class TestReact extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }
    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/user/all')
            .then(response => {
                return response.json();
            })
            .then(users => {
                //Fetched item is stored in the state
                this.setState({ users });
            });
    }

    renderUsers() {
        return this.state.users.map(user => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
                <div key={user.id}>
                    <p>{user.id}</p><br/>
                    <strong>{ user.name }</strong><br/>
                    { user.email}
                    <hr/>
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h3>All Users</h3>
                <ul>
                    { this.renderUsers() }
                </ul>
            </div>

        );
    }
}

export default TestReact;

if (document.getElementById('users')) {
    ReactDOM.render(<TestReact />, document.getElementById('users'));
}
