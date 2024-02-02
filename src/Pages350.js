import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/asset 0.png'
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css';


function Pages350(){
    return(
        <>
           <Container className=' pages350 spacer1'>
                <Row className='text-center'>
                    <Col className='gx-0 '>
                    <h1 className='main_title '>350+ Different Pages</h1>
                    <p className='sub_title'>These professionally designed demos below are built to give you a boosted start for your project.
                        Every demo can easily be modified and adopted for any kind of project.</p>
                    </Col>
                </Row>
  
                <Row className='main_box text-center ' xl={4}lg={4} md={3}sm={2} xs={2}>
                    
                       <Col className='img_box'>
                          <div className='shadow'>

                            <img src={require('./image/asset 2.png')}></img>
                            <h4>HOME PAGES</h4>
                        </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <img src={require('./image/asset 3.png')}></img>
                            <h4>HOME PAGES</h4>
                        </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <img src={require('./image/asset 4.png')}></img>
                            <h4>HOME PAGES</h4>
                        </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <img src={require('./image/asset 5.png')}></img>
                            <h4>HOME PAGES</h4>
                        </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <img src={require('./image/asset 6.png')}></img>
                            <h4>HOME PAGES</h4>
                        </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <img src={require('./image/asset 7.png')}></img>
                            <h4>HOME PAGES</h4>
                        </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <img src={require('./image/asset 8.png')}></img>
                            <h4>HOME PAGES</h4>
                        </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <img src={require('./image/asset 9.png')}></img>
                            <h4>HOME PAGES</h4>
                            
                         </div>
                       </Col>
                   
                    
                </Row>

                </Container>
        
      
        </>

    );
}
export default Pages350;