import React from 'react'
import ReactDOM from 'react-dom';
import CreateMap from './newmap';
const miniMap =(props)=>{
  
  

  
  if (props.currentPage !== 8) {
    return null
  }
   return(
       <CreateMap
       lat={props.lat}
       lng={props.lng}
       />
   )
}

export default miniMap;