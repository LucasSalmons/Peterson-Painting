import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Projects from './ProjectsComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        staff: state.staff,
        jobs: state.jobs,
    }
}
class Main extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' render={() => <Home jobs={this.props.jobs} />} />
                    <Route path='/about' render={() => <About staff={this.props.staff} />} />
                    <Route path='/projects' render={() => <Projects jobs={this.props.jobs} />} />
                    <Route path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));