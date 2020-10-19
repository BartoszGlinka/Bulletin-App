import React, { useEffect }from 'react';
import { PropTypes } from 'prop-types';
import styles from './PostsList.module.scss';

const PostsList = ({ fetchPosts, posts, loading }) => {

  // run function in order to load data from server
  useEffect(() => {
    fetchPosts();
  }, []);
  
  return (
    <div className={styles.container}>
      <h2>Posts list</h2>
      { loading && (<h3>Loading...</h3>) }
      <ul>
        {posts.map(post => <li key={post.id}>{ post.title }</li>)}
      </ul>
    </div>
  );
};

PostsList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PostsList;
