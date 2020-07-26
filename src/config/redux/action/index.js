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

export const saveCategoryApi = (data) => (dispatch) => {
	return firebase.database().ref('category').push({
	    title: data.title,
	    desc : data.desc,
	    date : data.date
	});
}

export const listCategoryApi = () => (dispatch) => {

	const catList = firebase.database().ref('category');
	
	return new Promise((resolve, reject) => {
		catList.orderByChild("date").on('value', function(snapshot) {

			const value = snapshot.val()

			console.log("get data action redux: ", value)

			const data = [] //new array initialization

			// Change Object to Array
			Object.keys(value).map(key => {
				// push to modify new array schema
				data.push({
					id: key,
					data: value[key]
				})
			})

			dispatch({type: "SET_CATEGORY", value: data})
			resolve(value)	
		});
	})
}

export const showCategoryApi = (catId) => (dispatch) => {

	const catShow = firebase.database().ref('category/' + catId)

	return new Promise((resolve, reject) => {
		catShow.on('value', function(snapshot) 	{

			const data = snapshot.val()

			console.log("detail from action redux: ", data)

			dispatch({type: "SET_CATEGORY", value: data})
			resolve(data)	
		});
	})
}

export const updateCategoryApi = (catId, data) => (dispatch) => {
	// Get a key for a new Post.
  	const catPut = firebase.database().ref().child('category/' + catId)

  	return new Promise((resolve, reject) => {
	  	catPut.set(data, function(error) {
		    if (error) {
		    	reject(false)
		    } else {
		    	resolve(true)
		    }
		})
	})
}

export const removeCategoryApi = (catId) => (dispatch) => {
	// Get a key for a new Post.
  	const catRemove = firebase.database().ref().child('category/' + catId)

  	return new Promise((resolve, reject) => {
	  	catRemove.remove()
	})
}