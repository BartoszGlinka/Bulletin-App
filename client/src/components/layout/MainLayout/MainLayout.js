import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import clsx from 'clsx';

import styles from './MainLayout.module.scss';

const MainLayout = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <a href="/" className={styles.logo}><h2>Bulletin App</h2></a>
      <a href="/post/add" className={styles.buttonNav}>Add Post</a>
      <a href="/post/:id" className={styles.buttonNav}>One Post</a>
      <a href="/post/:id/edit" className={styles.buttonNav}>Edit Post</a>
    </div>    
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainLayout;