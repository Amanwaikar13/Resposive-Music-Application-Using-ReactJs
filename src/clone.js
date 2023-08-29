import React from 'react';
import Home from './InstagramClone/home'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import About from './InstagramClone/about';
// import Login from './pages/login-page/login';
// import Signup from './pages/Signup/Signup';


const App = () =>{
return(
<>
<Router>
<Routes>
  <Route exact  path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  {/* <Route path="/login" element={<Login />} />
  <Route path="/Signup" element={<Signup />} /> */}
</Routes>
</Router>
</>
)};
export default App;