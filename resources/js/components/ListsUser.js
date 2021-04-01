import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddIcon from '@material-ui/icons/Add';
import CreateList from "./CreateList";
import { Link } from "react-router-dom";

class ListsUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {
                    created_at: "2021-03-29T20:12:10.000000Z",
                    id: 7,
                    name: "Финансы",
                    pattern_id: 9,
                    predefined: null,
                    updated_at: "2021-03-29T20:12:10.000000Z",
                    user_id: 1,
                },
                {
                    created_at: "2021-03-29T20:12:10.000000Z",
                    id: 8,
                    name: "Спорт",
                    pattern_id: 5,
                    predefined: null,
                    updated_at: "2021-03-29T20:12:10.000000Z",
                    user_id: 1,
                },
            ],
            currentList: null
        }
    }

    addList = (name) => {
        this.setState({
            lists: [...this.state.lists, {
                created_at: "2021-04-01T00:00:00.000000Z",
                id: 10,
                name: name,
                pattern_id: 5,
                predefined: null,
                updated_at: "2021-04-01T00:00:00.000000Z",
                user_id: this.props.userId,
            }],
        });
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
    }

/*    componentDidMount() {
        fetch('/api/lists', {
        })
            .then(response => {
                return response.json();
            })
            .then(lists => {
                this.setState({ lists });
            });
    }*/

    render() {
        console.log(this.state.lists);

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
                    <ListItemText primary={ elem.name } />
                </ListItem>
            </Link>
            )
        );

        return (
            <div className="lists-user">
                <List>
                    { lists }
                    <ListItem>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <CreateList user={ this.props.userId } addList={ this.addList } />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default ListsUser;
