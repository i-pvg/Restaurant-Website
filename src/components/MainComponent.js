import React, { Component } from 'react';
import Menu from './MenuComponents';
import Dishdetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import { Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES,
    };

  }

  render() {

    const HomePage = () => {
      return(
          <Home />
        );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />

//If we just wanted to return a component without passing any props
//to it we can simply write component={Menu}, but to pass props, we 
//write it through arrow funtion
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
