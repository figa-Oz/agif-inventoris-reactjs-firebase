import React, { useState } from 'react';
import { 
	Collapse, 
	Navbar, 
	NavbarToggler, 
	NavbarBrand,
	UncontrolledDropdown,
	DropdownMenu,
	DropdownItem,
	DropdownToggle
} from 'reactstrap';

const Menu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
	<div>
      	<Navbar color="dark" className="text-white">
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
			<UncontrolledDropdown setActiveFromChild onClick={toggleNavbar} className="mr-2" style={{cursor: "pointer"}}>
			  <DropdownToggle tag="a" className="nav-link" caret>
			    Account
			  </DropdownToggle>
			  <DropdownMenu>
			    <DropdownItem tag="a" href="/blah" active>Logout</DropdownItem>
			  </DropdownMenu>
			</UncontrolledDropdown>
        </Navbar>
    </div>
  );
}

export default Menu;