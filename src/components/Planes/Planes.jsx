import  React from  'react'
import './Planes.css'
import {plansData} from '../../data/plansData'
import  whiteTick from "../../assets/whiteTick.png";
const  Planes =()=>{
    return(
       <div className='Planes-container'>
                        <div className="Programs-header">
                                <span className='strock-text '>READY TO START</span>
                                <span>YOUR JOUNERY</span>
                                <span className='strock-text '>NOW WITHUS</span>
                        </div>
            <div className="Plans">
            {plansData.map((plan , i) =>(
                <div className="plan" key={i}>
                            {plan.icon}
                            <span>{plan.name} </span>
                            <span>{plan.price}</span>
                                <div className="features">
                                {plan.features.map((feature , i) =>(
                                    <div className="feature" key={i}>
                                    <img src={whiteTick}/>
                                    <span  key={i}>{feature}</span>
                                    </div>
                                    ) )}
                                </div>
                                <div>
                                <span>See more benifit</span>
                                </div>
                                <button className="btn"> join now</button>
                </div>

            ) )}

                </div>
   
       </div>
    )
}
export default Planes