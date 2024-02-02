import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css';
import Blog_page from './Blog_Pages';
import Footer from './footer';
import Header from './header';
function Blog(){
    return(
        <>
        {/* ==============start header================= */}
        <Header></Header>
        {/* ==============End header================= */}
        {/* ================start Landings========= */}
        <Container fluid>
            <Row className='landings'>
                <Col>
                    <h1 className='text-secondary'>Blog</h1>
                    <p className='text-secondary'>Use our unique & creative Landings</p>
                    <div>
                        <Link to="/" className='text-secondary'>intro</Link><span className='text-dark'><FaChevronRight className='text-dark landing-icon'></FaChevronRight> Blog </span>
                    </div>
                
                </Col>
            </Row>
        </Container>


        {/* ================END Landings========= */}
        
        {/* ============= start 12+ Landing Pages============== */}

      
                <Blog_page></Blog_page>


        {/* ==============End 12+ Landing Pages======== */}
        {/* ==============start footer====== */}
        <Footer></Footer>
        {/* ==============End footer====== */}
        
        </>
    );
}
export default Blog;