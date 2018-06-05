import { FETCH_POST } from '../actions/index';


export default function(state = {}, action){

  switch(action.type){

    case FETCH_POST :
    const post = action.payload.data;
      return post;


    default :
      return state;
  }
}
