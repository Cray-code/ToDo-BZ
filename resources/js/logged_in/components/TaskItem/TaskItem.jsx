import React, { Component } from "react";
import TaskPredefined from "@logged_in/components/TaskPredefined";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // console.log(!!this.props.listId);
        const { tasks } = this.props;
        const Tasks = (tasks) ? tasks.map((elem) => (
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{elem.name}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.dBlock}>
                    <List disablePadding>
                        <Bordered disableVerticalPadding disableBorderRadius>

                            <ListItem
                                key={elem.id}
                                divider={elem.id !== tasks.length - 1}
                                className="listItemLeftPadding"
                            >
                                <ListItemText>
                                    <Typography variant="body2">
                                        {elem.description}
                                        {elem.description && <HelpIcon title={elem.description} />}
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
                        <Button


                        >
                            Default {false && <ButtonCircularProgress />}
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
        )) : ['Задач пока нет...'];
        return (
            <ListItem className="tasks">
                <ListItemText primary={`${this.props.taskId} test Task`} />
                <TaskPredefined />
                { Tasks}
            </ListItem>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(TaskItem));
