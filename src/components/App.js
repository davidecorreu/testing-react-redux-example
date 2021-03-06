import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  renderButton() {
    const { changeAuth } = this.props;
    if (this.props.auth) {
      return (
        <button onClick={() => changeAuth(false)}>
          Sing Out
        </button>);
    } else {
      return (
        <button
          className="sign-in-button"
          onClick={() => changeAuth(true)}>
          Sign In
        </button>);
    }
  }

  renderHeader() {
    return (
      <ul>
        <li><Link to='/' className="home-link" >Home</Link></li>
        <li><Link to='post' className="post-comment-link" >Post A Comment</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps, actions)(App)
