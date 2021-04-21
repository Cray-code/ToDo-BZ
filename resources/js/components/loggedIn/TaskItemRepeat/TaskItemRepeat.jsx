import React, { Component, Fragment  } from "react";

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


class TaskItemRepeat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { classes } = this.props;
        
        const { nameTitle, repeatId, repeats} = this.props;
        const currRepeat = repeats.filter(el => {el.id === repeatId}); 
        
        return (
            <ListItem
                key={repeatId}
               
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
                     defaultValue={`repeat${repeatId}`}
                    
                      input={
                        <OutlinedInput
                          name='taskRepeat'
                          labelWidth={0}
                          className={classes.numberInput}
                          classes={{ input: classes.numberInputInput }}
                          value={`repeat${repeatId}`}
                        />
                      }
                      MenuProps={{ disableScrollLock: true }}
                    >
                      {repeats.map((innerElement) => (
                        <MenuItem value={`repeat${innerElement.id}`} key={innerElement.id}>
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
