import React from 'react';
import './css/Boasts.css';
import * as moment from 'moment';
import Button from '@material-ui/core/Button';

class Boasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    is_boast: true,
                    post: 'post',
                    upvote: 0,
                    downvote: 0,
                    time_submitted: 'MM.DD.YYYY'
                },
            ]
        }
    };


    componentDidMount() {
        console.log('Fetching...')

        fetch('http://127.0.0.1:8000/api/posts/boasts')
            .then(res => res.json())
            .then(data =>
                this.setState({ posts: data })
            );
    }

    handleUpvote = (e, id) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/posts/' + id + '/upvote/')
            .then(res => res.json())
            .then(res => {
                fetch('http://127.0.0.1:8000/api/posts/')
                    .then(res => res.json())
                    .then(
                        result => this.forceUpdate(this.componentDidMount)
                        // (result => {this.setState({ posts: result})})
                        // (error => {this.setState({ error })})
                    );
            })
    }

    handleDownvote = (e, id) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/api/posts/' + id + '/downvote/')
            .then(res => res.json())
            .then(res => {
                fetch('http://127.0.0.1:8000/api/posts/')
                    .then(res => res.json())
                    .then(
                        result => this.forceUpdate(this.componentDidMount)
                        // (result => {this.setState({ posts: result})})
                        // (error => {this.setState({ error })})
                    );
            })
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
                            <p>Created: {moment(p.time_submitted).format('MMMM Do YYYY - hh:mm a')}</p>
                            <Button onClick={(e) => this.handleUpvote(e, p.id)} variant="contained" color="primary">{`Upvotes: ${p.upvote}`}</Button>
                            <Button onClick={(e) => this.handleDownvote(e, p.id)} variant="contained" color="secondary">{`Downvotes: ${p.downvote}`}</Button>
                            <hr />
                        </ul>
                    ))};
                </main>
            </div>
        )
    }
}

export default Boasts;
