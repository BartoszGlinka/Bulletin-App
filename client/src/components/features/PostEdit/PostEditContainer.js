import PostEdit from './PostEdit';
import { connect } from 'react-redux';
import { addPostRequest } from './../../../redux/postsRedux';

const mapStateToProps = state => ({
  loading: state.posts.loading.active,
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
