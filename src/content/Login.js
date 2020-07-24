import React from 'react'
import firebase from '../config/firebase'

class Login extends React.Component {
constructor(){
	super()
	this.state = {
    	messages: [],
    	email:'',
    	password:'' 
    }; 
}

handleChange = (e) => {
  	console.log("e: ",e);
  	this.setState({
  		[e.target.id]: e.target.value
  	});
  }

handlelogin = (event) => {
  	event.preventDefault();
  	
  	const { email, password } = this.state;
  	console.log("data asli", email, password);
  	
  	firebase.auth().signInWithEmailAndPassword(email, password)
  	.then(res => {
  		console.log("reponse: ", res)
  	})
  	.catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// ...
	});
  }

  render() {
  	return(
  		<form onSubmit={this.handleLogin}>
      		<input type="text" name="email" id="email" placeholder="email" onChange={this.handleChange} />
      		<input type="password" name="password" id="password" placholder="password" onChange={this.handleChange} />
      		<button type="submit">register</button>
      	</form>
  	)
  }
}

export default Login