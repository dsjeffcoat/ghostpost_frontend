import React from 'react';
import './css/CreatePost.css';
import { Link } from 'react-router-dom';

class CreatePost extends React.Component {
    constructor(props){
        super(props);
          this.state = {
            post: '',
            is_boast: true
          }
          this.fetchTasks = this.fetchTasks.bind(this)
      };
    
      componentDidMount() {
        this.fetchTasks()
      }
    
      fetchTasks() {
        console.log('Fetching...')
    
        fetch('http://127.0.0.1:8000/api/posts/')
        .then(res => res.json())
        .then(data => 
          this.setState({ posts: data})
          );
      }

    render() {
        const posts = this.state.posts
        return (
            <div className="posts">
                <h1>Create A Post</h1>
            </div>
        )
    }
}

export default CreatePost;