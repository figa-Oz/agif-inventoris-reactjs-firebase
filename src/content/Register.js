import React from 'react'
import Button from '../component/Button'
import { registerUserApi } from '../config/redux/action'
import { connect } from 'react-redux'

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
  		<div>
      		<input type="text" name="email" id="email" placeholder="email" onChange={this.handleChange} value={this.state.email} />
      		<input type="password" name="password" id="password" placholder="password" onChange={this.handleChange} value={this.state.password} />
          <Button onClick={this.handleRegister} title="Register" loading={this.props.isLoading} />
      	</div>
  	)
  }
}

export default connect(reduxState, reduxDispatch)(Register)