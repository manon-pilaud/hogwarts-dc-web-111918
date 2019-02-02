import React from 'react'
import Hog from './Hog.js'
export default class HogContainer extends React.Component{

  render(){
    return(
      <div>
      {this.props.hogData.map((hog,index)=>
        <Hog hogInfo={hog} key={index} hogGreased={this.props.hogGreased}/>
      )}
      </div>
    )
  }
}
