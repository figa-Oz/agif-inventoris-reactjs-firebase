const initialState = {
	popup: false,
	isLogin: false,
	isloading: false,
	user: {}
}

const reducer = (state=initialState, action) => {
	if (action.type === 'CHANGE_POPUP') {
		return {
			...state,
			popup: action.value
		} 
	}

	if (action.type === 'CHANGE_ISLOGIN') {
		return {
			...state,
			islogin: action.value
		} 
	}

	if (action.type === 'CHANGE_USER') {
		return {
			...state,
			user: action.value
		} 
	}

	if (action.type === 'CHANGE_ISLOADING') {
		return {
			...state,
			isLoading: action.value
		} 
	}

	return state
}

export default reducer