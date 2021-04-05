import update from 'react-addons-update';

const storeLists = {
    lists: [],
};

export default (store = storeLists, action) => {
    switch (action.type) {
        case 'ADD_LIST_SUCCESS': {
            return update(store, {
                lists: { $push: action.payload.data }
            });
        }
        case 'LOAD_LISTS_SUCCESS': {
            return update(store, {
                lists: { $set: action.payload.data }
            });
        }
        default: {
            return store;
        }
    }
};
