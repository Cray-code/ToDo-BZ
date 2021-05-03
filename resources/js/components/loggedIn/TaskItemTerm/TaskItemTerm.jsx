import React, { Component } from "react";

import {
  Typography,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox
} from "@material-ui/core";
import { dfltTaskParam } from "@constants/paramsDefault";
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";


class TaskItemTerm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { classes } = this.props;

    const { nameTitle, termId, terms } = this.props;
    //const currTerm = terms.filter(el => { el.id === termId });
    // const termsSel = (terms) ?  (         





    // ) : ['Свойство не загружено...'];
    return (
      <ListItem
        key={termId}
        disableGutters
        divider
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
              value={termId || dfltTaskParam.TASK_TERM_ID}
              input={
                <OutlinedInput
                  name='term_id'
                  labelWidth={0}
                  className={classes.numberInput}
                  classes={{ input: classes.numberInputInput }}
                  onChange={(event) => { const { name, value } = event.target; this.props.handleInputChange(name, value); }}
                />
              }
              MenuProps={{ disableScrollLock: true }}
            >
              {terms.map((innerElement) => (
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

export default (withStyles(styles, { withTheme: true })(TaskItemTerm));
