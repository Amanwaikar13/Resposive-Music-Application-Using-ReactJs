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
