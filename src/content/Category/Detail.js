import React, { Component } from 'react';
import { showCategoryApi, updateCategoryApi } from '../../config/redux/action'
import { connect } from 'react-redux'
import { dateTime } from '../../utils'
// import CategoryEdit from './Update'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Detail extends Component {
	componentDidMount() {
		const catId = this.props.match.params.catId
		this.props.showCategory(catId)
	}

	render() {

		const {title, desc, date} = this.props.detailCat

		return (
			<div>
				<h3>Detail Content</h3>
				<p>Title: {title}</p>
				<p>Desc: {desc}</p>
				<p>Date: {dateTime(date)}</p>
			</div>
		);
	}
}

const reduxState = (state) => ({
	detailCat: state.category
})

const reduxDispatch = (dispatch) => ({
	showCategory: (data) => dispatch(showCategoryApi(data))
})

export default connect(reduxState, reduxDispatch)(Detail);
