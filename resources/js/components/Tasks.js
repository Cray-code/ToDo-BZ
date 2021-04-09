import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TaskItem from "./TaskItem";
import List from '@material-ui/core/List';
import { loadTasks, addTask } from '@actions/tasks';
import {Link} from "react-router-dom";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {
        await this.props.loadTasks(this.props.listId);
    };


    render() {
        const { tasks } = this.props;
        const Tasks = (tasks) ? tasks.map((elem) => (
            <Link to={`/task/${elem.id}`}
                  key={ elem.id }
                  className="tasks-user__link"
            >
                <h5>List_id: {elem.list_id}</h5>
                <p>Task_id: {elem.id}</p>
                <h6>Name: {elem.name}</h6>
                <i>Description: {elem.description}</i>
                <h6>favorites: {elem.favorites}</h6>
                {/*<p>term_id: {elem.term_id}</p>*/}
                {/*<p>repeat_id: {elem.repeat_id}</p>*/}
                <i>Cron: {elem.cronTime}</i>
                <hr/>
                {/*<TaskItem  key={ elem.id } taskId={ elem.id } taskName={ elem.name } />*/}
            </Link>
            )
        ) : ['Задач пока нет...'];
        return (
            <div className="tasks">
                <List component="div">
                 { Tasks }
                        <TaskItem user={ this.props.userId } taskId='111'  />
                </List>

                    <div>
                        <p>userId - { this.props.userId }</p>
                        <p>listId - { this.props.listId }</p>
                    </div>

           </div>
        );
    }
}

// export default Tasks;

const mapState = ({ tasksReducer }) => ({
    tasks: tasksReducer.tasks,
});

const mapAction = dispatch => bindActionCreators({ addTask, loadTasks }, dispatch);

export default connect(mapState, mapAction)(Tasks);
