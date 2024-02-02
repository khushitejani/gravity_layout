import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css';
import InnerPages from './Innerpages';
import Footer from './footer';
import Header from './header';
import Landing12 from './Landing12+';
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
                    <h1 className='text-secondary'>Home</h1>
                    <p className='text-secondary'>Use our unique & creative Landings</p>
                    <div>
                        <Link to="/" className='text-secondary'>intro</Link><span className='text-dark'><FaChevronRight className='text-dark landing-icon'></FaChevronRight> Landing </span>
                    </div>
                
                </Col>
            </Row>
        </Container>


        {/* ================END Landings========= */}
        
        {/* ============= start 12+ Landing Pages============== */}

      
                <Landing12></Landing12>


        {/* ==============End 12+ Landing Pages======== */}
        {/* ==============start footer====== */}
        <Footer></Footer>
        {/* ==============End footer====== */}
        
        </>
    );
}
export default Landing