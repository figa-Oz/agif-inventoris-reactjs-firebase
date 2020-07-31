import React from 'react'
import { removeCategoryApi } from '../config/redux/action'
import { connect } from 'react-redux'
import Modal from "./Modal"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { dateTime } from '../utils'

class ListCategory extends React.Component {
    state = {
        isShowing: '',
        res: {}
      }
      
    openModalHandler = (isShowing, res) => {
        console.log("res-open", res)
        this.setState({
            isShowing: isShowing,
            res: res
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: '',
            res: {}
        });
    }

    handleRemove = () => {
        this.props.removeCategory(this.state.catId)
        this.setState({
            isShowing: '', 
            res: {}
        })
    }

    modal = () => {
        const {isShowing, res} = this.state
        const body = isShowing === 'confirm' ? "Yakin ingin menghapus ini ?" : res
        const title = isShowing === 'confirm' ? "Confirm" : (isShowing === 'detail' ? "Detail" : "Edit")

        return (
            <Modal
                className="modal"
                title={title}
                show={isShowing}
                close={this.closeModalHandler}
                next={this.handleRemove}
                body={res}
            />
        )
    }

    render(){

        return (
            <>
            {
                this.state.isShowing === '' ? null :
                <div onClick={this.closeModalHandler} className="back-drop"></div>
            }

            {this.modal}

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Desciption</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.array === null ? null :
                        (
                            this.props.array.length <= 0 ? 
                            <tr><td><h3>Data is empty</h3></td></tr> :
                            
                            this.props.array.map((list, index) => {
                                return (
                                    <tr key={list.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{list.data.title}</td>
                                        <td>{list.data.desc}</td>
                                        <td>{dateTime(list.data.date)}</td>
                                        <td className="row">
                                            <div className="col-md-4">
                                                <button 
                                                    className="open-modal-btn"
                                                    onClick={() => this.openModalHandler('detail', list)}
                                                >Show</button>
                                            </div>

                                            <div className="col-md-4">
                                                <button 
                                                    className="open-modal-btn"
                                                    onClick={() => this.openModalHandler('edit', list)}
                                                >Edit</button>
                                            </div>
                                            
                                            <div className="col-md-4">
                                                <button 
                                                    className="open-modal-btn" 
                                                    onClick={() => this.openModalHandler('confirm', list)}
                                                >remove</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        )
                    }
                    </tbody>
                </table>

            </>
        );
    }
}

const reduxState = (state) => ({
    category: state.category
})

const reduxDispatch = (dispatch) => ({
    removeCategory: (catId) => dispatch(removeCategoryApi(catId))
})

export default connect(reduxState, reduxDispatch)(ListCategory);
