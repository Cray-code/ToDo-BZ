import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateList from "@logged_in/components/CreateList";
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
import { loadTasks } from '@actions/tasks';

const styles = (theme) => ({
    appBar: {
      boxShadow: theme.shadows[6],
      backgroundColor: theme.palette.common.white,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        marginLeft: 0,
      },
    },
    appBarToolbar: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      [theme.breakpoints.up("lg")]: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
    },
    accountAvatar: {
      backgroundColor: theme.palette.secondary.main,
      height: 24,
      width: 24,
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
        marginLeft: theme.spacing(1.5),
        marginRight: theme.spacing(1.5),
      },
    },
    drawerPaper: {
      height: "100%vh",
      whiteSpace: "nowrap",
      border: 0,
      width: theme.spacing(7),
      overflowX: "hidden",
      marginTop: theme.spacing(8),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
      backgroundColor: theme.palette.common.black,
    },
    smBordered: {
      [theme.breakpoints.down("xs")]: {
        borderRadius: "50% !important",
      },
    },
    menuLink: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    iconListItem: {
      width: "auto",
      borderRadius: theme.shape.borderRadius,
      paddingTop: 11,
      paddingBottom: 11,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    textPrimary: {
      color: theme.palette.primary.main,
    },
    mobileItemSelected: {
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
    brandText: {
      fontFamily: "'Baloo Bhaijaan', cursive",
      fontWeight: 400,
    },
    username: {
      paddingLeft: 0,
      paddingRight: theme.spacing(2),
    },
    justifyCenter: {
      justifyContent: "center",
    },
    permanentDrawerListItem: {
      justifyContent: "center",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  });

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

    async handleNavigate(listId) {
        this.setCurrentList(listId);
        await this.props.loadTasks(listId);
    }

    componentDidMount() {
        this.props.loadLists('/api/lists/predefined/0');
    }

    render() {
        const { classes } = this.props;
        // console.log('this.props.lists');
        const lists = (this.props.lists) ? this.props.lists.map((elem) => (
            <Link
                to={`/list/${elem.id}`}
                key={ elem.id }                
                className={classes.menuLink}                
              >
                <Tooltip
                  title={elem.name}
                  placement="right"
                  key={elem.name}
                >
                  <ListItem
                    button
                    selected={ this.getCurrentList(elem.id) }
                    onClick={ () => this.handleNavigate(elem.id) } 
                    aria-label={elem.name}
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                        <ListAltIcon />
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
                
            </Link>


     
            )
        ) : ['Списков задач пока нет...'];

        return (
            <div className="lists-user">
                <List>
                    { lists }
                    <ListItem>
                        <CreateList user={ this.props.userId } addList={ this.addList } />
                    </ListItem>
                </List>
            </div>
        );
    }
}

const mapState = ({ listsReducer }) => ({
    lists: listsReducer.lists,
});

const mapAction = dispatch => bindActionCreators({ addList, loadLists, loadTasks }, dispatch);

export default connect(mapState, mapAction)(withStyles(styles, { withTheme: true })(ListsUser));


{/* <Link to={`/list/${elem.id}`}
key={ elem.id }
className="lists-user__link"
>
<ListItem
  button
  selected={ this.getCurrentList(elem.id) }
  onClick={ () => this.handleNavigate(elem.id) } >
  <ListItemIcon>
      <ListAltIcon />
  </ListItemIcon>
  <ListItemText primary={ elem.name } />
</ListItem>
</Link> */}