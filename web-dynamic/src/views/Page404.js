import React from 'react';
import '../Page404.css';
import error from '../img/error.png';
import Logo from '../img/Logo.png';

export class NotFound extends React.Component {
    render() {
        return (
            <div className="container PageContainer">
                    <div className="col-md-6 Pagecontent">
                        <div className="Pagetext">
                            <p className="description">OOPS! </p>
                            <p className="description">We Couldn't Find That Page</p>
                        </div>
                        <div>
                            <img className="ComputerError col-md-12 mt-2 ml-3" src={ error } alt="pc" />
                        </div>
                        <div>
                            <a href="http://localhost:3000">
                                <img className="LogoImage" src={ Logo } alt="KanrishaHome" />
                            </a>
                        </div>
                    </div>
            </div>

        );
    }
}

export default NotFound;