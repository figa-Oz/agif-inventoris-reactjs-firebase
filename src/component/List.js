import React from 'react';
import { removeCategoryApi } from '../config/redux/action'
import { connect } from 'react-redux'
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class List extends React.Component {
	state = {
    	isShowing: false,
    	catId: ''
  	}
  	
  	openModalHandler = (catId) => {
        this.setState({
            isShowing: true,
            catId: catId
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false,
            catId: ''
        });
    }

	handleRemove = () => {
		this.props.removeCategory(this.state.catId)
		this.setState({
			isShowing: false, 
			catId: ''
		})
	}

	modal = (msg) => {
		return (
			<Modal
                className="modal"
                title="Konfirmasi"
                show={this.state.isShowing}
                close={this.closeModalHandler}
                next={this.handleRemove}
            >
             {msg}
            </Modal>
		)
	}

	render(){
		return (
			<>

			{ this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

			{this.modal("Yakin ingin menghapus ini ?")}

			<hr/>

			{
				this.props.array.length === undefined || this.props.array.length <= 0 ? 
					
				(<h3>Data is empty</h3>) : 
					
				this.props.array.map(list => {
					return (
						<ul key={list.id}>
							<li>Id: {list.id}</li>
							<li>Title: {list.data.title}</li>
							<li>Desc: {list.data.desc}</li>
							<li>Date: {list.data.date}</li>
							
							<button 
								className="open-modal-btn" 
								onClick={() => this.openModalHandler(list.id)}
							>remove</button>
						</ul>
					)
				})
			}
			</>
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