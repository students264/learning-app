import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Header from './Header'; 
import About from './About';   
import Courses from './Courses'; 
import Contact from './Contact'; 
import Work from './Work'; 
import Home from './Home'; 
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Link to='/'/>
    </Router>
  );
};

export default App;
