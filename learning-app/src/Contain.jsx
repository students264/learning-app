import React from 'react'

const Vedio = () => {
  return (
    <div className='container mt-2'>
        <div className="row">
        <div className='col-lg-6' style={{background:'#22303C'}}>
          <h1 className='text-light text-center fs-5'>How Learning?</h1>
        <iframe src="https://www.youtube.com/embed/xFOG_9Y883c?autoplay=1&mute=1" style={{margintop:'10px'}} height="300" width="500" frameBorder="0" allow="autoplay; mute"></iframe>
        </div>
        <div className='col-lg-6' style={{background:'#22303C'}}>
        <h1 className='text-light text-center fs-5'>Why learning?</h1>
        <iframe src="https://www.youtube.com/embed/TcOEt6TdoYQ?autoplay=1&mute=1" style={{margintop:'10px'}} height="300" width="500" frameBorder="0" allow="autoplay; mute"></iframe>
        </div>
        </div>
    </div>
  )
}

export default Vedio