import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/asset 0.png'
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css'

function Gravity_world(){
    return(
        <>
        
        <Container className='spacer gravity_world border-bottom-'>
                    <Row>
                        <Col className='gx-0'>
                        <h1 className='main_title fs-xs-6'>Gravity World</h1>
                        <p className='sub_title'>Gravity is simply the best choice for your new website. Every demo can be modified and adopted.
                            Start Creating Beautiful Websites With Gravity Unique & Creative Layouts.</p>
                        <img src={require('./image/asset 1.png')} className='w-100'></img>
                        </Col>
                    </Row>
                </Container>
        </>

    );
}
export default Gravity_world;