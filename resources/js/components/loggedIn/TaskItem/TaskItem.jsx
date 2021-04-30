import React, { Component, Fragment } from "react";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    LoopIcon,
    FormControl,
    Select,
    OutlinedInput,
    MenuItem,
    Checkbox,
    Box,
    Switch,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@shared/components/HelpIcon";
import Bordered from "@shared/components/Bordered";
import ButtonCircularProgress from "@shared/components/ButtonCircularProgress";
import TaskPredefined from "@logged_in/TaskPredefined";
import TaskItemTerm from "@logged_in/TaskItemTerm";
import TaskItemRepeat from "@logged_in/TaskItemRepeat";
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import styles from "./style";


class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    toggle_param = (tParam) => {
        return tParam ? 0 : 1;
    }

    render() {
        const { classes } = this.props;
        // console.log(`TaskItem - ${this.props.task}`);
        const isAccountActivated = true;
        const { task, terms, repeats } = this.props;
        const Task = (task) ? (
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                    <Box display="flex" alignItems="center">
                        <ListItemIcon>

                            <Switch
                                color="secondary"
                                onClick={(event) => { event.stopPropagation(); this.props.updateTask({ ...task, is_complete: this.toggle_param(task.is_complete) }); }}
                                checked={Boolean(!task.is_complete)}
                            />
                        </ListItemIcon>
                        <Box mr={2}>
                            <Typography>
                                {task.name}
                                {task.description && <HelpIcon title={task.description} />}
                            </Typography>
                        </Box>

                    </Box>
                </AccordionSummary>
                <AccordionDetails className={classes.dBlock}>
                    <List disablePadding>
                        <Bordered disableVerticalPadding disableBorderRadius>
                            <TaskItemTerm
                                terms={terms}
                                termId={task.term_id}
                                nameTitle='Срок выполнения'
                            />
                            <TaskItemRepeat
                                repeats={repeats}
                                repeatId={task.repeat_id}
                                nameTitle='Повтор'
                            />
                        </Bordered>
                    </List>
                </AccordionDetails>

                {/* <AccordionDetails className={classes.dBlock}>
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
                </AccordionDetails> */}
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
                { Task}
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
