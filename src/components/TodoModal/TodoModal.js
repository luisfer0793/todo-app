import React from "react";
import ReactDOM from 'react-dom';

import styles from './TodoModal.module.css';

const TodoModal = props => ReactDOM.createPortal(
    <aside className={styles.todoModal}>
        <h2 className={styles.todoModalTitle}>{props.title}</h2>
    </aside>,
    document.getElementById('modal-root')
);

export default TodoModal;