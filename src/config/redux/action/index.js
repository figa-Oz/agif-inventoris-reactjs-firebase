import firebase from '../../firebase'

// set syncronous dispatch to asyncronous
export const actionUser = () => (dispatch) => {
    setTimeout(() => {
      return dispatch({type: "CHANGE_USER", value: "admin"})
    }, 2000)
}

export const registerUserApi = (data) => (dispatch) => {
	
	dispatch({type: "CHANGE_ISLOADING", value: true})

	//Promise to give result (resolve:success or reject:failed)
	return new Promise((resolve, reject) => {
		firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
	  	.then(res => {
	  		dispatch({type: "CHANGE_ISLOADING", value: false})
	  	})
	  	.catch(function(error) {
	  		var errorCode = error.code;
	  		var errorMessage = error.message;

	  		dispatch({type: "CHANGE_ISLOADING", value: false})
		})
	})
}

export const loginUserApi = (data) => (dispatch) => {

	//Promise to give result (resolve:success or reject:failed)
	return new Promise((resolve, reject) => {
		dispatch({type: "CHANGE_ISLOADING", value: true})

		firebase.auth().signInWithEmailAndPassword(data.email, data.password)
	  	.then(res => {

	  		const userData = {
	  			uid 			: res.user.uid,
	  			email 			: res.user.email,
	  			emailVerified	: res.user.emailVerified,
	  			refreshToken	: res.user.refreshToken
	  		}

	  		dispatch({type: "CHANGE_ISLOADING", value: true}) // display loading button
	  		dispatch({type: "CHANGE_USER", value: userData}) // get user login data
	  		resolve(userData) // pass success to Login Content
	  	})
	  	.catch(function(error) {
	  		var errorCode = error.code;
	  		var errorMessage = error.message;

	  		dispatch({type: "CHANGE_ISLOADING", value: false})
	  		reject(false) // pass failed (invalid) to Login Content
		})
	})

}