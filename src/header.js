import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/asset 0.png'
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css'
import { Link } from 'react-router-dom';
import Blog from './Blog';
import Pages from './Pages';
import Landing from './Landing';
import portpholio from './portpholio';

function Header(){
    return(
            <div>
                <div className='header_bg gx-0 py-2 '>
                <Container className=''>
                    <Row>
                       <Col className=''>
                       <Navbar expand="lg" className="">
                         <Container fluid>
                             <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-color' />
                             <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ms-auto">
                                <Link to="/"  className='ps-3 d-flex'><div>Home</div>
                                             <span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                                <Link to="/Landing"className='ps-3  d-flex'> <div>LANDING</div><span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                                <Link  to="/Pages"className='ps-3  d-flex'><div>PAGES</div><span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                                <Link  to="/Blog"className='ps-3  d-flex'><div>BLOG</div><span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                                <Link to="/portpholio"className='ps-3  d-flex'><div>PORTFOLIO</div><span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                                <Link to="/Landing"className='ps-3  d-flex'><div>SHOP</div><span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                                <Link to="/Landing"className='ps-3  d-flex'><div>FEATURES</div><span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                                <Link to="/Landing"className='ps-3  d-flex'><div>ElEMENTS</div><span className='ms-auto'><FaChevronRight className='ms-auto text-center d-lg-none d-md-block '></FaChevronRight></span></Link>
                               
                                </Nav>
                                </Navbar.Collapse>
                        </Container>
                      </Navbar>  
                      </Col>
                    </Row>
                </Container>
            </div>
            </div>
    );

}
export default Header;