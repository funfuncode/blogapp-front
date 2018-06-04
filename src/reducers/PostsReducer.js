import { FETCH_POSTS } from '../actions/index';
import { CREATE_POST } from '../actions/index';

export default function(state = {}, action){

  switch(action.type){

    case FETCH_POSTS :
    console.log(action.payload);
    const posts = action.payload.data.reduce( (total, post) => {
      total[post.id] = post;
      return total;
    }, {} );
      return posts;


    default :
      return state;
  }
}
