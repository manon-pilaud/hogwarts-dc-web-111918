import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer.js'
import FiltersContainer from './FiltersContainer.js'

let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
class App extends Component {
  constructor(){
    super()
    this.state={
      hogs: hogs,
      sort: 'name',
      filter: false
    }
  }

setSortState=(e)=>{
  let sortTerm= e.target.value
  this.setState({
    sort: sortTerm
  })
}



  hogGreased=(hogObj)=>{
    let newArray = this.state.hogs.map(hog=>{
      if(hog.name === hogObj.name){
         return {...hog, greased: !hog.greased}
      }
      return hog
    })
    this.setState({hogs:newArray})
  }

  handleSortHogs = () =>{
    let currentHogs = [...this.state.hogs]
    let sortedHogs = this.state.sort === 'name'?
        currentHogs.sort((a,b) => a.name.localeCompare(b.name))
     :

        currentHogs.sort((a,b) => b[weight] - a[weight])
    return sortedHogs
  }
setFilter=()=>{
  this.setState({
    filter: !this.state.filter
  })
}

hogSortHandle=()=>{
  return this.state.filter ? this.handleSortHogs().filter( hogs => hogs.greased === true) : this.handleSortHogs()
}


  render(){
    return (
      <div className="App">
          < Nav/>
        <FiltersContainer
          value={this.state.sort}
          setSortState={this.setSortState}
          setFilter={this.setFilter}/>
        <HogContainer hogData={this.hogSortHandle()} hogGreased={this.hogGreased}/>
      </div>
    )
  }
}

export default App;
