import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavHeader.css'
const NavHeader = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    return (
        <div className='flex justify-center w-100 bg-white sticky z-50 shadow-gray-300 shadow-sm'>
        <Navbar bg="white" expand="lg" >
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" style={{fontSize:'18px'}} className="custom-nav">Home</Nav.Link>
                    <NavDropdown
                        title="Institute"
                        id="basic-nav-dropdown"
                        show={showDropdown}
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                        className="custom-dropdown"
                        >
                        <NavDropdown.Item href="#action/1">About</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3">Gallery</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                        title="Admission"
                        id="basic-nav-dropdown"
                        show={showDropdown1}
                        onMouseEnter={() => setShowDropdown1(true)}
                        onMouseLeave={() => setShowDropdown1(false)}
                        className="custom-dropdown"
                        >
                        <NavDropdown.Item href="#action/1">About</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2">Contact Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3">Gallery</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="" style={{fontSize:'18px'}} className="custom-nav">Results</Nav.Link>
                    <Nav.Link href="#" style={{fontSize:'18px'}} className="custom-nav">Career</Nav.Link>
                  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default NavHeader;
