import React from 'react'

const Input = ({type, name, value, onChange}) => {
	if(type==="textarea"){
		return <textarea name={name} value={value} onChange={onChange}></textarea>	
	}

	return (<input type={type} name={name} value={value} onChange={onChange} />)
}

export default Input