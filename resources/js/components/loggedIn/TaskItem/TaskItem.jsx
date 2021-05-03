import React, { Component, Fragment } from "react";

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    List,
    ListItemIcon,
    Box,
    Switch,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@shared/components/HelpIcon";
import Bordered from "@shared/components/Bordered";
import ButtonCircularProgress from "@shared/components/ButtonCircularProgress";
//import TaskPredefined from "@logged_in/TaskPredefined";
import TaskItemTerm from "@logged_in/TaskItemTerm";
import TaskItemRepeat from "@logged_in/TaskItemRepeat";
import TaskItemFavorites from "@logged_in/TaskItemFavorites";
import { withStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import styles from "./style";


class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // expandedState: null
        }
    }
    toggle_param = (tParam) => {
        return tParam ? 0 : 1;
    }

    handleInputChange = (paramName, paramValue) => {
        console.log(`handleInputChange - ${paramName} - ${paramValue}`);
        paramName === 'is_complete' ?
            this.props.updateTask({ ...this.props.task, [paramName]: paramValue, is_alert: paramValue }) :
            this.props.updateTask({ ...this.props.task, [paramName]: paramValue });
    }

    // handlePanelChange = (panel) => (event, isExpanded) => {
    //     const { expandedState } = this.state;
    //     console.log({ event, isExpanded, panel, expandedState }, this.state);
    //     this.setState((state) => {
    //         return { expandedState: isExpanded ? panel : false }
    //     });
    //     // this.setState({ ...this.state, expandedState: isExpanded ? panel : false });

    //     console.log({ expandedState, expanded: expandedState === panel });
    // };

    render() {
        const { classes } = this.props;
        // console.log(`TaskItem - ${this.props.task}`);
        const { expandedState } = this.state;
        const isAccountActivated = true;
        let keyId = 0;
        const { task, terms, repeats } = this.props;
        const Task = (task) ? (
            <Accordion
                TransitionProps={{ unmountOnExit: true }}
                defaultExpanded={false}
            // expanded={expandedState === `taskPanel${task.id}`} onChange={this.handlePanelChange(`taskPanel${task.id}`)}
            // isExpand={false}
            >
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
                                handleInputChange={this.handleInputChange}
                                keyId={keyId++}
                            />
                            <TaskItemRepeat
                                repeats={repeats}
                                repeatId={task.repeat_id}
                                nameTitle='Повтор'
                                handleInputChange={this.handleInputChange}
                                keyId={keyId++}
                            />
                            <TaskItemFavorites
                                favoritesChecked={task.favorites}
                                nameTitle='Приоритетная задача'
                                handleInputChange={this.handleInputChange}
                                toggle_param={this.toggle_param}
                                keyId={keyId++}
                            />
                        </Bordered>
                    </List>

                </AccordionDetails>

                {/* <AccordionDetails className={classes.AccordionDetails}>
                     <Box mr={1}>
                        <Button>
                            Cancel {false && <ButtonCircularProgress />}
                        </Button>
                    </Box> 
                    <Button
                        variant="contained"
                        color="secondary"
                    >
                        Сохранить {false && <ButtonCircularProgress />}
                    </Button>
                </AccordionDetails> */}
            </Accordion>
        ) : ['Задача не загружена...'];
        return (
            <Fragment>
                { Task}
            </Fragment>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(TaskItem));
