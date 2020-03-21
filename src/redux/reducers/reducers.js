export const isFetching = (state = true, action) => {
    if (action.type === 'FETCHING') return action.payload.isFetching;
    else return state;
};

export const counter = (state = 0, action) => {
    if (action.type === 'ADD') return state + action.payload.amount;
    else return state;
};

export const todos = (state = [], action) => {
    if (action.type === 'UPDATE_TODOS') return [...state, ...action.payload.todos];
    else return state;
};