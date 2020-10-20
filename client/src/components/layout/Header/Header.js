import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Header.module.scss';

const Header = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <a href="https://google.com" className={styles.logLink}>Zaloguj</a>
    <a href="https://google.com" className={styles.logLink}>Wyloguj</a>
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
