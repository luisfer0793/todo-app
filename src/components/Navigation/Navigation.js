import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    background-color: #071B30;
    color: #f2f3f4;
`;

const StyledDiv = styled.div`
    display: flex;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: space-between;
`;

const Navigation = props => (
    <StyledNav>
        <StyledDiv>
            <Link to="/" className={[styles.navigationMenuLink, styles.navigationLogo].join(' ')}>My TODO List</Link>
            <ul className={styles.navigationMenu}>
                <li className={styles.navigationMenuItem}><Link className={styles.navigationMenuLink} to="/add">Agregar</Link></li>
                <li className={styles.navigationMenuItem}><Link className={styles.navigationMenuLink} to="/update">Actualizar</Link></li>
                <li className={styles.navigationMenuItem}><Link className={styles.navigationMenuLink} to="/edit">Modificar</Link></li>
            </ul>
        </StyledDiv>
    </StyledNav>
);

export default Navigation;