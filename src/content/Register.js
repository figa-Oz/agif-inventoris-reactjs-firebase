import React from 'react'
import Button from '../component/Button'
import { registerUserApi } from '../config/redux/action'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const reduxState = (state) => ({
  isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
  registerApi: (data) => dispatch(registerUserApi(data))
})

class Register extends React.Component {
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

handleRegister = async (event) => {
  	event.preventDefault();
  	
  	const { email, password } = this.state;

    // Await (Wait proccess from Promise)
    const res = await this.props.registerApi({email, password}).catch(err => err)

    if (res) {
      this.setState({email:'', password:''})
    }

  }

  render() {
  	return(
  		<form onSubmit={this.handleRegister}>
        
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
          title="Register"
          className="btn btn-primary" 
          loading={this.props.isLoading} 
        />
      
      </form>
  	)
  }
}

export default connect(reduxState, reduxDispatch)(Register)