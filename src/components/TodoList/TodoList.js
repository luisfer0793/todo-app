import React from 'react';

import Todo from './Todo/Todo';

import styles from './TodoList.module.css';

const TodoList = props => (
    <ul className={styles.todoList}>
        {props.todos.map(todo => <Todo key={todo.id} text={todo.text}/>)}
    </ul>
);

export default TodoList;