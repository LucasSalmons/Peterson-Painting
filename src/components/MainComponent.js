import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        staff: state.staff,
    }
}
class Main extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/about' render={() => <About staff={this.props.staff} />} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));