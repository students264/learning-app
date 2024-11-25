import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from './Container';
import Container2 from './Container2';
import Container3 from './Container3';
import Contain from './Contain';
import Text from './Text';
import Container4 from './Container4';
import Footer from './Footer';
import Container5 from './Container5';

const RMain = () => {
  return (
    <div style={{background:'#22303C', height: 'auto', minHeight: '160em', color: 'white'}}>
      <div className="container-fluid">
        <Container/>
        <Container2/>
        <Container3/>
        <Contain/>
        <Text/>
        <Container4/>
        <Container5/>
      </div>
      
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default RMain;
