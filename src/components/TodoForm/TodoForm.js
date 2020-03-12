import React from 'react';

import styles from './TodoForm.module.css';

const TodoForm = props => (
    <form className={styles.todoForm}>
        <h2 className={styles.todoFormTitle}>Nuevo TODO</h2>
        <div className={styles.todoFormFields}>
            
            <div className={styles.todoFormInputWrapper}>
                <span className={styles.todoFormLabel}>Titulo*</span>
                <input className={styles.todoFormInput} type="text" placeholder="Escribe el titulo"/>
            </div>
            
            {/*<label className={styles.todoFormLabel} htmlFor="formTodoTitle">Titulo</label>*/}
            
            <label className={styles.todoFormLabel} htmlFor="formTodoDescription">Descripción</label>
                <textarea className={[styles.todoFormTextArea, styles.todoFormInput].join(' ')} id="formTodoDescription"/>
            <label className={styles.todoFormLabel} htmlFor="formTodoIsImportant">Importante</label>
                <input className={styles} type="checkbox" id="formTodoIsImportant"/>
        </div>
        <input className={styles} type="submit" value="Guardar"/>
    </form>
);

export default TodoForm;