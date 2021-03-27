import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ListComponent extends Component {

    constructor() {
        super();
        this.state = {
            currentUser:  user,//Объект сущности User, данные получаем из фасада Laravel Auth. См. скрипт на app.blade.php
            lists: [],
            currentList: null
        }
    }

    componentDidMount() {
        /* fetch API in action by User_id */
        fetch('/api/lists/user/'+this.state.currentUser.user_id, { credentials: "same-origin" })
            .then(response => {
                // console.log(response)
                return response.json();
            })
            .then(lists => {
                // Fetched product is stored in the state
                this.setState({ lists });
            });
        }

    renderLists() {
        return this.state.lists.map(list => {
            return (
                //this.handleClick() method is invoked onClick.
                <li onClick={
                    () =>this.handleClick(list)} key={list.id} >
                    id: {list.id} / { list.name }
                </li>
            );
        })
    }

    handleClick(list) {
        //handleClick is used to set the state
        this.setState({currentList:list});

    }

    render() {
        return (
            <div>
                <div>
                    <h3>All Lists by User_name = {this.state.currentUser.user_name}</h3>
                    <ul>
                        { this.renderLists() }
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
