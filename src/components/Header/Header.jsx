import  React, { useState } from  'react'
import './Header.css'
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

const  Header =()=>{
    const mobile =window.innerWidth<=768 ? true : false ;
    const [menuOpened , setMenuOpened] = useState(false)
    return(
       <div className="header">
      <img src={Logo} alt=""  className="logo"  style={{width:'1.5rem' , height:'1.5rem'}}/>
      {(menuOpened===false && mobile===true) ?
    (
        <div style={{backgroundColor:"var(--appColor)" , padding:'0.5rem', borderRadius:'5px',}}  onClick={()=>setMenuOpened(true)}><img src={Bars}/></div> 
    ) :  <ul className="header-menu">
    <li onClick={()=>setMenuOpened(false)}>Home</li>
    <li  onClick={()=>setMenuOpened(false)}>Programme</li>
    <li onClick={()=>setMenuOpened(false)}>Why us</li>
    <li onClick={()=>setMenuOpened(false)}>testimonial</li>
    
     
    </ul>}
      
       </div>
    )
}
export default Header