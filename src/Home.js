import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header';
import Pages350 from './Pages350';
import Gravity_world from './Gravity_world';
import Elements1000 from './Elements1000';
import Included_gravity from './Included_gravity';
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';


// import { BiSolidUserAccount } from "react-icons/bi";
// import { FaPaperPlane } from "react-icons/fa";
// import { FaTableCells } from "react-icons/fa6";

// import { Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button} from 'react-bootstrap';
import Footer from './footer';
function Home(){
    return(
        <div>
                {/* ======== start home======== */}
                <Header></Header>
                
                {/* ========= start   slider==== */}
                <Container fluid className='px-0' >
                    <Row className='gx-0 slider_img' >
                      

                        <Col className='slider_txt  container '><h1 className='main_title text-white'>GRAVITY TEMPLATE</h1>
                        <div><p className='sub_title text-white'>"Gravity is an incredibly beautiful and fully responsive Bootstrap Template for any type of creative professionals, startups and established business."</p><span className='d-lg-block d-none sub_title text-white'> "It allows you built any size of high quality web products, thanks to massive 100+ features pages which includes over 1000 reusable UI Components where they can be easily used.</span></div>
                     <Button variant="dark"  className='border-white'>DISCOVERY MORE</Button>
                     <Button variant="dark" className='border-white'>PURCHASE NOW</Button>
                        </Col>
                    </Row>
                    
                </Container >
                {/* ======End slider */}


                {/*============= start GRAVITY WORLD======= */}
                <Gravity_world></Gravity_world> 
          
                {/*============= End GRAVITY WORLD======= */}


                {/* ========= start  350pages */}
             
                    <Pages350></Pages350>


                {/* ========= End  350pages */}
                {/* ==========start 10000+ Elements========*/}


              

                    <Elements1000></Elements1000>






                {/* ==========start 10000+ Elements========*/}
                {/* ========Included in Gravity======== */}
              

               <Included_gravity></Included_gravity>



                {/* ========Included in Gravity======== */}
                {/* ========== footer start===========*/}


                <Footer></Footer>
                {/* ========== footer End===========*/}
 



        </div>

    );
}
export default Home;