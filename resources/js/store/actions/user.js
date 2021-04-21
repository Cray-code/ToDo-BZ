import { RSAA, getJSON } from 'redux-api-middleware';

export const loadUser = () => ({
  [RSAA]: {
    endpoint: '/api/usr/',
    method: 'GET',
    types: [
      'LOAD_USER_REQUEST', 
      {
        type: 'LOAD_USER',
        payload: async (action, state, responce) => {
          const res = await getJSON(responce);
          return { data: JSON.parse(res) };
        },
      }, 
      'LOAD_USER_FAILURE'
    ]
  }
});
export const loadActiveUser = id => ({
  type: 'LOAD_USER_ID',
  payload: { data: {id: id ? id : null }}
  
});