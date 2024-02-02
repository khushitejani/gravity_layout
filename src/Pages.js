import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css';
import InnerPages from './Innerpages';
import Footer from './footer';
import Header from './header';
function Landing(){
    return(
        <>
        {/* ==============start header================= */}
        <Header></Header>
        {/* ==============End header================= */}
        {/* ================start Landings========= */}
        <Container fluid>
            <Row className='landings'>
                <Col>
                    <h1 className='text-secondary'>Landings</h1>
                    <p className='text-secondary'>Use our unique & creative Landings</p>
                    <div>
                        <Link to="/" className='text-secondary'>intro</Link><span className='text-dark'><FaChevronRight className='text-dark landing-icon'></FaChevronRight> Pages </span>
                    </div>
                
                </Col>
            </Row>
        </Container>


        {/* ================END Landings========= */}
        
        {/* ============= start 12+ Landing Pages============== */}

      
                <InnerPages></InnerPages>


        {/* ==============End 12+ Landing Pages======== */}
        {/* ==============start footer====== */}
        <Footer></Footer>
        {/* ==============End footer====== */}
        
        </>
    );
}
export default Landing