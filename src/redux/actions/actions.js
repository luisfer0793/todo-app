export const fetching = (isFetching = false) => ({
    type: 'FETCHING',
    payload: { isFetching }
});

export const add = (amount = 0) => ({
    type: 'ADD',
    payload: { amount }
});

export const updateTodos = (todos = []) => ({
    type: 'UPDATE_TODOS',
    payload: { todos }
});