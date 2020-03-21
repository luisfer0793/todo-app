import { createStore, combineReducers } from 'redux';

// Importando los reducers.
import { isFetching, counter, todos } from '../reducers/reducers';

// Combinando los reducers.
const reducers = combineReducers({
    isFetching,
    counter,
    todos
});

// Asignando los reduces los cuales generaran un estado general.
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;