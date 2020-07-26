import React from 'react';
import { removeCategoryApi } from '../config/redux/action'
import { connect } from 'react-redux'

class List extends React.Component {

	handleRemove = (catId) => {
		console.log("okelah")
		this.props.removeCategory(catId)
	}

	render(){
		return (

			this.props.array.length === undefined || this.props.array.length <= 0 ? 
		
			(<h3>Data is empty</h3>) : 
		
			this.props.array.map(list => {
				return (
					<ul key={list.id}>
						<li>Id: {list.id}</li>
						<li>Title: {list.data.title}</li>
						<li>Desc: {list.data.desc}</li>
						<li>Date: {list.data.date}</li>
						<button onClick={() => this.handleRemove(list.id)}>x</button>
					</ul>
				)
			})
		)
	}
}

const reduxState = (state) => ({
	category: state.category
})

const reduxDispatch = (dispatch) => ({
	removeCategory: (catId) => dispatch(removeCategoryApi(catId))
})

export default connect(reduxState, reduxDispatch)(List);