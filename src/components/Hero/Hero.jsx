import  React from  'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import { type } from '@testing-library/user-event/dist/type';
const  Hero =()=>{
    const transition =  {type:'spring' , duration:5}
    const mobile =window.innerWidth<=768 ? true : false ;
    return(
       <div className='hero'>
                    <div className='left-h'>
                                            <Header/>
                                    <div className='the-best-ad'>
                                            <motion.div  initial ={{left: mobile? "165px":'238px'}}
                                            whileInView={{left: '9px'}}

                                            transition={{...transition, type:'tween'}}
                                            >
                
                                            </motion.div>
                                        <span>the best fitness clube in the town</span>
                                    </div>

                                    <div className='hero-text'>
                                                    <div>
                                                    <span className='strock-text '>Shape</span>
                                                    <span>Your</span>
                                                    </div>
                                                    <div>
                                                    <span>ideal body</span>
                                                    
                                                    </div>

                                                    <div >
                                                    <span>
                                                    The storagePath method of the Illuminate\Contracts\Foundation\Application interface has been updated to
                                                    accept a $path argument.your</span>
                                                   
                                                    </div>


                                    </div>
                                    <div className='figure'>
                                            <div>
                                                <span>+50</span>
                                                <span>Expert coach</span>
                                            </div>
                                            <div>
                                            <span>+970</span>
                                            <span>member join </span>
                                            </div>

                                            <div>
                                                <span>+50</span>
                                                <span>fitnessProgramme</span>
                                            </div>
                                        
                               
                                    </div>
                                            <div className='hero-buttons'>
                                            <buttons className="btn">Get Start</buttons>
                                            <buttons className="btn">Learn More</buttons>
                                            </div>

                                
                    </div>
            <div className='right-h'>
                    <button className='btn'> Join Now</button> 
                    <motion.div 
                     initial ={{right:'-1rem'}}
                    whileInView={{right: '4rem'}}

                    transition={transition} 
                     className='heart-rate'>
                    <img src={Heart}  alt=''/>
                    <span>Heart Rate</span> <span>1186 bpm</span>
                    </ motion.div>  
                    
                    <img src={hero_image}  alt=''  className='hero-image'/>
                    <img src={hero_image_back}  alt='' className='hero-image_back'/>


                    <motion.div  
                    initial ={{right:'37rem'}}
                    whileInView={{right: '28rem'}}

                    transition={transition} 
                    className='calories'>
                    <img src={Calories} />
                    <div>
                    <span> Calories Burned</span>
                    <span> 220 kcal</span>
                    </div>
                    </motion.div>
            </div>
       </div>
    )
}
export default Hero