import React, { useState } from 'react'
import './Style.css';
import Remix from './Data/dj-Sdata';
import RomanticSongs from './Data/Romantic-Sdata.js';
import Hiphop from './Data/hiphop-Sdata.js';
import Fire from './Data/Motivational-Sdata.js';
import 'E:/dev ++/React/my-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Divider} from '@react-md/divider'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'react-slideshow-image'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
  {
    url: './images/j.jpg',
    caption: ''
  },
  {
    url: 'https://c4.wallpaperflare.com/wallpaper/720/713/188/anime-naruto-sasuke-uchiha-wallpaper-preview.jpg',
    caption: ''
  },
  {
    url: './images/ss.jpg',
    caption: ''
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{height:'330px','backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )}

function Card(props){
  return(
<>
<div className='S-card'>
  <div className="container-fluid">
      <div className="row"  >
        <div className="card" id='borderr'>
          <img className="card-img-top card-img" alt="music" src={props.imgsrc}/>
            <div className="card-body">
              <hr className="line" />
              <h3 className="card-text title">{props.title}</h3>
            <audio className="audioC" controls >
              <source src={props.src}  type="audio/mpeg" />
            </audio>
            <button className='btn btn-primary'>download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)}

const Home=()=>{
  
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleMode = () => {
      setIsDarkMode(!isDarkMode);
    };

  return(
    <div className='body'>
        <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <Navbar expand="lg" className='Navbar sticky-top'>
      <Container>
        <Navbar.Brand href="#" style={{fontWeight:'900',fontSize:'35px'}}><span>MyMusic</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Register" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup">
                Signup
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Trending
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Button variant="outline-success" style={{fontWeight:'700',marginRight:'6px'}}>Search</Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search" />
          </Form>
        </Navbar.Collapse>
      </Container>
      <button className='mode' onClick={toggleMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    </Navbar>

  <img className="img" alt="M-img" src="./images/qw.jpg" />
        {/* <h1>Dark/Light Mode</h1> */}
        
<h2 className="S-title">Super-hit of 2022 Top 50 Songs Free</h2>


<h1 className='song-T'>Top Playlist</h1>
<hr />
    <div className="container" style={{border: '7px solid white'}} >
      <div className="collection">
          <div>
            <img className="playlist" alt="img1" src=".\images\a47.jpeg" />
            <img className="playlist" alt="img2" src=".\images\a42.jpeg" />
            <img className="playlist" alt="img3" src=".\images\a49.jpeg" />
            <img className="playlist" alt="img4" src=".\images\a48.jpeg" />
            <img className="playlist" alt="img5" src=".\images\a42.jpeg" />    
  
    <button style={{marginLeft: '125px',marginTop: '200px'}} type="menu">Click here to see all Playlist </button>
      </div>
    </div>
  </div>
  
<h1 className="song-T">Romantic songs</h1>
<hr />
{RomanticSongs.map(function ncard(val){
    return(
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        src={val.src} />
    )})}
<button className='btn-show'>Show more</button>

<h1 className="song-T">DJ Remix</h1>
<hr />
{Remix.map(function ncard(val){
    return(
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        src={val.src} />
    )})}
<button className='btn-show'>Show more</button>

<h1 className="song-T">Motivational songs</h1>
<hr />
{Fire.map(function ncard(val){
    return(
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        src={val.src} />
    )})}
<button className='btn-show'>Show more</button>

<h1 className="song-T">Hip-hop</h1>
<hr />
{Hiphop.map(function ncard(val){
    return(
        <Card
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        src={val.src}
        content={val.content}  />
    )})}
<button className='btn-show' style={{marginBottom:'25px'}}>Show more</button>
<hr />

<Divider style={{width:'1200px',marginLeft:'10%'}} />
<hr style={{width:'800px',marginLeft:'20%'}} />
<hr style={{width:'500px',marginLeft:'30%'}} />
<hr style={{width:'250px',marginLeft:'40%'}} />
<hr style={{width:'125px', marginLeft:'45%'}} />
<hr style={{width:'25px',marginLeft:'48.5%',marginBottom:'50px'}} />

<Slideshow />

<div style={{textAlign:'center',marginBottom:' 30px',marginTop:'20px'}}>
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 
</div>
      <div className="container-fluid"  style={{backgroundColor: 'rgb(255, 255, 2)'}}>
        <div className="container">
          <div className="row" style={{fontFamily:"serif"}}>
              <h1 className="foot">Lorem ipsum dolor</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et<br />     
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea commodo consequat.</p>

              <div className="col-12"  id="footer">Copy321@gmail.com</div>
          </div>
        </div>
      </div>   
    </div>
  </div>  
  )
};
export default Home;