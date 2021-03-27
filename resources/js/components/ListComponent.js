import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListComponent extends Component {

    constructor() {
        super();
        this.state = {
            user_id: 1, // ToDo CSRF-token, не забудь переделать на Auth!
            tasks: [],
            currentTask: null
        }
    }

    componentDidMount() {
        /* fetch API in action by User_id=2*/
        fetch('/api/lists/user/'+this.state.user_id, { credentials: "same-origin" })
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(tasks => {
                // Fetched product is stored in the state
                this.setState({ tasks });
            });
        }

    renderTasks() {
        return this.state.tasks.map(task => {
            return (
                //this.handleClick() method is invoked onClick.
                <li onClick={
                    () =>this.handleClick(task)} key={task.id} >
                    id: {task.id} / { task.name }
                </li>
            );
        })
    }

    handleClick(task) {
        //handleClick is used to set the state
        this.setState({currentTask:task});

    }

    render() {
        return (
            <div>
                <div>
                    <h3>All Tasks by User_id = {this.state.user_id}</h3>
                    <ul>
                        { this.renderTasks() }
                    </ul>
                </div>

                {/*<Task task={this.state.currentTask} />*/}
            </div>
        );
    }
}

export default ListComponent;

if (document.getElementById('list')) {
    ReactDOM.render(<ListComponent />, document.getElementById('list'));
}
