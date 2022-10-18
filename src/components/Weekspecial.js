import React, { useState } from 'react'
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import Lunch from './Lunch';

const Weekspecial = () => {


    const [isBreak, setBreak] = useState(true);
    const [isLunch, setLunch] = useState(false);
    const [isDinner, setDinner] = useState(false);

    const onBreak = (e) =>{
        setBreak(true)
        setLunch(false)
        setDinner(false)
        document.getElementById('break').style.color='red';
        document.getElementById('lunch').style.color='black';
        document.getElementById('dinner').style.color='black';

    }
    
    const onLunch = (e) =>{
        setBreak(false)
        setLunch(true)
        setDinner(false)
        document.getElementById('break').style.color='black';
        document.getElementById('lunch').style.color='red';
        document.getElementById('dinner').style.color='black';
    }
    
    const onDinner = (e) =>{
        setBreak(false)
        setLunch(false)
        setDinner(true)
        document.getElementById('break').style.color='black';
        document.getElementById('lunch').style.color='black';
        document.getElementById('dinner').style.color='red';
    }
    

    return (

        <>
            <div className="extra"></div>
            <div className="week-cont">
                <div className="container">
                    <h5 className="heading text-center">KLASSY WEEK</h5>
                    <h2 className='text-center'>This Week's Special<br /> Meal Offers</h2>
                    <div className="container col-3 mt-5">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn" id='break' onClick={onBreak}>
                                    <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-icon-01.png" alt="" />
                                    <div className="text-center meal-type">Breakfast</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="btn" id='lunch' onClick={onLunch}>
                                    <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-icon-02.png" alt="" />
                                    <div className="text-center meal-type">Lunch</div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="btn" id='dinner' onClick={onDinner}>
                                    <img src="https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/tab-icon-03.png" alt="" />
                                    <div className="text-center meal-type">Dinner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isBreak && <Breakfast/>}
                    {isLunch && <Lunch/>}
                    {isDinner && <Dinner/>}
                </div>
            </div>
        </>
    )
}

export default Weekspecial