import React from 'react';

import styles from './TodoForm.module.css';

const TodoForm = props => {
    return (
        <form className={styles.todoForm}>
            <h2 className={styles.todoFormTitle}>Nuevo TODO</h2>
            <div className={styles.todoFormInputsWrapper}>
                <div className={styles.todoFormInputWrapper}>
                    <span className={styles.todoFormLabel}>Titulo*</span>
                    <input className={styles.todoFormInput} type="text" placeholder="Escribe el titulo"/>
                </div>
                <div className={styles.todoFormInputWrapper}>
                    <span className={styles.todoFormLabel}>Descripción*</span>
                    <input className={styles.todoFormInput} type="text" placeholder="Escribe la descripción"/>
                </div>
                <label className={styles.todoFormLabel} htmlFor="formTodoIsImportant">Importante</label>
                <input type="checkbox" id="formTodoIsImportant"/>
            </div>
            <input className={styles.todoFormButton} type="submit" value="Guardar"/>
        </form>
    );
};

export default TodoForm;