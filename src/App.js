import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Beers from './Components/Beers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import BeerDetail from './Components/BeerDetail';


export default class App extends Component {
  
  state = {
    beers: []
  }

  componentDidMount= () => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then(res => res.json())
    .then(result => {
      console.log("result from API: ", result)
      this.setState({
        beers: result
      })}
      )
  }

  render() {
    return (
      <div className="App">
          
          <Link to="/beers">Beers</Link> |
          <Link to="/randombeer">Random beer</Link>
          <Link to='/newbeer'>New beer</Link>
          
          <Switch>
            <Route exact path='/beers'><Beers beers={this.state.beers}/></Route>
            {/* <Route path='/beers/:id' component={BeerDetail}></Route> */}
            <Route path='/beers/:id'>{(props) => <BeerDetail {...props} beers={this.state.beers} />}</Route>            
            <Route path='/newbeer'><NewBeer /></Route>
            <Route path='/randombeer'><RandomBeer /></Route>
          </Switch>      
      </div>
    )
  }
}