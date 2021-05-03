import React, { Component } from "react";

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
import { dfltTaskParam } from "@constants/paramsDefault";
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";


class TaskItemRepeat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { classes } = this.props;

    const { nameTitle, repeatId, repeats } = this.props;
    //const currRepeat = repeats.filter(el => { el.id === repeatId });

    return (
      <ListItem
        key={repeatId}
        disableGutters
        divider={true}
        className="listItemLeftPadding"
      >
        <ListItemText>
          <Typography variant="body2">{nameTitle}</Typography>
        </ListItemText>
        <FormControl variant="outlined">
          <ListItemSecondaryAction
            className={classes.ListItemSecondaryAction}
          >
            <Select
              value={repeatId || dfltTaskParam.TASK_REPEAT_ID}

              input={
                <OutlinedInput
                  name='repeat_id'
                  labelWidth={0}
                  className={classes.numberInput}
                  classes={{ input: classes.numberInputInput }}
                  onChange={(event) => { const { name, value } = event.target; this.props.handleInputChange(name, value); }}
                />
              }
              MenuProps={{ disableScrollLock: true }}
            >
              {repeats.map((innerElement) => (
                <MenuItem value={innerElement.id} key={innerElement.id}>
                  {innerElement.name}
                </MenuItem>
              ))}
            </Select>
          </ListItemSecondaryAction>
        </FormControl>

      </ListItem>



    );
  }
}

export default (withStyles(styles, { withTheme: true })(TaskItemRepeat));
