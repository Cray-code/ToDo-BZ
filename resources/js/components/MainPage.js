import React, { Component } from "react";
import ReactDOM from "react-dom";
import ListsComponent from "./ListsComponent";

class MainPage extends Component {
     constructor() {
         super();
         this.state = {
             currentUser: user
         }
     }

    render() {
        var mainStyles = {
            height: '80vh',
            backgroundColor: '#f1efef',
            padding: '1rem',
        }
        return (
                <div style={mainStyles}>
                    <h3>Hello, {this.state.currentUser.user_name}</h3>

                    <ListsComponent />
                </div>
        );
    }
}

export default MainPage;

ReactDOM.render(<MainPage />, document.getElementById('main'))
