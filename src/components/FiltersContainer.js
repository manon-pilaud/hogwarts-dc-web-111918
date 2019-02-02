import React from 'react'

export default class FiltersContainer extends React.Component{

  render(props){
    return(
      <div>
      <select onChange={this.props.setSortState}>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
      </select>
      Greased <input type="checkbox" onChange={this.props.setFilter}/>
      </div>
    )
  }
}
