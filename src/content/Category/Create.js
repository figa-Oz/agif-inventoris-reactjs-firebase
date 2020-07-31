import React from 'react';
import Input from '../../component/Input'
import { connect } from 'react-redux'
import { saveCategoryApi } from '../../config/redux/action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Create extends React.Component {
	state = {
		title:'',
		desc:'',
		date: ''
	}

	handleSave = () => {
		const {title, desc} = this.state
		const {saveCategory} = this.props
		const userData = JSON.parse(localStorage.getItem('userData'))

		const data = {
			title: title,
			desc: desc,
			date: new Date().getTime(),
			userId: userData.uid
		}

		console.log("props uid: ", this.props.userData.uid)

		saveCategory(data)

		this.setState({title: '', desc:''})
	}

	inputChange = (e, type) => {
		this.setState({
			[type] : e.target.value
		})
	}

	render() {

		const {title, desc, date} = this.state

	  	return (
		    <div>
		    	<Input
		    		type="text"
		    		name="title"
		    		value={title}
		    		onChange={(e) => this.inputChange(e, "title")}
		    	/>

		    	<Input
		    		type="textarea"
		    		name="desc"
		    		value={desc}
		    		onChange={(e) => this.inputChange(e, "desc")}
		    	/>

		    	<button onClick={this.handleSave}>Save</button>
		    </div>
	  	)
	}
}

const reduxState = (state) => ({
	userData: state.user
})

const reduxDispatch = (dispatch) => ({
	saveCategory: (data) => dispatch(saveCategoryApi(data))
})

export default connect(reduxState, reduxDispatch)(Create);