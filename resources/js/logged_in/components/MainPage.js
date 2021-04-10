import React, { Component } from "react";
import ListsPredefined from "@logged_in/components/ListsPredefined";
import ListsUser from "@logged_in/components/ListsUser";
import Tasks from "@logged_in/components/Tasks";
import Footer from "@logged_in/components/Footer";

class MainPage extends Component {
     constructor(props) {
         super(props);
         this.state = {
             userId: user.user_id,
             userName: user.user_name,
             userEmail: user.user_email,
         }
     }

    render() {
        return (
            <div className="main-page">
                <ListsPredefined userId={ this.state.userId }/>
                <ListsUser userId={ this.state.userId }/>
                <Tasks userId={ this.state.userId } listId={ this.props.listId }/>
                <Footer />
            </div>
        );
    }
}

export default MainPage;
