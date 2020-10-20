import React from 'react';
import styles from './PostAdd.module.scss';
import PostAddForm from './../../features/PostAddForm/PostAddFormContainer'

const PostAdd = () => (
  <div className={styles.root}>
    <PostAddForm />
  </div>
);

export default PostAdd;
