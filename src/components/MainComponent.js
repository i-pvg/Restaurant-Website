import React, { Component } from 'react';
import Menu from './MenuComponents';
import Dishdetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Contact from './ContactComponent';

//maps reduxstore-state into props that will be
//available to the component.

//this state is the state obtained from the redux store.
const mapStateToProps = state =>{
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders

  }
}

class Main extends Component {

  constructor(props){
    super(props);
  }

//since we connected the states to props, so we change
//this.state to this.prop in lines 38-40 and so on.
  render() {

    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter( (dish) => dish.featured)[0]}
                leader={this.props.leaders.filter( (leader) => leader.featured)[0]}
                promotion={this.props.dishes.filter( (promo) => promo.featured)[0]}
          />
        );
    };


    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
        );

    }







    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={ () => <About leaders={this.props.leaders} />} />
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

export default withRouter(connect(mapStateToProps)(Main));
//states are derived from the redux store by connecting
// mapStateToProps component to reduxStore.
//So we wrap the main inside a connect.
