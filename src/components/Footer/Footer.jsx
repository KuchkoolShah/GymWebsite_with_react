import  React from  'react'
import './Footer.css'
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";
const  Footer =()=>{
    return(
       <div className='Footer-container'>
       <hr/>

       <div className='Footer'>
       <div className='Footer-Social'>
       <img  src ={github}/>
       <img  src ={linkedin}/>
       <img  src ={ instagram}/>
       </div>

       <div className='footer-h'> 
       <img  src ={logo}/>
       <p className='footer-para'>Made by kuchkoolshah</p>
       </div>
     
      
       </div>
      
       </div>
    )
}
export default Footer