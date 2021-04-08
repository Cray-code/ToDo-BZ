import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TaskItem from "./TaskItem";
import List from '@material-ui/core/List';
import { loadTasks, addTask } from '@actions/tasks';

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
                <TaskItem  key={ elem.id } taskId={ elem.id } taskName={ elem.name } />
            )
        ) : ['Задач пока нет...'];
        return (
            <div className="tasks">
                <p>tasks</p>
                <List component="div">
                 { Tasks}
                        <TaskItem user={ this.props.userId } taskId='111'  />                  
                </List>
                
                { !!this.props.listId && (
                    <div>
                        <p>userId - { this.props.userId }</p>
                        <p>listId - { this.props.listId }</p>
                    </div>
                )}
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