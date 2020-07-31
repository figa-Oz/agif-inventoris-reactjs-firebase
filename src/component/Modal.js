import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Modal.css';
import '../App.css';

const modal = (props) => {
    console.log("body", props.body)
    const data = props.show === '' ? null :
    (
        props.show === 'detail' ?
        (
            <div>
                <p>Detail</p>
                <p>id: {props.body.id} </p>
                <p>title: {props.body.data.title} </p>
            </div>
        )
        
        :

        (
            props.show === 'edit' ?
            (
                <div>
                    <p>Edit</p>
                </div>
            )

            :

            (
                <div>
                    <p>Confirm</p>
                </div>
            )
        )
    )

    return (
        <div className="modal-wrapper modal-confirm"
        style={{
            transform: props.show === '' ? 'translateY(-100vh)' : 'translateY(0vh)',
            opacity: props.show === '' ? '0' : '1'
        }}
        >
            <div className="modal-header">
                <h3>{props.title}</h3>
                <span className="close-modal-btn" onClick={props.close}>×</span>
            </div>
            <div className="modal-body text-center">
                {data}
            </div>
            <div className="modal-footer">
                <button className="btn-cancel bg-blue" onClick={props.close}>CANCEL</button>
                <button className="btn-continue bg-red" onClick={props.next}>CONTINUE</button>
            </div>
        </div>
    )
}

export default modal;