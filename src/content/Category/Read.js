import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listCategoryApi } from '../../config/redux/action'
import List from '../../component/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Read extends Component {

	componentDidMount() {
		const userData = JSON.parse(localStorage.getItem('userData'))
		this.props.listCategory(userData.uid)
	}

	render() {

		return (
			<div>
				<h3>List Data</h3>
				<List array={this.props.category} />
			</div>
		);
	}
}

const reduxState = (state) => ({
	category: state.category
})

const reduxDispatch = (dispatch) => ({
	listCategory: (data) => dispatch(listCategoryApi(data))
})

export default connect(reduxState, reduxDispatch)(Read);
