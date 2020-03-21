import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TodoList from '../components/TodoList/TodoList';
import TodoForm from '../components/TodoForm/TodoForm';
// import TodoModal from "../components/TodoModal/TodoModal";
import Navigation from '../components/Navigation/Navigation';

import { fetching, updateTodos } from '../redux/actions/actions';

import styles from './App.module.css';

const App = props => {
    const API_KEY = '$2b$10$j5fgQlXvY.NjfsN7ZrTtueuGmlSSR.PwqJPHxSAEG8yF/z4MEJ3gi';
    const URL = 'https://api.jsonbin.io/b/5e67161018ca1e372e497c17/2';
    
    useEffect(() => {
        const fetchData = async () => {
            const init = {
                method: 'GET',
                json: true,
                headers: {
                    'secret-key': API_KEY
                }
            };
            const response = await fetch(URL, init);
            const data = await response.json();
            props.setTodos(data.todos);
            props.setFetching(false);
        }
        fetchData().catch(error => console.error(error));
    }, []);
    
    const mainSection = (
        <main className={styles.appMain}>
            <Switch>
                <Route path="/" exact>
                    <TodoList todos={props.todos} />
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
                { props.isFetching ? spinner : mainSection }
            </Router>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
    isFetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
    setFetching(isFetching) {
        dispatch(fetching(isFetching));
    },
    setTodos(todos) {
        dispatch(updateTodos(todos));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);