import React from 'react';
import '../Page404.css';
import error from '../img/error.png';
import Logo from '../img/Logo.png';

export class NotFound extends React.Component {
    render() {
        return (
            <div className="container">
                    <div className="col-md-6 content">
                        <div className="text">
                            <p>OOPS! </p>
                            <p>We Couldn't Find That Page</p>
                        </div>
                        <div>
                            <img className="imagen col-md-12 mt-2 ml-3" src={ error } alt="pc" />
                        </div>
                        <div className="text">
                            <p>Go Home:</p>
                            <a href="http://localhost:3000">
                                <img className="logo" src={ Logo } alt="link" />
                            </a>
                        </div>
                    </div>
            </div>

        );
    }
}

export default NotFound;