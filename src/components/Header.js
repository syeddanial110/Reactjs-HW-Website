import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link className='p-3 linkBtnHome linkBtn' to="/home">Home</Link>
    <Link className='p-3 linkBtnHome linkBtn' to="/pixabay">Api Fetch</Link>
    <Link className='p-3 linkBtnHome linkBtn' to="/json">Json Api</Link>
    <Link className='p-3 linkBtnHome linkBtn' to="/allList">All List</Link>
    </Nav>
    </Container>
  </Navbar>

        </>
    )
}

export default Header
