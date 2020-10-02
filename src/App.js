import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    posts: []
  }


  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>GhostPost v2.0</h1>
        <main>
          {this.state.posts.map(p => (
            <ul>
              <h2>{p.is_boast}</h2>
              <h3>"{p.post}"</h3>
              <p>Score: {p.total_score}</p>
              <p>Created: {p.time_submitted}</p>
              <input type='button' value='Upvote' />
              <input type='button' value='Downvote' />
              <hr />
            </ul>
          ))};
        </main>
      </div>
    );
  }
}

export default App;
