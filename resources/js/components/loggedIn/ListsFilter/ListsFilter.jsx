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

const visibilityFilter = {
    showAll: 'showAll',
    showTermId: 'showTermId',
    showFavorites: 'showFavorites',
    showCompleted: 'showCompleted',
    showActive: 'showActive'
};
class ListsFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleNavigate(filter, paramFilter) {
        switch (filter) {
            case visibilityFilter.showAll:
                this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL, paramFilter);
                break;
            case visibilityFilter.showTermId:
                this.props.setVisibilityFilter(VisibilityFilters.SHOW_TERMS_ID, paramFilter);
                break;
            case visibilityFilter.showFavorites:
                this.props.setVisibilityFilter(VisibilityFilters.SHOW_FAVORITES, paramFilter);
                break;
            case visibilityFilter.showCompleted:
                this.props.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED, paramFilter);
                break;
            case visibilityFilter.showActive:
                this.props.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE, paramFilter);
                break;
            default:
                throw new Error('Unknown filter: ' + filter)
        }


    }

    componentDidMount() {

    }

    render() {
        const { classes, users } = this.props;
        let keyId = 0;
        // console.log('this.props.lists');
        const filtersTerm = this.props.terms && this.props.terms.map((elem) => (
            <Link
                to={`/list/flt_${elem.id}`}
                key={keyId++}
                className={classes.menuLink}
            >
                <Tooltip
                    title={elem.name}
                    placement="right"
                    key={elem.name}
                >
                    <ListItem
                        button

                        onClick={() => this.handleNavigate(visibilityFilter.showTermId, elem.id)}
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
        );

        const filtersFavorites = [
            <Link
                to={`/list/flt_favorites`}
                key={keyId++}
                className={classes.menuLink}
            >
                <Tooltip
                    title="Важное"
                    placement="right"
                    key="Важное"
                >
                    <ListItem
                        button

                        onClick={() => this.handleNavigate(visibilityFilter.showFavorites, 1)}
                        aria-label="Важное"
                        className={classes.permanentDrawerListItem}
                    >
                        <ListItemIcon className={classes.justifyCenter}>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Важное" />
                    </ListItem>
                </Tooltip>

            </Link>
        ];

        const filtersCompleted = [
            <Link
                to={`/list/flt_completed`}
                key={keyId++}
                className={classes.menuLink}
            >
                <Tooltip
                    title="Завершенные"
                    placement="right"
                    key="Завершенные"
                >
                    <ListItem
                        button

                        onClick={() => this.handleNavigate(visibilityFilter.showCompleted, 1)}
                        aria-label="Завершенные"
                        className={classes.permanentDrawerListItem}
                    >
                        <ListItemIcon className={classes.justifyCenter}>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Завершенные" />
                    </ListItem>
                </Tooltip>

            </Link>
        ];

        const filtersActive = [
            <Link
                to={`/list/flt_active`}
                key={keyId++}
                className={classes.menuLink}
            >
                <Tooltip
                    title="Активные"
                    placement="right"
                    key="Активные"
                >
                    <ListItem
                        button

                        onClick={() => this.handleNavigate(visibilityFilter.showActive, 1)}
                        aria-label="Активные"
                        className={classes.permanentDrawerListItem}
                    >
                        <ListItemIcon className={classes.justifyCenter}>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="Активные" />
                    </ListItem>
                </Tooltip>

            </Link>
        ];

        return (
            <div className="lists-user">
                {users.id ?
                    <List>
                        {filtersTerm}
                        {filtersFavorites}
                        {filtersActive}
                        {filtersCompleted}
                    </List>
                    :
                    ['Фильтров задач пока нет...']
                }
            </div>
        );
    }
}


const mapState = ({ termsReducer, userReducer }) => ({
    terms: termsReducer.terms,
    users: userReducer.user
});

const mapAction = dispatch => bindActionCreators({ setVisibilityFilter }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(ListsFilter));


