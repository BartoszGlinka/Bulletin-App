import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PostEdit.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const PostEdit = ({ addPost, loading }) => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const created = new Date();
  const updated = new Date();
  const status = 'published';

  const handleSubmit = () => {
    addPost({
      title,
      text,
      author,
      created,
      updated,
      status,
    });
  };

  return(
    <div className={styles.root}>
      <form className={styles.form}>
        <h1 className={styles.title}>Edit Post</h1>
        <TextField
          id="outlined-dense"
          label="Title"
          margin="dense"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Text"
          multiline
          rowsMax="4"
          value={text}
          onChange={(event) => setText(event.target.value)}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-dense"
          label="Author"
          margin="dense"
          variant="outlined"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <Button onClick={handleSubmit} variant="contained" color="primary" className={styles.button}>
          Add post
        </Button>
      </form>
    </div>
  );
};

PostEdit.propTypes = {
  className: PropTypes.string,
  addPost: PropTypes.func,
  loading: PropTypes.bool,
};

export default PostEdit;
