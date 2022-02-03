import { RECEIVE_REVIEW,RECEIVE_LISTING } from "../actions/listings_actions";


const reviewsReducer = (oldState={},action) => {
  Object.freeze(oldState)
    switch (action.type) {
      case RECEIVE_REVIEW:
        return  Object.assign({}, oldState, { [action.review.id]: action.review })
      case RECEIVE_LISTING:
        return   Object.assign({}, oldState, action.reviews)
      default:
        return oldState;
    }
}


export default reviewsReducer;
