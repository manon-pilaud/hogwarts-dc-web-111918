import React from 'react'

export default class Hog extends React.Component{
  constructor(){
    super()
    this.state={
      showDetails: false
    }
  }

  showHog=()=>{
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render(props){
    let weight = this.props.hogInfo["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    let {name,specialty} = this.props.hogInfo
    let newName = name.toLowerCase().split(' ').join('_')

    return(
      <div className="hogCard">

        <div className="shownInfo" onClick={this.showHog}>
          <h2>{name}</h2>
          <img  alt={name} src={require(`../hog-imgs/${newName}.jpg`)}></img>
        </div>
        {this.state.showDetails?
        <div className="hiddenInfo">
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          Greased: <input type="checkbox" onChange={()=>{this.props.hogGreased(this.props.hogInfo)}}/>
      </div>:null
      }
      </div>
    )
  }
}
