import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {

  componentDidMount(){
    this.props.onFetchPost(this.props.match.params.id);
  }

  render(){

    let postContent = <div>Loading post...</div>;

    if(this.props.post){
      postContent = (
        <div>
          <h3>{this.props.post.title}</h3>
          <h5>{this.props.post.categories}</h5>
          <p>{this.props.post.content}</p>
          <Link to="/" className="btn btn-info">Go Back</Link>
          <Link to={`/posts/${this.props.post.id}/edit`} className="btn btn-warning ml-4">Edit</Link>
          <button onClick={ () => this.props.onDeletePost(this.props.post.id, () => this.props.history.push('/'))} className="btn btn-danger ml-4">Delete post</button>
        </div>
      );
    }

    return postContent;

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post.id === parseInt(ownProps.match.params.id, 10) ? state.post : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPost: (id) => dispatch(fetchPost(id)),
    onDeletePost: (id, callback) => dispatch(deletePost(id, callback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
