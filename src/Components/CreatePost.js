import React from 'react';
import './css/CreatePost.css';

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    is_boast: 'Boast',
                    post: '',
                }
            ]

        }
    }

    // TODO: Need to work on the functionality to transfer the logic from the form to the API backend.

    handleInputChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'select' ? target.selected : target.value;
        this.setState({
            [name]: value,
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/posts/', { 
            method: 'POST', 
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(res => {
                fetch('http://127.0.0.1:8000/api/posts/')
                    .then(res => res.json())
                    .then(res => console.log(res))
                    .then(alert('Your post has been submitted.'));
            })
    }

    render() {
        return (
            <div className="createPost">
                <h1>Create A Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="post">Post:</label>
                    <textarea name='post' value={this.state.posts.post} />
                    <br />
                    <label for="is_boast">Boast or Roast?:</label>
                    <select name="is_boast" value={this.state.posts.is_boast}>
                        <option selected="Boast">Boast</option>
                        <option selected="Roast">Roast</option>
                    </select>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default CreatePost;