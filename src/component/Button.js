import React from 'react'

const Button = ({onClick, title, loading}) => {
	if (loading) {
		return <button style={{cursor: "not-allowed"}} className="disabled" disabled>loading...</button>
	}

	return <button onClick={onClick} className="btn btn-success">{title}</button>
}

export default Button