import React from 'react';
import { faTimesCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Todo.module.css';

const Todo = props => (
    <li className={styles.todo}>
        <span>{props.title}</span>
        <div className={styles.todoActionContainer}>
            <span className={[styles.todoAction, styles.todoActionOpen].join(' ')}><FontAwesomeIcon icon={faInfoCircle}/></span>
            <span className={[styles.todoAction, styles.todoActionRemove].join(' ')}><FontAwesomeIcon icon={faTimesCircle}/></span>
        </div>
    </li>
);

export default Todo;