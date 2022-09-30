import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
    return (
        <div className="Programs">
            <div className="Programs-header">
                <span className='strock-text '>Explore</span>
                <span>Programs</span>
                <span className='strock-text '>To Shape your</span>
            </div>

            <div className="Programs-categories">
                {programsData.map((program) =>
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now"> <span>join-now</span> <img src={RightArrow} /></div>
                    </div>

                )}

            </div>
        </div>
    )
}
export default Programs