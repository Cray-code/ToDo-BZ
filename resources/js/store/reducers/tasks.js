import update from 'react-addons-update';

const storeTasks = {
    tasks: []
};

export default (store = storeTasks, action) => {
    switch (action.type) {
        case 'ADD_TASK_SUCCESS': {
            return update(store, {
                tasks: { $push: [action.payload.data] }
            });
        }
        case 'LOAD_TASKS_SUCCESS': {
            return update(store, {
                tasks: { $set: action.payload.data }
            });
        }
        case 'UPDATE_TASK_SUCCESS': {
            return update(store, {
                tasks: { $merge: [action.payload.data] }
            });
        }      
        case 'LOAD_TASKS_FAILURE': {
            console.log(action.payload.data)
        }
          
        default: {
            return store;
        }
    }
};