import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-6 col-sm-2">
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/people'>People</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-4">
                        <h5>Contact</h5>
                        <i className="fa fa-phone fa-lg"></i>: (760) 821-5002<br />
                        <i className="fa fa-envelope fa-lg"></i>:<a href="/"> timmyp22@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;