import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadTasks, addTask, toggleTask, VisibilityFilters } from '@actions/tasks';
import { loadTerms } from '@actions/terms';
import { loadRepeats } from '@actions/repeats';
import Tasks from "@logged_in/Tasks";



const getVisibleTasks = (tasks, filter, paramFilter) => {
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

const nameResolveId = (sourceId,dataForId,nameId) => {
    let namesLinkId = '';
   
    dataForId.forEach(element => {
        if (element.id === sourceId) {
            namesLinkId = element.name;
        }  
    });
    
    return {nameId : namesLinkId};
}

const mapState = ({ tasksReducer, listsReducer, termsReducer, repeatsReducer, visibilityFilterReducer }) => ({
    tasks:  getVisibleTasks(tasksReducer.tasks &&
        tasksReducer.tasks.map(task =>
            Object.assign({}, 
                task, 
                nameResolveId(task.list_id,listsReducer.lists,'list_name'),
                nameResolveId(task.term_id,termsReducer.terms,'term_name'),
                nameResolveId(task.repeat_id,repeatsReducer.repeats,'repeat_name')
                ) 
            //{...task, ...tasksResolveId(task)}  
            //task                                      
        ), 
        visibilityFilterReducer.visibilityFilter,
        visibilityFilterReducer.paramFilters
        ),
    lists:  listsReducer.lists,
    terms: termsReducer.terms,
    repeats: repeatsReducer.repeats,
    filter: visibilityFilterReducer.visibilityFilter,
    paramFilters: visibilityFilterReducer.paramFilters
});

const mapAction = dispatch => bindActionCreators(
    { addTask, loadTasks, loadTerms, loadRepeats },
    // {
    //     toggleTask: id => dispatch(toggleTask(id))
    // }, 
    dispatch
    );

export default connect(mapState, mapAction)(Tasks);
