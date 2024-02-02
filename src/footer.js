import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/asset 0.png'
import { FaChevronRight} from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaTwitterSquare,FaFacebookSquare} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css';
function Footer(){
    return(
         <>
         <footer>
            <Container fluid className='px-5'>
                <Row  md={2}xs={1} sm={2} lg={4}>
                <Col className='footerlogo'>
                <img className='f_logo' src={logo}></img>
                <p>Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of professionals.These professionally designed </p>
                <p>These professionally designed demos below are built to give you a boosted start for your project. Build Your websites like a lego.</p>
                 </Col>
                 <Col>
                        <h1 className='footer_title'>LATEST POSTS</h1>
                        <div className='footer_txt'>
                            <div>1000+ Unique Elements</div>
                            <p>Mar 25, 2021</p>
                        </div>
                        <div className='footer_txt'>
                            <div>500+ Reusable Features</div>
                            <p>Feb 15, 2021</p>
                        </div>
                        <div className='footer_txt'>
                            <div>Home & Landing Layouts</div>
                            <p>Jan 05, 2021</p>
                        </div>
                 
                 </Col>
                 <Col>
                        <h1 className='footer_title'>USEFUL LINKS</h1>
                        <div className='footer_txt footer_text d-flex'>
                            <div>Modern Pages</div>
                            <i className='ms-auto'><FaChevronRight></FaChevronRight></i>
                        </div>
                        <div className='footer_txt footer_text d-flex'>
                            <div>Our Portfolio</div>
                            <i className='ms-auto'><FaChevronRight></FaChevronRight></i>

                        </div>
                        <div className='footer_txt footer_text d-flex'>
                            <div>Blog & News</div>
                            <i className='ms-auto'><FaChevronRight></FaChevronRight></i>

                        </div>
                        <div className='footer_txt footer_text d-flex'>
                            <div>eCommerce Pages</div>
                            <i className='ms-auto'><FaChevronRight></FaChevronRight></i>

                        </div>
                        <div className='footer_txt footer_text d-flex'>
                            <div>Admin Dashboard</div>
                            <i className='ms-auto'><FaChevronRight></FaChevronRight></i>

                        </div>
                 
                 </Col>
                 <Col>
                  <h1 className='footer_title'>OUR CONTACTS</h1>
                  <div className='footer_icon d-flex'>
                        <i className='text'><MdLocationOn></MdLocationOn></i>
                        <div className=''>
                                <p>123 Lincoln Ave, Suite 555,</p>
                                <p>San Francisco, CA 98765</p>
                        </div>

                  </div>
                  <div className='footer_icon d-flex'>
                        <i className='text'><MdLocationOn></MdLocationOn></i>
                        <div>
                                <p>+1 555 555 5555</p>
                                <p>+1 777 777 7777</p>
                        </div>

                  </div>
                  <div className='footer_icon d-flex'>
                        <i className='text'><MdLocationOn></MdLocationOn></i>
                        <div>
                                <p>info@yoursite.com</p>
                                <p>www.yoursite.com</p>
                        </div>

                  </div>
                 
                 </Col>



                </Row>
               
                                

            </Container>
            <Container fluid className='mt-5'>
            <Row className='bg-dark py-2'>
                <Col className='d-flex justify-content-between px-5'>
                    <div className='text-white pt-2 fs-6'>© 2021 - All Rights Reserved</div>
                    <div>
                        <i className='text-white fs-4'><FaTwitterSquare></FaTwitterSquare></i>
                        <i className='text-white fs-3'><IoLogoLinkedin></IoLogoLinkedin></i>
                        <i className='text-white fs-4'><FaFacebookSquare></FaFacebookSquare></i>
                    </div>
                </Col>
            </Row>
            </Container>
          
            </footer>
            
        
        </>
    );
}
export default Footer