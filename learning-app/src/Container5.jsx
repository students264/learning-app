import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {motion} from 'framer-motion'
const Container5 = () => {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-4">
                <img 
                src="https://media.istockphoto.com/id/1353769234/photo/training-and-skill-development-concept-with-icons-of-online-course-conference-seminar-webinar.jpg?s=612x612&w=0&k=20&c=2YJG1My6Lu1T1FnzIPbimRNORcSbSuz6A8zb7HKNpx4=" 
                alt="Learning Journey" 
                className="img-fluid rounded shadow-lg"
                style={{ borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} 
                />
            </div>
            <div className='col-lg-6 mb-4 mb-lg-4'style={{background:'#22303C'}}>
            <h1 className='m-3 fs-3 text-light text-center'style={{fontFamily:'Tahoma'}}>Why learn this Topics?</h1>
            <motion.p 
        className="text-light mx-3 my-3 p-2 fs-5"
        style={{fontFamily:'Tahoma'}}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
    >
         Learning Data Structures and Algorithms (DSA), 
         Object-Oriented Programming (OOP), Networking, and Databases is essential for becoming a proficient software developer or 
         system designer. DSA enhances problem-solving and optimization skills,
         helping you write efficient code that can handle large datasets. OOP promotes reusable, modular, and maintainable code,
          which is key to scalable software development. 
          Networking knowledge is crucial for understanding how computers communicate, building distributed systems, and ensuring secure, efficient data transmission. Finally, mastering databases enables you to manage and query data efficiently, 
         design scalable storage systems.
            </motion.p>
            </div>
        </div>
    </div>
  )
}

export default Container5