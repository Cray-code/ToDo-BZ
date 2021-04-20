import update from 'react-addons-update';

const user = {
  user: {},
};

export default (store = user, action) => {
  switch(action.type) {
    case 'LOAD_USER': {
      return update(store, {
        user: { $set: action.payload.data }
      });
    }
    case 'LOAD_USER_ID': {
      return update(store, {
        user: { $set: action.payload.data }
      });
    }

    default: {
      return store;
    }
  };
};