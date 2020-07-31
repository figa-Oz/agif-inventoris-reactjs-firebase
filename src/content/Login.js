import React from 'react'
import Button from '../component/Button'
import { loginUserApi } from '../config/redux/action'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
      console.log("response login: ", res)
      // localStorage.setItem('userData', JSON.stringify(res))

      sessionStorage.setItem('userData', JSON.stringify(res))

      this.setState({email:'', password:''})
      history.push("/")
    } else {
      console.log("response login failed")
    }

  }

  render() {
    return(
      <form onSubmit={this.handleLogin}>
          
        <div class="form-group">
          <label for="email">Email address</label>
          <input 
            type="text" 
            name="email" 
            placeholder="email"
            className="form-control" 
            onChange={this.handleChange} 
            value={this.state.email} 
         />
        </div>
        
        <div class="form-group">
          <input 
            type="password" 
            name="password" 
            placholder="password"
            className="form-control" 
            onChange={this.handleChange} 
            value={this.state.password} 
          />
        </div>
        
        <Button 
          type="submit" 
          title="Login"
          className="btn btn-primary" 
          loading={this.props.isLoading} 
        />
       </form>
    )
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  loginApi: (data) => dispatch(loginUserApi(data))
})

export default connect(reduxState, reduxDispatch)(Login)