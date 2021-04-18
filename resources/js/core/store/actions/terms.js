import { RSAA, getJSON } from "redux-api-middleware";

export const loadTasks = (list) => ({
    [RSAA]: {
        endpoint: `/api/tasks/list/${list}`,
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
                        console.log(res);
                        return { data: res };
                        //return { data: JSON.parse(res) };
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

