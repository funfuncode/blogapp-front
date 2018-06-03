import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {

  const ROOT_URL = 'http://larblogapp.devel/api';
//  const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

  const postsPromise = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: postsPromise
  }
};
