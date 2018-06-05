import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import PostReducer from './PostReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
  form: formReducer
});

export default rootReducer;
