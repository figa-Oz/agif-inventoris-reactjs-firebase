import React, { Component } from 'react';
import { showCategoryApi, updateCategoryApi } from '../../config/redux/action'
import { connect } from 'react-redux'
import { dateTime } from '../../utils'
// import CategoryEdit from './Update'

class Update extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			desc: ''
		}
	}

	componentDidMount() {
		const catId = this.props.match.params.catId
		this.props.showCategory(catId)
	}


	onChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleUpdate = (e) => {
		e.preventDefault();
		const {updateCategory} = this.props
		const catId = this.props.match.params.catId

		const data = {
			title: this.state.title,
			desc: this.state.desc,
			date: new Date().getTime()
		}

		updateCategory(catId, data)

		this.setState({title: '', desc:''})
	}

	render() {

		const {title, desc, date} = this.props.detailCat

		return (
			<div>
				<h3>Detail Content</h3>
				<p>Title: {title}</p>
				<p>Desc: {desc}</p>
				<p>Date: {dateTime(date)}</p>

				<hr/>

				<form onSubmit={this.handleUpdate}>
				<input type="text" name="title" onChange={this.onChange} />
				<input type="text" name="desc" onChange={this.onChange} />

				<button>Edit</button>
				</form>
			</div>
		);
	}
}

const reduxState = (state) => ({
	detailCat: state.category
})

const reduxDispatch = (dispatch) => ({
	showCategory: (data) => dispatch(showCategoryApi(data)),
	updateCategory: (catId, data) => dispatch(updateCategoryApi(catId, data))
})

export default connect(reduxState, reduxDispatch)(Update);
