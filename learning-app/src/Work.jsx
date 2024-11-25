import React from 'react';
import { Accordion } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
const Work = () => {
  return (
    <div style={{ background: '#22303C', height: 'auto', color: 'white' }}>
      <h1 className='fs-2 text-light text-center'>What We Do?</h1>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <img
              src='https://lh3.googleusercontent.com/proxy/S0TPpr9pvmG4fa2SQheRHFww9iF74W_loS6qrUB6lw8xj3hxNW6eGk9pq9I6C8V-dCK_a8ItI9fROYU_eXo'
              alt='Computer Science'
              className='img-fluid shadow-lg rounded'
            />
          </div>
          <div className='col-lg-6'>
            <p className='fs-4 text-light'>
              At Skillwise, we provide a dynamic and interactive online learning experience designed to empower learners of all ages.
              Our platform offers a wide range of high-quality courses across various subjects, from professional development to personal growth.
              With flexible learning schedules, expert instructors, and a rich library of resources, we ensure that every student can learn at their own pace, anytime and anywhere.
              Whether you're looking to enhance your career skills, explore a new hobby, or pursue academic achievements,
              our comprehensive tools and community support will help you succeed in your learning journey.
            </p>
          </div>
        </div>

        <div className='row'>
          <h1 className="fs-3 fw-bold text-light m-2 p-2 text-center">Can you Ask This Question?</h1>
          <Accordion>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Why do we start these courses?</Accordion.Header>
              <Accordion.Body>
                Courses are typically started to help individuals acquire new knowledge, develop skills, and address specific needs, whether for personal growth, professional advancement, or academic goals.
                They fill knowledge gaps, offer career-focused training, and keep learners updated with emerging technologies or industry trends.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1'>
              <Accordion.Header>What are the benefits of online courses?</Accordion.Header>
              <Accordion.Body>
                Online courses offer flexibility, allowing learners to study at their own pace, from anywhere in the world. They are often more affordable than traditional classroom courses and can be tailored to fit various learning styles.
                Additionally, online courses provide access to a wide range of topics and resources, making education more accessible to people with diverse needs.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

export default Work;
