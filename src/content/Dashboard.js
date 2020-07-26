import React from 'react'
import CategoryInsert from './Category/Create'

class Dashboard extends React.Component {

	render() {
	    return (
	    	<div>
	    		<h2>Welcome to Dasboard</h2>
	    		<CategoryInsert />
	    	</div>
	    )
	}
}

export default Dashboard;