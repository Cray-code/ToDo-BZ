import update from 'react-addons-update';
import { VisibilityFilters } from '@actions/tasks';

const storeFilters = {
    paramFilters: [],    
    visibilityFilter: VisibilityFilters.SHOW_ALL
};

const visibilityFilter = (store = storeFilters, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
        return update(store, 
                 { $set: action.payload.data }
            );      
    default:
      return store
  }
}

export default visibilityFilter
