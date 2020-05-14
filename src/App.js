import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

//Provider makes ReduxStore available to all the
//components of the Application as it is being
//imported here.



class App extends Component {

	render() {
	    return (

	    	<Provider store={store}>
		        <BrowserRouter>
		        	<div className="App">
		          		<Main/>
		        	</div>
		      </BrowserRouter>
	    	</Provider>
	    );
	}
}

export default App;
