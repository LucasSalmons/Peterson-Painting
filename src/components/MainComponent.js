import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, withRouter } from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                website coming soon
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);