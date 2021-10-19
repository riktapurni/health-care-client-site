import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../img/notfound.jpg'
const NotFound = () => {
    return (
        <div>
            <Link to="/home"><button className="btn btn-warning">Go Back</button></Link>
            <img style={{ width: '100%', height:'100 vh' }} src={notfound} alt="" />
        </div>
    );
};

export default NotFound;