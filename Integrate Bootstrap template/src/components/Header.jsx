import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


function Header() {
  return (
    <div>
     <div className="container main">
      <div className="row">
        <div className="col-md-6">
        <h1 className="m-5">Hi,I'm Prem</h1>
        <p className="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, nulla. Beatae nobis fuga corporis earum hic dolore doloribus quisquam animi laboriosam cum qui accusantium, quaerat consectetur error atque laudantium voluptatum.</p>
        <button style={{backgroundColor:"blue",height:"60px",width:"160px",color:"white",border:"none",borderRadius:"20px",marginLeft:"40px"}}>I'M AVAILABLE</button>
        </div>
        <div className="col-md-6 img">
          <img src="https://img.freepik.com/premium-photo/young-handsome-man-isolated-white-background_185193-82024.jpg" style={{height:"500px",width:"500px"}}></img>
        </div>
      </div>
     

     </div>

   
    </div>
  )
}

export default Header
