import React, { useState } from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const Sidenav = (props) => {
	const style = {
		height: "100%",
		bottom: 0,
		top: 0,
		left: 0,
		maxHeight: "100%",
		margin: "auto",
		position: "fixed",
		width: "15%",
		padding: "10vh 1vh 0 1vh"
	}

	const [collapsed, setCollapsed] = useState(true);

  	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div className="text-white bg-dark" style={style}>

			<h2 style={{ position: "fixed", top:0, padding: "1.5vh" }}>Admin Panel</h2>

			<UncontrolledButtonDropdown>
				<DropdownToggle caret>
				Category
				</DropdownToggle>
				<DropdownMenu style={{ background: "#e9ecef" }}>
					<DropdownItem>Add</DropdownItem>
					<DropdownItem>List</DropdownItem>
				</DropdownMenu>
		    </UncontrolledButtonDropdown>

			<hr/>

			<UncontrolledButtonDropdown>
				<DropdownToggle caret>
				Product
				</DropdownToggle>
				<DropdownMenu style={{ background: "#e9ecef" }}>
					<DropdownItem>Add</DropdownItem>
					<DropdownItem>List</DropdownItem>
				</DropdownMenu>
		    </UncontrolledButtonDropdown>

			<hr/>
		</div>
	)
}

export default  Sidenav;