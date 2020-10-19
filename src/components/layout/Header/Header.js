import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Header.module.scss';

const Header = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Header</h2>
    <a href="/" className={styles.logLink}>Zaloguj</a>
    <a href="/" className={styles.logLink}>Wyloguj</a>
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
