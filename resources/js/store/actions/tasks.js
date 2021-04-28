import { RSAA, getJSON } from "redux-api-middleware";

export const loadTasks = () => ({
    [RSAA]: {
        endpoint: `/api/tasks`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'credentials': 'same-origin'
                },
        types: [
            'LOAD_TASKS_REQUEST',
            {
                type: 'LOAD_TASKS_SUCCESS',
                payload: async (action, state, responce) => {
                    try {
                        const res = await getJSON(responce);
                         //console.log('Tasks: '+res);
                        return { data: res };
                    }
                    catch(err) {
                      console.log(err);
                      return { data: { name: 'System', text: 'Load tasks failed' } };
                    }

                },
            },
            'LOAD_TASKS_FAILURE'
        ]

    }
});


export const addTask = (name, description, list_id, term_id, repeat_id, cronTime, favorites, is_complete) => ({
    [RSAA]: {
        endpoint: '/api/tasks',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'credentials': 'same-origin'
                },
        body: JSON.stringify({ name, description, list_id, term_id, repeat_id, cronTime, favorites, is_complete }),
        types: [
            'ADD_TASK_REQUEST',
            {
                type: 'ADD_TASK_SUCCESS',
                payload: async (action, state, response) => {
                    try {
                        const result = await getJSON(response);
                        console.log({ data: result })
                        if (res.ok) {
                            return { data: result };
                        }
                    }
                    catch(err) {
                      console.log(err);
                      return { data: { name: 'System', text: 'ADD Task failed' } };
                    }

                },
            },
            'ADD_TASK_FAILURE',
        ]
    }
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ULIST_ID: 'SHOW_ULIST_ID',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const setVisibilityFilter = (filter,paramFilters) => ({
  type: 'SET_VISIBILITY_FILTER',
  payload:  { data: {visibilityFilter: filter, paramFilters: paramFilters || []} }
});

export const toggleTask = id => ({
  type: 'TOGGLE_TASK',
  id
});



// export const loadTasks = (list) => ({
//     [RSAA]: {
//         endpoint: `/api/tasks/list/${list}`,
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').getAttribute('content'),
//             'credentials': 'same-origin'
//                 },
//         types: [
//             'LOAD_TASKS_REQUEST',
//             {
//                 type: 'LOAD_TASKS_SUCCESS',
//                 payload: async (action, state, responce) => {
//                     try {
//                         const res = await getJSON(responce);
//                          console.log('Tasks: '+res);
//                         return { data: res };
//                     }
//                     catch(err) {
//                       console.log(err);
//                       return { data: { name: 'System', text: 'Load tasks failed' } };
//                     }

//                 },
//             },
//             'LOAD_TASKS_FAILURE'
//         ]

//     }
// });