import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';
import Navigation from '../components/Navigation/Navigation';

import styles from './App.module.css';

const App = props => {
    const [todos, todosHandler] = useState([
        { id: 1, text: 'Mejorar aprendizaje de React' },
        { id: 2, text: 'Perfeccionar manejo de Redux & MobX' },
        { id: 3, text: 'Aprender Unit Testing' },
        { id: 4, text: 'Empezar a estudiar Node.js' },
    ]);
    
    return (
        <React.Fragment>
        <Router>
            <Navigation/>
            <main className={styles.app}>
                <Switch>
                    <Route path="/" exact>
                        <TodoList todos={todos}/>
                    </Route>
                    <Route path="/add" exact>
                        <TodoForm />
                    </Route>
                </Switch>
            </main>
        </Router>
        </React.Fragment>
    );
};

export default App;
