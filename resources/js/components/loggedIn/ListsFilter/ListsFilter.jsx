import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Drawer,
    List,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
    Tooltip,
    Box,
    isWidthUp,
    withWidth,
} from "@material-ui/core";
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from "react-router-dom";
import { setVisibilityFilter, VisibilityFilters } from '@actions/tasks';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";

class ListsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

            lists: [],
            currentList: ''
        }
    }

    handleNavigate(filter, paramFilter) {
        switch (filter) {
            case showAll:
                this.props.setVisibilityFilter(VisibilityFilters.SHOW_ULIST_ID, paramFilter);
                break;

            default:
                throw new Error('Unknown filter: ' + filter)
        }


    }

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        // console.log('this.props.lists');
        const lists = (this.props.terms) ? this.props.terms.map((elem) => (
            <Link
                to={`/list/flt_${elem.id}`}
                key={elem.id}
                className={classes.menuLink}
            >
                <Tooltip
                    title={elem.name}
                    placement="right"
                    key={elem.name}
                >
                    <ListItem
                        button

                        onClick={() => this.handleNavigate(showAll, elem.id)}
                        aria-label={elem.name}
                        className={classes.permanentDrawerListItem}
                    >
                        <ListItemIcon className={classes.justifyCenter}>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={elem.name} />
                    </ListItem>
                </Tooltip>

            </Link>
        )
        ) : ['Списков задач пока нет...'];

        return (
            <div className="lists-user">
                <List>
                    {lists}
                </List>
            </div>
        );
    }
}


const mapState = ({ termsReducer }) => ({
    terms: termsReducer.terms
});

const mapAction = dispatch => bindActionCreators({ setVisibilityFilter }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(ListsFilter));


