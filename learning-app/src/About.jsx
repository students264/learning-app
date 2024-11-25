import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';

const About = () => {
  return (
    <div style={{ background: '#22303C', height: 'auto', color: 'white' }}>
      <h1 className='fs-2 text-light text-center'>About Us</h1>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <img
              src='https://m.economictimes.com/thumb/msid-80006733,width-1200,height-900,resizemode-4,imgsize-161764/tech-istock.jpg'
              alt='Computer Science'
              className='img-fluid shadow-lg rounded'
            />
          </div>
          <div className='col-lg-6'>
            <p className='fs-4 text-light'>
              At Skillwise, we believe that learning should be accessible, engaging, 
              and tailored to every individual's needs. Our mission is to empower learners 
              of all ages and backgrounds with the skills, knowledge, and confidence they 
              need to succeed in today’s fast-paced world. Whether you're looking to advance 
              your career, explore new passions, or simply improve your everyday skills, 
              our platform offers a wide range of interactive courses designed to fit your lifestyle. 
              With a variety of topics, from technology and business to creative arts and personal development, 
              we provide the tools you need to learn at your own pace, anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
