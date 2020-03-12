import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = props => (
    <nav className={styles.navigation}>
        <div className={styles.navigationContainer}>
            <Link to="/" className={[styles.navigationMenuLink, styles.navigationLogo].join(' ')}>My TODO List</Link>
            <ul className={styles.navigationMenu}>
                <li className={styles.navigationMenuItem}><Link className={styles.navigationMenuLink} to="/add">Agregar</Link></li>
                <li className={styles.navigationMenuItem}><Link className={styles.navigationMenuLink} to="/update">Actualizar</Link></li>
                <li className={styles.navigationMenuItem}><Link className={styles.navigationMenuLink} to="/edit">Modificar</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navigation;