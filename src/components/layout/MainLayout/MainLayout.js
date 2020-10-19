import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import clsx from 'clsx';

import styles from './MainLayout.module.scss';

const MainLayout = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>MainLayout</h2>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainLayout;