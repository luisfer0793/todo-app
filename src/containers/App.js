import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';
//import TodoModal from "../components/TodoModal/TodoModal";

import Navigation from '../components/Navigation/Navigation';
import styles from './App.module.css';

const App = props => {
    const API_KEY = '$2b$10$j5fgQlXvY.NjfsN7ZrTtueuGmlSSR.PwqJPHxSAEG8yF/z4MEJ3gi';
    const URL = 'https://api.jsonbin.io/b/5e67161018ca1e372e497c17/1';
    
    const [todos, setTodos] = useState([]);
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
    
    useEffect(() => {
        const headers = new Headers({
            'secret-key': API_KEY
        });
        fetch(URL, {headers})
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error(error))
    }, []);
    
    const mainSection = (
        <main className={styles.app}>
            <Switch>
                <Route path="/" exact>
                    <TodoList todos={todos} />
                </Route>
                <Route path="/add" exact>
                    <TodoForm />
                </Route>
            </Switch>
        </main>
    );
    
    const spinner = (
        <div className={styles.appLoaderContainer}>
            <Loader type="TailSpin" color="#071B30"/>
        </div>
    );
    
    return (
        <React.Fragment>
            <Router>
                <Navigation/>
                {isSpinnerVisible ? spinner : mainSection}
            </Router>
        </React.Fragment>
    );
};

export default App;