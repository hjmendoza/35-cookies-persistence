import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { logIn } from '../store/auth';


class Landing extends Component {

  Login = () => {
    this.props.logIn({username: 'somename', password: 'somepassword'});
  };

  render() {
    return (
      <Fragment>
        <button onClick = {this.logIn}>Login</button>
        <button onClick = {this.signIn}>Sign In</button>
      </Fragment>
    )
  }
}



// mapStatetoProps takes state and makes parts available
const mapStateToProps = (state) => ( { token: state.authState });

// we are mapping to the logIn function
const mapDispatchToProps = { logIn };

export default connect(mapStateToProps, mapDispatchToProps) (Landing);
