import React from 'react'
import CategoryInsert from './Category/Create'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Dashboard extends React.Component {

	render() {
	    return (
	    	<>
	    	<div className="container-fluid">

    			<div className="bg-warning">

	    			<div className="jumbotron">
	    				<h1 className="display-4">Welcome to Dasboard</h1>
	    				<p className="lead">Dashboard sederhana untuk mengontrol produk dan ketegori</p>
	    			</div>
    			
    			</div>

	    	</div>
	    	</>
	    )
	}
}

export default Dashboard;