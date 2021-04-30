import React, { Component } from "react";

import {
  Typography,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,

  Checkbox
} from "@material-ui/core";
import { dfltTaskParam } from "@constants/paramsDefault";
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";


class TaskItemFavorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { classes } = this.props;

    const { nameTitle, favoritesChecked, keyId } = this.props;

    return (
      <ListItem
        key={keyId}
        disableGutters
        divider={false}
        className="listItemLeftPadding"
      >
        <ListItemText>
          <Typography variant="body2">{nameTitle}</Typography>
        </ListItemText>

        <FormControl variant="outlined">
          <ListItemSecondaryAction
            className={classes.ListItemSecondaryAction}
          >
            <Checkbox
              name='favorites'
              value="option5"
              color="primary"
              checked={Boolean(favoritesChecked)}
              onChange={(event) => { const { name, checked } = event.target; this.props.handleInputChange(name, this.props.toggle_param(!checked)); }}
            />
          </ListItemSecondaryAction>
        </FormControl>

      </ListItem>



    );
  }
}

export default (withStyles(styles, { withTheme: true })(TaskItemFavorites));
