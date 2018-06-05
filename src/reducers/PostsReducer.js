import { FETCH_POSTS, DELETE_POST} from '../actions/index';

export default function(state = {}, action){

  switch(action.type){

    case FETCH_POSTS :
    const posts = action.payload.data.reduce( (total, post) => {
      total[post.id] = post;
      return total;
    }, {} );
      return posts;

    case DELETE_POST :
      const postsToUpdate = {...state.posts };
      const updatedPosts = Object.entries(postsToUpdate)
                            .filter( (postEntry) => postEntry[0] !== action.payload.id )
                            .reduce( (total, postEntry) => {
                              total[postEntry[0]] = postEntry[1];
                              return total;
                            }, {});
      return updatedPosts;

    default :
      return state;
  }
}
