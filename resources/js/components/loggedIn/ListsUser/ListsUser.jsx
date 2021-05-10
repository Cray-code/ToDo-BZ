import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListAltIcon from '@material-ui/icons/ListAlt';
import ListCreate from "@logged_in/ListCreate";
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
    withStyles,
    isWidthUp,
    withWidth,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { addList } from '@actions/lists';
import { loadLists } from '@actions/lists';
import { setVisibilityFilter, VisibilityFilters } from '@actions/tasks';
import styles from "./style";



class ListsUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentList: '',
        }
    }

    addList = (name) => {
        // Request (name, pattern_id, predefined, user_id)
        this.props.addList(name, 1, 0, this.props.userId);
    }

    getCurrentList(index) {
        return this.state.currentList === index;
    }

    setCurrentList(index) {
        this.setState({
            currentList: index,
        });
    }

    handleNavigate(listId) {
        this.setCurrentList(listId);
        this.props.setVisibilityFilter(VisibilityFilters.SHOW_ULIST_ID, listId);
    }

    componentDidMount() {
        //this.props.loadLists('/api/lists?filter=0');
    }

    render() {
        const { classes, users } = this.props;
        // console.log('this.props.lists');
        const lists = this.props.lists ? this.props.lists.map((elem) => (
            <Link
                to={`/list/${elem.id}`}
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
                        selected={this.getCurrentList(elem.id)}
                        onClick={() => this.handleNavigate(elem.id)}
                        aria-label={elem.name}
                        className={classes.permanentDrawerListItem}
                        key={elem.id}
                    >
                        <ListItemIcon className={classes.justifyCenter}>
                            <ListAltIcon />
                        </ListItemIcon>
                        <ListItemText primary={elem.name} />
                    </ListItem>
                </Tooltip>

            </Link>
        )
        ) :
            ['Списков задач пока нет...'];

        return (
            <div className="lists-user">
                <List>
                    {lists}
                    {users.id &&
                        <ListItem>
                            <ListCreate user={this.props.userId} addList={this.addList} />
                        </ListItem>
                    }
                </List>
            </div>
        );
    }
}

const mapState = ({ listsReducer, userReducer }) => ({
    lists: listsReducer.lists,
    users: userReducer.user
});

const mapAction = dispatch => bindActionCreators({ addList, loadLists, setVisibilityFilter }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(ListsUser));



