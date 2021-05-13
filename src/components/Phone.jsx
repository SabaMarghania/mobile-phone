import React from 'react'
import './Phone.css'
import {Link} from "react-router-dom";
import finger from '../images/finger.png'
function Phone() {
    return (
        <div className="phone">
            <div className="Phone__container">
                <div className="Phone__top__container">
                <div className="Phone__top">
                    <div className="Phone__inline"></div>
                     <div className="Phone__camera">
                         <div className="Phone__camera_part"></div>
                     </div>
                 </div>
                </div>
                <div className="Phone__body">
                    <Link to='/screen'>
                        <div className="Phone__body__power"></div>
                    </Link>
                    <img width="250px" src={finger} alt=""/>
                   
                </div>
                 <div className="Phone__bottom">
                     <div className="Phone__bottom__name">
                         <h3>HUAWEI</h3>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Phone
