import React from 'react'

const Button = ({onClick, title, loading}) => {
	if (loading) {
		return <button style={{cursor: "not-allowed"}} disabled>loading...</button>
	}

	return <button onClick={onClick}>{title}</button>
}

export default Button