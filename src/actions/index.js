import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

const ROOT_URL = 'http://larblogapp.devel/api';
//  const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {

  const postsPromise = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: postsPromise
  }
};

export const fetchPost = (id) => {

  const postPromise = axios.get(`${ROOT_URL}/posts/${id}`);
  return {
    type: FETCH_POST,
    payload: postPromise
  }
};

export const createPost = (values, callback) => {

  const storedPostPromise = axios({
    method: 'post',
    url: `${ROOT_URL}/posts`,
    data: {
      title: values.title,
      categories: values.categories,
      content: values.content
    }
  }).then( () => callback() );

  return {
    type: CREATE_POST,
    payload: storedPostPromise
  }
}

export const editPost = (id, values, callback) => {
  const editPostPromise = axios({
    method: 'put',
    url: `${ROOT_URL}/posts/${id}`,
    data: {
      title: values.title,
      categories: values.categories,
      content: values.content
    }
  }).then( () => callback() );

  return {
    type: EDIT_POST,
    payload: editPostPromise
  }
}

export const deletePost = (id, callback) => {
  axios({
    method: 'delete',
    url: `${ROOT_URL}/posts/${id}`
  }).then( () => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}
