import React from 'react'
import Button from '../component/Button'
import { loginUserApi } from '../config/redux/action'
import { connect } from 'react-redux'

// import {
//   BrowserRouter as Router,
//   Route
// } from "react-router-dom"

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  loginApi: (data) => dispatch(loginUserApi(data))
})

class Login extends React.Component {
constructor(props){
  super(props)
  this.state = {
      email:'',
      password:'',
    }; 
}

handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

// Async - Await (Sinc to async proccess from dispatch & Wait proccess from Promise)
handleLogin = async (event) => {
    event.preventDefault();
    
    const { email, password } = this.state;
    const { history } = this.props

    // Await (Wait proccess from Promise)
    const res = await this.props.loginApi({email, password}).catch(err => err)

    if (res) { 
      console.log("response login success", res)
      this.setState({email:'', password:''})
      history.push("/")
    } else {
      console.log("response login failed")
    }

  }

  render() {
    return(
      <div>
          <input type="text" name="email" id="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" name="password" id="password" placholder="password" onChange={this.handleChange} value={this.state.password} />
          <Button onClick={this.handleLogin} title="Login" loading={this.props.isLoading} />
        </div>
    )
  }
}

export default connect(reduxState, reduxDispatch)(Login)