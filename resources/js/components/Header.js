import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <header class="header">
                <img class="header-logo" src="https://via.placeholder.com/150x35.png?text=DoPlans" alt="DoPlans Logo"></img>
                <nav class="header-login">LogIn Place</nav>
            </header>
        );
    }
}

export default Header;