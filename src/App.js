import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Posts from './Components/Posts';
import Boasts from './Components/Boasts';
import Roasts from './Components/Roasts';
import Trending from './Components/Trending';
import CreatePost from './Components/CreatePost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {


  render() {
    return (

      <div className="app">
        <Router>
          <div className="app__page">
            <Sidebar />
            <Switch> 
              <Route path='/boasts'><Boasts /></Route>
              <Route path='/roasts'><Roasts /></Route>
              <Route path='/highest_rated'><Trending /></Route>
              <Route path='/create'><CreatePost /></Route>
              <Route path='/'><Posts /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
