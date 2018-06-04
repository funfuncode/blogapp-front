import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://larblogapp.devel/api';
//  const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {

  const postsPromise = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: postsPromise
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
