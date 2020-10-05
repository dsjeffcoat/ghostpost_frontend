import React from 'react';
import './css/Boasts.css';
import { Link } from 'react-router-dom';

class Boasts extends React.Component {
    constructor(props){
        super(props);
          this.state = {
            posts: [],
          }
          this.fetchTasks = this.fetchTasks.bind(this)
      };
    
      componentDidMount() {
        this.fetchTasks()
      }
    
      fetchTasks() {
        console.log('Fetching...')
    
        fetch('http://127.0.0.1:8000/api/posts/boasts')
        .then(res => res.json())
        .then(data => 
          this.setState({ posts: data})
          );
      }

    render() {
        const posts = this.state.posts
        return (
            <div className="posts">
                <h1>Latest Boasts</h1>
                <main>
                    {posts.map(p => (
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
        )
    }
}

export default Boasts;
