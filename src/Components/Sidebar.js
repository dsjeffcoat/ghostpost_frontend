import React from 'react';
import './css/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__heading">
                <h2>GhostPost v2.0</h2>
            </div>
            <hr />
            <div className="sidebar__menu">
                <Link to='/'>
                    <h3>Home</h3>
                </Link>

                <Link to='/boasts'>
                    <h3>All Boasts</h3>
                </Link>

                <Link to='/roasts'>
                    <h3>All Roasts</h3>
                </Link>

                <Link to='/highest_rated'>
                    <h3>Trending Posts</h3>
                </Link>

                <Link to='/create'>
                    <h3>Create Post</h3>
                </Link>
                
            </div>
        </div>
    )
}

export default Sidebar;
