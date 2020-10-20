import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import PostsList from './../../features/PostsList/PostsListContainer';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <PostsList />
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default HomePage;