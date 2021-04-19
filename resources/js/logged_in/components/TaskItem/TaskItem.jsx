import React, { Component, Fragment  } from "react";
import TaskPredefined from "@logged_in/components/TaskPredefined";
import TaskItemTerm from "@logged_in/components/TaskItemTerm";
import TaskItemRepeat from "@logged_in/components/TaskItemRepeat";
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
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";


class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { classes } = this.props;
        // console.log(`TaskItem - ${this.props.task}`);
        const { task, terms, repeats } = this.props;
        const Task = (task) ?  (
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                        {task.name}
                        {task.description && <HelpIcon title={task.description} />}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.dBlock}>
                    <List disablePadding>
                        <Bordered disableVerticalPadding disableBorderRadius>
                            <TaskItemTerm 
                                terms={terms} 
                                termId={task.term_id}
                                nameTitle='Срок выполнения'
                            />
                        </Bordered>
                    </List>
                </AccordionDetails>
               
                <AccordionDetails className={classes.dBlock}>
                    <List disablePadding>
                        <Bordered disableVerticalPadding disableBorderRadius>
                            <ListItem
                                key={task.id}
                                divider={task.id !== task.length - 1}
                                className="listItemLeftPadding"
                            >
                                <ListItemText>
                                    <Typography variant="body2">
                                        {terms && terms.length}
                                        {task.description && <HelpIcon title={task.description} />}
                                    </Typography>
                                </ListItemText>
                                <ListItemSecondaryAction>
                                    <FormControl variant="outlined">
                                        <Checkbox
                                            value="option4"
                                            color="primary"


                                        />
                                    </FormControl>
                                </ListItemSecondaryAction>
                            </ListItem>

                        </Bordered>
                    </List>
                </AccordionDetails>
                <AccordionDetails className={classes.AccordionDetails}>
                    <Box mr={1}>
                        <Button>
                            Cancel {false && <ButtonCircularProgress />}
                        </Button>
                    </Box>
                    <Button
                        variant="contained"
                        color="secondary"
                    >
                        Save {false && <ButtonCircularProgress />}
                    </Button>
                </AccordionDetails>
            </Accordion>
        ) : ['Задача не загружена...'];
        return (
            <Fragment>
                 { Task }
                {/*<ListItem className="tasks">*/}
                {/*    <ListItemText primary={`${this.props.taskId} test Task`} />*/}
                {/*    <TaskPredefined />*/}
                {/*   */}
                {/*</ListItem>*/}
            </Fragment>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(TaskItem));
