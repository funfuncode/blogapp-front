import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

  componentDidMount(){
    this.props.onFetch();
  }

  render(){

    let postsToRender = <div>no posts to display</div>;

    if(this.props.posts){
      postsToRender = Object.values(this.props.posts).map( (post) => {
        return (
          <li className="list-group-item" key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
        );
      });
    }


    return (
      <div>
        <h3>Posts:</h3>
        <ul className="list-group col-md-6">{postsToRender}</ul>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
