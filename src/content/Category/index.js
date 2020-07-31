import React, { Component } from 'react';
import ListCategory from '../../component/ListCategory'
import { connect } from 'react-redux'
import { listCategoryApi, showCategoryApi } from '../../config/redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Modal from "../../component/Modal";
import { dateTime } from '../../utils'

class Category extends Component {
	state = {
        isShowing: false,
        catId: ''
      }

	componentDidMount() {

		console.log("getItem", localStorage)
		if (!this.props.isLogin) {
			this.props.history.push("/login")
		}

		if (localStorage.getItem()){
			const userData = JSON.parse(localStorage.getItem('userData'))
			this.props.listCategory(userData.uid)
		}

		const catId = this.props.match.params.catId
		this.props.showCategory(catId)
	}

	render() {

		console.log("this.props.category", this.props.category)

		return (
			<div className="container mt-4 p-4">
				<button className="btn btn-success">Add</button>

				<hr/>
                
				<ListCategory array={this.props.category} />
			</div>
		);
	}
}

const reduxState = (state) => ({
	category: state.category
})

const reduxDispatch = (dispatch) => ({
	listCategory: (data) => dispatch(listCategoryApi(data)),
	showCategory: (data) => dispatch(showCategoryApi(data))
})

export default connect(reduxState, reduxDispatch)(Category);

