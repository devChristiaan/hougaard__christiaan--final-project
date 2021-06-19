import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar className="grid-nav">
            <Container>
            <NavbarBrand href="">Example Portfolio Site</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="nav-bar" navbar>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/about">About Me</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/contact">Contact Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/submissions">Submissions</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation