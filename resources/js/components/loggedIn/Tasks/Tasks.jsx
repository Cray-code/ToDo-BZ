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

    addTask = (name, description = 'не задано', list_id = 0, term_id = 0, repeat_id = 0, cronTime, favorites = 0, is_complete = 0) => {        
        this.props.addTask(name, description, list_id, term_id, repeat_id, cronTime, favorites, is_complete );
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
                    <TaskCreate user={this.props.userId} addTask={this.addTask} listId={paramFilters}/>
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

