import React from "react";
import { Link } from "react-router-dom";
import { clearListings } from "../../actions/filter_actions";
import SearchBar from "./search_bar";
import { withRouter } from "react-router";
class HomePage extends React.Component {
  constructor(props){
    super(props)
    debugger;
  }
  componentDidMount(){
    this.props.clearListings()
  }
  
  render() { 
    const yosemiteProps = {
      pathname: "/listings",
      state: { lng: -119.538330, lat: 37.865101, type: "locality"},
    };
    const southCarolinaProps={
      pathname: "/listings",
      state: { lng: - 81.163727, lat: 33.836082, type: "administrative_area_level_1" },
    }
    return (  
      <section>
      <div className='splash-container'>
        <div className='title-container'>
          <h1 className="header-home">Find yourself outside</h1>
          <p className="sub-header-home">Discover and book camping, glamping, parks, and cabins</p>
        </div>
        </div>
      <div>
        <SearchBar 
        className='search-wrapper'
        history={this.props.history}
        clearListings={this.props.clearListings}
        />
      </div>
      <div className="main-photo-div">
          {/* <img src="https://hip-lamping-cover-photos.s3.us-west-1.amazonaws.com/beufort-harbor-main-photo.jpeg"/> */}
      </div>
      <div className='home-page-link-div' >
          <div className="home-page-link-photo-left">
            <div className="photo-inside-div-home">
            </div>
            <div className='card-cover'>
              <Link className="link-yos-carolina" to={southCarolinaProps}><p className="font-main-page-photo">Carolina Hideaways</p></Link>
            </div>
          </div>
          <div className="home-page-link-photos">
            <div className="photo-inside-div-home">
              
            </div>
            <div className='card-cover-right'>
              <Link className="link-yos-carolina"to={yosemiteProps}><p className="font-main-page-photo">Yosemite Getaways</p></Link>
              
            </div>
          </div>
          {/* <div className="home-page-link-photo-right">
            <div>

            </div>
          </div> */}
      </div>
        </section>


    );
  }
}
 
export default withRouter(HomePage);
