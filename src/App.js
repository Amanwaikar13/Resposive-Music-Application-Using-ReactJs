import React from 'react';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login-page/login';
import Signup from './pages/Signup/Signup';


const App = () =>{
return(
<>
<Router>
<Routes>
  <Route exact  path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/Signup" element={<Signup />} />
</Routes>
</Router>
</>
)};
export default App;






























// import Index from './index.css'
// import Card from './pages/Card';
// import RomanticSongs from './pages/Data/Romantic-Sdata.js';


// // let slideIndex = 0;
// // showSlides();

// // function showSlides() {
// //   let i;
// //   let slides = document.getElementsByClassNameName("mySlides");
// //   let dots = document.getElementsByClassNameName("dot");
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";  
// //   }
// //   slideIndex++;
// //   if (slideIndex > slides.length) {slideIndex = 1}    
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].classNameName = dots[i].classNameName.replace(" active", "");
// //   }
// //   slides[slideIndex-1].style.display = "block";  
// //   dots[slideIndex-1].classNameName += " active";
// //   setTimeout(showSlides, 2000);
// // }

// const App=()=>{
//   return(
//     <div>
//     <nav className="navbar navbar-light bg-light">
//   <div className="container-fluid Hello">
//     <a className="navbar-brand Cname" href='/'>🥰<span style={{fontSize:"40px"}}>M</span>yMusic🎧❤️</a>
//     <form className="d-flex">
//     <div className="collapse navbar-collapse">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0 navlinks">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="/">About</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">Features</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">Pricing</a>
//         </li>
//       </ul>
//       <button className="btn btn-outline-success search" type="submit">❤️‍🔥</button>
//       <input className="form-control me-2" style={{fontSize:'20px'}} type="search" placeholder="Search" aria-label="Search" />
//       </div>
//     </form>
//     </div>
//   </nav>
//   <img className="img" alt="M-img" src="./images/qw.jpg" />


//   <h2 className='Stitle'>Superhit of 2022 Top 50 Songs Free </h2>

// { /*<h1>Top Playlist</h1>
// <hr style={{backgroundColor: 'white',color:'white',height:'5px',marginTop: '10px',marginBottom: '20px'}} />
//     <div className=".container" >
//       <div className="row"  style={{border:'4px solid white',marginLeft: '50px',marginRight: '50px'}}>
//           <div>
//             <img className="playlist" style={{marginLeft: '50px'}} src="C:\Users\amanw\OneDrive\Desktop\now\47.jpeg" />
//           </div>

//           <div>
//             <img className="playlist" style={{marginLeft: '50px'}} src="C:\Users\amanw\OneDrive\Desktop\now\42.jpeg" />
//           </div>

//           <div>
//             <img className="playlist" style={{marginLeft: '50px',marginRight: '30px'}} src="C:\Users\amanw\OneDrive\Desktop\now\49.jpeg" />
//           </div>

//           <div>
//             <img className="playlist" style={{marginLeft:'50px',marginTop:'50px',marginBottom:'10px'}} src="C:\Users\amanw\OneDrive\Desktop\now\48.jpeg" />
//           </div>
//           <div>
//             <img className="playlist" style={{marginLeft:'50px',marginTop:'50px',marginBottom:'10px'}} src="C:\Users\amanw\OneDrive\Desktop\now\42.jpeg" />
//           </div>
//         <div>
//     <button style={{marginLeft: '125px',margintop: '200px'}} type="menu">Click here to see all Playlist >>> </button>
//         </div>
//       </div>
//     </div>
// {/* <hr style="background-color: white;color:white;height:5px;margin-top: 20px" /> */}


// {/* style="margin-top: 150px;font-size: 45px;font-weight: 600;text-align: center;font-style: italic;" */}

// <h1 className="song-T">Romantic songs</h1>
// <hr />

// {RomanticSongs.map(function ncard(val){
//     return(
//         <Card
//         imgsrc={val.imgsrc}
//         title={val.title}
//         content={val.content}
// />
//     )
// })}

// <h1 className="song-T">DJ Remix</h1>
// <hr />
// <h1 className="song-T">Motivational songs</h1>
// <hr />
// <h1 className="song-T">Hip-hop</h1>
// <hr />

// <hr style={{marginTop: '60px'}} />
// <hr style={{width:'1200px'}} />
// <hr style={{width:'800px'}} />
// <hr style={{width:'400px'}} />
// <hr style={{width:'100px'}} />
// <hr style={{height:'8px',width:'10px'}} />

// <div style={{textAlign:'center',marginBottom:' 30px'}}>
//   <span className="dot"></span> 
//   <span className="dot"></span> 
//   <span className="dot"></span> 
// </div>


//       <div className="container-fluid"  style={{backgroundColor: 'rgb(255, 255, 2)'}}>
//         <div className="container">
//           <div className="row">
//               <h1 className="foot">Lorem ipsum dolor</h1>
//               <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et     
//        <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea commodo consequat.</p>

//               <div className="col-12"  id="footer">Copy321@gmail.com</div>
//           </div>
//         </div>
//       </div>   
//     </div>

//   )
// };


// export default App;
