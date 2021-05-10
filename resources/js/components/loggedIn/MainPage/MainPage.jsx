import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadActiveUser } from '@actions/user';
import { loadTasks, setVisibilityFilter, VisibilityFilters} from '@actions/tasks';
import { loadLists } from '@actions/lists';
import { loadTerms } from '@actions/terms';
import { loadRepeats } from '@actions/repeats';
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import NavBar from "@logged_in/navigation/NavBar";
import Tasks from "@logged_in/Tasks";
import TasksVisibleFilter from '@logged_in/TasksVisibleFilter'
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
        await this.props.loadActiveUser(this.state.userId,this.state.userName);
        this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL);
        this.state.userId && await this.props.loadLists('/api/lists?filter=1');
        this.state.userId && await this.props.loadLists('/api/lists?filter=0');
        this.state.userId && await this.props.loadTerms();
        this.state.userId && await this.props.loadRepeats();
        this.state.userId && await this.props.loadTasks();
        
    }

    render() {
        const { classes } = this.props;


        return (
            <Fragment>                   
                <NavBar
                    userId={this.state.userId}
                    userName= {user.user_name}
                // selectedTab={selectedTab}
                // messages={messages}
                // openAddBalanceDialog={openAddBalanceDialog}
                />

                <main className={classNames(classes.main)}>
                    <TasksVisibleFilter />
                    {/* <Tasks userId={this.state.userId} listId={this.props.listId} /> */}
                </main>
            </Fragment>
        );
    }
}
const mapState = ({ userReducer }) => ({
    user: userReducer.user
  });
const mapAction = dispatch => bindActionCreators({ loadActiveUser, loadTasks, loadLists, setVisibilityFilter, loadTerms, loadRepeats }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(MainPage));


