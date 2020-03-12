import React from 'react';

import styles from './Todo.module.css';

const Todo = props => (
    <li className={styles.todo}>
        <span>{props.text}</span>
        <span className={styles.todoRemove}>&times;</span>
    </li>
);

export default Todo;