import React from "react"; 

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <p>These are your projects.</p>
      </div>
    )
  }
}

class Login extends React.Component {
  logUserIn = () => {
    // we can access handleLogin from App since it was passed as a prop
    this.props.handleLogin(true)
  }

  dontLogUserIn = () => {
    alert('Thank you for your honesty.')
    this.props.handleLogin(false)
  }

  render() {
    return (
      <div>
        <h1>Please "log in"</h1>
        <p>Do you have permission to use this site?</p>
        <button onClick={this.logUserIn}>Yes</button>
        <button onClick={this.dontLogUserIn}>No</button>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    // in React, we always need to call the superclass constructor first with super() 
    // if we override the component's constructor
    super(props)

    // app owns the login state because it needs it in order to do conditional rendering.
    // shared state should always be as low as possible in the component hierarchy.
    this.state = { isLoggedIn: false }
  }

  handleLogin = (loggedIn) => {
    this.setState({
      isLoggedIn: loggedIn
    })
  }

  render() {
    // conditional rendering
    if (this.state.isLoggedIn) {
      return (<Projects />)
    }
    else {
      // Login needs to be able to mutate the login state, so we pass it handleLogin as a prop
      return (<Login handleLogin={this.handleLogin}/>)
    }
  }
}

export default App;