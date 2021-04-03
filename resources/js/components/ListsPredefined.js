import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddIcon from '@material-ui/icons/Add';
import CreateList from "./CreateList";
import { Link } from "react-router-dom";

class ListsPredefined extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            currentList: null
        }
    }

    componentDidMount() {
        fetch('/api/lists/predefined/1', {
        })
            .then(response => {
                return response.json();
            })
            .then(lists => {
                this.setState({ lists });
            });
    }


    setCurrentList(index) {
        this.setState({
            currentList: index,
        });
    }

    getCurrentList(index) {
        return this.state.currentList === index;
    }

    handleNavigate(listId) {
        this.setCurrentList(listId);
    }

    render() {
        const lists = this.state.lists.map((elem) => (
                <Link to={`/list/${elem.id}`}
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
                        <ListItemText primary={ elem.name +' / id = ' + elem.id} />
                    </ListItem>
                </Link>
            )
        );

        return (
            <div className="lists-predefined">Predefined Lists:
                <List>
                    { lists }
                </List>
            </div>
        );
    }
}

export default ListsPredefined;
