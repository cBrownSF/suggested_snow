import {connect} from 'react-redux';
import {createListings} from "../../actions/listings_actions";
import ListingForm from './listing_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.listings,
    currentUser: state.entities.users[state.sessions.currentUser]
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return{
    createForm: (listing) => dispatch(createListings(listing))
  }
}
export default connect (mapStateToProps,mapDispatchtoProps)(ListingForm)