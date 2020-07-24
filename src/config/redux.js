import React, { Component } from 'react'

class redux extends Component {
	render() {
		return (
			<Provider store={store}>
			<div></div>
			</Provider>
		);
	}
}

const resuxState = (state) => ({
	popupProps: state.popup
})

export default connect(resuxState, null)(redux)