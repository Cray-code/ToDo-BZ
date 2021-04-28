import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    FormControl,
    Select,
    OutlinedInput,
    MenuItem,
    Checkbox,
    Box,

} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@shared/components/HelpIcon";
import Bordered from "@shared/components/Bordered";
import ButtonCircularProgress from "@shared/components/ButtonCircularProgress";
import TaskItem from "@logged_in/TaskItem";
import TaskCreate from "@logged_in/TaskCreate";
import {dfltTaskParam} from "@constants/paramsDefault";
// import { loadTasks, addTask } from '@actions/tasks';
// import { loadTerms } from '@actions/terms';
// import { loadRepeats } from '@actions/repeats';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
     componentDidMount() {        
        
    }

    addTask = (name, 
            list_id = dfltTaskParam.TASK_LIST_ID, 
            description = dfltTaskParam.TASK_DESCRIPTION, 
            term_id = dfltTaskParam.TASK_TERM_ID, 
            repeat_id = dfltTaskParam.TASK_REPEAT_ID, 
            cronTime = '', 
            favorites = dfltTaskParam.TASK_FAVORITES, 
            is_complete = dfltTaskParam.TASK_IS_COMPLETE
            ) => {        
        this.props.addTask(name, list_id, description, term_id, repeat_id, cronTime, favorites, is_complete );
        // { name, description, list_id, term_id, repeat_id, cronTime, favorites, is_complete }
        
    }

    render() {
        const { classes } = this.props;
        const { tasks, terms, repeats, lists, paramFilters } = this.props;
        const listName = (listId,listStore) => {
            const currList = listStore.filter(element => element.id == listId);           
            return currList && currList[0] && currList[0].name;
        }
        const Tasks = (tasks) ? tasks.map((task,i) => (
            <TaskItem  key={i} task={task} terms={terms} repeats={repeats} taskId={ task.id } taskName={ task.name } />
        )) : ['Задач пока нет...'];
        return (
            <Fragment>
                <Box mt={4}>
                    <Typography variant="h4" gutterBottom>
                        {lists ? listName(paramFilters, lists) : ['Список задач не определен...']}
                    </Typography>
                </Box>
                { Tasks }
                <Box mt={4}>
                    { paramFilters && (paramFilters > 0) && <TaskCreate user={this.props.userId} addTask={this.addTask} listId={paramFilters}/> } 
                </Box>
            </Fragment>
        );
    }
}


export default withStyles(styles, { withTheme: true })(Tasks);
// const mapState = ({ tasksReducer, termsReducer, repeatsReducer }) => ({
//     tasks: tasksReducer.tasks,
//     terms: termsReducer.terms,
//     repeats: repeatsReducer.repeats,
// });

// const mapAction = dispatch => bindActionCreators({ addTask, loadTasks, loadTerms, loadRepeats }, dispatch);

// export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(Tasks));

