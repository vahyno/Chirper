import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import handleInitialData from '../actions/shared';
import LoadingBar from 'react-redux-loading-bar';
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import Tweet from './Tweet';

class App extends Component {
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true
              ? null
              : (<div>
                  <Route exact path='/' component={ Dashboard }/>
                  <Route path='/new' component={ NewTweet } />
                  <Route path='/tweet/:id' component={ TweetPage } />
                </div>)
            }
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null,
  }
}

export default connect()(App);
