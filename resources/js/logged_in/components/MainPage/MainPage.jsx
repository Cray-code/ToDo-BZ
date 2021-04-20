import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadActiveUser } from '@actions/user';
import { loadTasks} from '@actions/tasks';
import { loadLists } from '@actions/lists';
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import NavBar from "@logged_in/components/navigation/NavBar";
import Tasks from "@logged_in/components/Tasks";
import styles from "./style";


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: user.user_id,
            userName: user.user_name,
            userEmail: user.user_email,
        }
    }
    async componentDidMount() { 
        await this.props.loadActiveUser(this.state.userId);
        await this.props.loadLists('/api/lists?filter=1');
        await this.props.loadLists('/api/lists?filter=0');
        await this.props.loadTasks();
    }

    render() {
        const { classes } = this.props;


        return (
            <Fragment>

                <NavBar
                    userId={this.state.userId}
                // selectedTab={selectedTab}
                // messages={messages}
                // openAddBalanceDialog={openAddBalanceDialog}
                />

                <main className={classNames(classes.main)}>
                    <Tasks userId={this.state.userId} listId={this.props.listId} />
                </main>
            </Fragment>
        );
    }
}
const mapState = ({ userReducer }) => ({
    user: userReducer.user
  });
const mapAction = dispatch => bindActionCreators({ loadActiveUser, loadTasks, loadLists }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(MainPage));


