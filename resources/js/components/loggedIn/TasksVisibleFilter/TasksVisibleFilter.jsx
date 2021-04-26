import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadTasks, addTask, toggleTask, VisibilityFilters } from '@actions/tasks';
import { loadTerms } from '@actions/terms';
import { loadRepeats } from '@actions/repeats';
import Tasks from "@logged_in/Tasks";



const getVisibleTasks = (tasks, filter,paramFilter) => {
    console.log(`${filter} - ${paramFilter} - `);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks
      case VisibilityFilters.SHOW_ULIST_ID:
        return tasks.filter(t => t.list_id==paramFilter)  
    case VisibilityFilters.SHOW_COMPLETED:
      return tasks.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return tasks.filter(t => !t.completed)
    default:
      //throw new Error('Unknown filter: ' + filter)
      return tasks
  }
}



const mapState = ({ tasksReducer, termsReducer, repeatsReducer, visibilityFilterReducer }) => ({
    tasks:  getVisibleTasks(tasksReducer.tasks, visibilityFilterReducer.visibilityFilter,visibilityFilterReducer.paramFilters),
    //tasks:  tasksReducer.tasks,
    terms: termsReducer.terms,
    repeats: repeatsReducer.repeats,
    filter: visibilityFilterReducer.visibilityFilter
});

const mapAction = dispatch => bindActionCreators(
    { addTask, loadTasks, loadTerms, loadRepeats },
    // {
    //     toggleTask: id => dispatch(toggleTask(id))
    // }, 
    dispatch
    );

export default connect(mapState, mapAction)(Tasks);
