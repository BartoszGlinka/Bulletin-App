import { connect } from 'react-redux';
import { fetchPostsRequest } from '../../../redux/postsRedux';
import PostsList from './PostsList';

const mapStateToProps = state => ({
  posts: state.posts.data,
  loading: state.posts.loading.active,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);