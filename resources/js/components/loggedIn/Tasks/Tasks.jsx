import React, { Component, Fragment } from "react";

import {    
    Typography,    
    Box,

} from "@material-ui/core";

import ButtonCircularProgress from "@shared/components/ButtonCircularProgress";
import TaskItem from "@logged_in/TaskItem";
import TaskCreate from "@logged_in/TaskCreate";
import { dfltTaskParam } from "@constants/paramsDefault";
// import { loadTasks, addTask } from '@actions/tasks';
// import { loadTerms } from '@actions/terms';
// import { loadRepeats } from '@actions/repeats';

import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    addTask = (name,
        list_id = dfltTaskParam.TASK_LIST_ID,
        description = dfltTaskParam.TASK_DESCRIPTION,
        term_id = dfltTaskParam.TASK_TERM_ID,
        repeat_id = dfltTaskParam.TASK_REPEAT_ID,
        cronTime = dfltTaskParam.TASK_CRONTIME,
        favorites = dfltTaskParam.TASK_FAVORITES,
        is_complete = dfltTaskParam.TASK_IS_COMPLETE,
        is_alert = dfltTaskParam.TASK_IS_ALERT,
        deadLine = dfltTaskParam.TASK_DEADLINE
    ) => {
        this.props.addTask(name, list_id, description, term_id, repeat_id, cronTime, favorites, is_complete, is_alert, deadLine);
        // { name, description, list_id, term_id, repeat_id, cronTime, favorites, is_complete }

    }

    updateTask = (task) => {
        this.props.updateTask(task);
        // { name, description, list_id, term_id, repeat_id, cronTime, favorites, is_complete }

    }

    render() {
        const { classes } = this.props;
        const { tasks, terms, repeats, lists, paramFilters } = this.props;
        const listName = (listId, listStore = lists ) => {
            const currList = listStore.filter(element => element.id == listId);
            return currList && currList[0] && currList[0].name;
        }
        const Tasks = (tasks) ? tasks.map((task, i) => (
            <TaskItem key={i} task={task} terms={terms} repeats={repeats} taskId={task.id} taskName={task.name} updateTask={this.updateTask} uListName={listName(task.list_id) } />
        )) : ['Задач пока нет...'];
        return (
            <Fragment>
                <Box mt={4}>
                    <Typography variant="h4" gutterBottom>
                        {lists ? listName(paramFilters, lists) : ['Список задач не определен...']}
                    </Typography>
                </Box>
                { Tasks}
                <Box mt={4}>
                    {paramFilters && (paramFilters > 0) && <TaskCreate user={this.props.userId} addTask={this.addTask} listId={paramFilters} />}
                </Box>
            </Fragment>
        );
    }
}


export default withStyles(styles, { withTheme: true })(Tasks);


