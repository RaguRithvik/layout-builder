import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux'; 

export const Footer = () => {
const task = useSelector((state)=> state);
  return (
    <div className='footer'>
        {(task.footer) &&(
        <Navbar bg="light" variant="light">
            {(task.footer_menu) &&(
            <Container>
                <div className="offset-4 col-8">
                <Nav className="me-auto">
                    <Nav.Link href="#home">MAILS</Nav.Link>
                    <Nav.Link href="#features">ALERMS</Nav.Link>
                    <Nav.Link href="#pricing">MOVIES</Nav.Link>
                </Nav>
                </div>
            </Container>
            )}
      </Navbar>)}
    </div>
  )
}
