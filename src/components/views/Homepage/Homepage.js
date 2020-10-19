import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import PostsList from './../../features/PostsList/PostsListContainer';
import PostAdd from './../../features/PostAdd/PostAdd';

import TextField from '@material-ui/core/TextField';

class HomePage extends Component {

  state = {
    title: '',
    text: '',
    author: '',
  }
 
render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h1 className={styles.title}>New Post</h1>
          <TextField
            id="outlined-dense"
            label="Title"
            margin="dense"
            helperText={this.state.helperText}
            variant="outlined"
            value={this.state.title}
            onChange={(event) => this.setState({title: event.target.value})}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Text"
            multiline
            rowsMax="4"
            helperText={this.state.helperText}
            value={this.state.content}
            onChange={(event) => this.setState({text: event.target.value})}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-dense"
            label="Author"
            margin="dense"
            helperText={this.state.helperText}
            variant="outlined"
            value={this.state.author}
            onChange={(event) => this.setState({author: event.target.value})}
          />
        </div>
        <PostAdd />
        <PostsList />
      </div>
    )
};
};

HomePage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default HomePage;