import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css';
import Portpholiopage from './portpholio_pages';
import Footer from './footer';
import Header from './header';
function Portpholio(){
    return(
        <>
        {/* ==============start header================= */}
        <Header></Header>
        {/* ==============End header================= */}
        {/* ================start Landings========= */}
        <Container fluid>
            <Row className='landings'>
                <Col>
                    <h1 className='text-secondary'>Portpholio</h1>
                    <p className='text-secondary'>Use our unique & creative Landings</p>
                    <div>
                        <Link to="/" className='text-secondary'>intro</Link><span className='text-dark'><FaChevronRight className='text-dark landing-icon'></FaChevronRight> portpholio </span>
                    </div>
                
                </Col>
            </Row>
        </Container>


        {/* ================END Landings========= */}
        
        {/* ============= start 12+ Landing Pages============== */}

      
                <Portpholiopage></Portpholiopage>


        {/* ==============End 12+ Landing Pages======== */}
        {/* ==============start footer====== */}
        <Footer></Footer>
        {/* ==============End footer====== */}
        
        </>
    );
}
export default Portpholio;