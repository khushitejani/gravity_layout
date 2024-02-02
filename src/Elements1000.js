import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './image/asset 0.png'
import { FaChevronRight} from "react-icons/fa6";
import {Container,Row,Col,Navbar,Nav,NavDropdown,fluid,Button,} from 'react-bootstrap';
import './responsive.css';
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { IoColorWandSharp,IoPlaySkipForwardSharp,IoBagSharp} from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { TbSpeakerphone } from "react-icons/tb";
import { FaQuoteLeft,FaPaperPlane,FaRegSmile,FaComment,FaPause,FaBookmark,FaCamera,FaPaintBrush,FaBars,FaHeading,FaFirefox,FaCircle,FaInfoCircle,FaPlusCircle,FaImage,FaList,FaMap,FaRegNewspaper,FaPagelines,FaDollarSign,FaTags,FaUserPlus,FaComments,} from "react-icons/fa";
// import {  } from "react-icons/fa6";
import { FaSquare ,FaTableCells,FaBarsProgress,} from "react-icons/fa6";
import { PiCaretDoubleRightFill,PiShoppingBagOpenDuotone} from "react-icons/pi";
import { GrLink,GrWindows, } from "react-icons/gr";
// import { GrWindows } from "react-icons/gr";
import { SiWindows11 } from "react-icons/si";
import { BiSolidHourglassBottom,BiSolidUserAccount } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";
import { GiDrop } from "react-icons/gi";
import { LuSquareEqual } from "react-icons/lu";
import { TiMediaPlay } from "react-icons/ti";
import { RiFolderUserFill } from "react-icons/ri";
import { MdPushPin } from "react-icons/md";
import { HiMiniUsers } from "react-icons/hi2";
import { TbTimeline } from "react-icons/tb";

function Elements1000(){
    return(
        <>
        
        <Container className='elements1000 spacer1'>
                    <Row>
                        <Col className='gx-0  text-center'>
                        <h1 className='main_title'>1000+ Elements</h1>
                        <p className='sub_title'>Gravity's 1000+ easy to use and customizable UI elements make it most customizable theme on the market.Build  websites 
                                like a Lego. Every element can be modified for any kind of project.</p>
                        </Col>
                    </Row>
                    <Row className='main_box text-center gx-0  d-flex justify-content-center' xl={4}lg={4} md={3}sm={2} xs={2}>
                    {/* <Col > */}
                       <Col className='img_box' >
                         <div className='shadow'>
                            <i><MdOutlineSpeakerNotes></MdOutlineSpeakerNotes></i>
                            <h4>ACCORDIONS</h4>
                            </div>
                       </Col>
                       <Col className='img_box' >
                       <div className='shadow'>

                            <i><BsBellFill></BsBellFill></i>
                            <h4>ALERT BOXES</h4>
                            </div>

                       </Col>
                       <Col className='img_box ' >
                       <div className='shadow'>

                            <i><IoColorWandSharp></IoColorWandSharp></i>
                            <h4>ANIMATIONS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><IoMdSettings></IoMdSettings></i>
                            <h4>BADGES</h4>
                            </div>

                       </Col>
                   
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><TbSpeakerphone></TbSpeakerphone></i>
                            <h4>BANNERS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaQuoteLeft></FaQuoteLeft></i>
                            <h4>BLOCKQUATS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaSquare></FaSquare></i>
                            <h4>BOX SHADOWS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><PiCaretDoubleRightFill></PiCaretDoubleRightFill></i>
                            <h4>BREADCRUMBS</h4>
                            </div>

                       </Col>
                   
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><GrLink></GrLink></i>
                            <h4>BUTTONS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaPaperPlane></FaPaperPlane></i>
                            <h4>CALL TO ACTIONS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><GrWindows></GrWindows></i>
                            <h4>CAROUSEL</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><FaRegSmile></FaRegSmile></i>
                            <h4>CLENTS</h4>
                            </div>

                       </Col>
               
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><SiWindows11></SiWindows11></i>
                            <h4>COLUMNS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaComment></FaComment></i>
                            <h4>COMMENTS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><BiSolidHourglassBottom></BiSolidHourglassBottom></i>
                            <h4>COUNTDOWNS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><BsStopwatch></BsStopwatch></i>
                            <h4>COUNTERS</h4>
                            </div>

                       </Col>
                 
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaPause></FaPause></i>
                            <h4>DIVIDERS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><GiDrop></GiDrop></i>
                            <h4>DROPCAPS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaBookmark></FaBookmark></i>
                            <h4>FORMS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><FaCamera></FaCamera></i>
                            <h4>GALLERIES</h4>
                            </div>

                       </Col>
                 
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaPaintBrush></FaPaintBrush></i>
                            <h4>GARDIANTS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaBars></FaBars></i>
                            <h4>HUMBERGERS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaHeading></FaHeading></i>
                            <h4>HEADINGS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><LuSquareEqual></LuSquareEqual></i>
                            <h4>HEROBLOCKS</h4>
                            </div>

                       </Col>
                   
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaFirefox></FaFirefox></i>
                            <h4>ICON BLOCKS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaCircle></FaCircle></i>
                            <h4>ICONS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaInfoCircle></FaInfoCircle></i>
                            <h4>INFO BLOCKS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><FaPlusCircle></FaPlusCircle></i>
                            <h4>LABELS</h4>
                            </div>

                       </Col>
                  
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaImage></FaImage></i>
                            <h4>LIGHTBOXES</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaList></FaList></i>
                            <h4>LITS GROUP</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaMap></FaMap></i>
                            <h4>MAPS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><TiMediaPlay></TiMediaPlay></i>
                            <h4>MEDIA</h4>
                            </div>

                       </Col>
                   
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaRegNewspaper></FaRegNewspaper></i>
                            <h4>NEW BLOCKS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaPagelines></FaPagelines></i>
                            <h4>PAGINATIONS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><BiSolidUserAccount></BiSolidUserAccount></i>
                            <h4>PANELS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><PiShoppingBagOpenDuotone></PiShoppingBagOpenDuotone></i>
                            <h4>PARTPHOLIO</h4>
                            </div>

                       </Col>
                   
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaDollarSign></FaDollarSign></i>
                            <h4>PRICING PLANS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><IoPlaySkipForwardSharp></IoPlaySkipForwardSharp></i>
                            <h4>PROCESS BLOCKS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><IoBagSharp></IoBagSharp></i>
                            <h4>PRODUCTS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><FaBarsProgress></FaBarsProgress></i>
                            <h4>PROGRESS BAR</h4>
                            </div>

                       </Col>
                   
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaTableCells></FaTableCells></i>
                            <h4>TABLES</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><RiFolderUserFill></RiFolderUserFill></i>
                            <h4>TABS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><MdPushPin></MdPushPin></i>
                            <h4>TAGLINES</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><FaTags></FaTags></i>
                            <h4>TAGS</h4>
                            </div>

                       </Col>
                   
                    
                
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><HiMiniUsers></HiMiniUsers></i>
                            <h4>TEAM</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><FaComments></FaComments></i>
                            <h4>TESTIMONIALS</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                            <i><TbTimeline></TbTimeline></i>
                            <h4>TIMESLINES</h4>
                            </div>

                       </Col>
                       <Col className='img_box'>
                       <div className='shadow'>

                           <i><FaUserPlus></FaUserPlus></i>
                            <h4>USERS</h4>
                            </div>

                       </Col>
                     
                  {/* </Col> */}
                    
                </Row>
                </Container>
        </>

    );
}
export default Elements1000;