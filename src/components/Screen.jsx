import React from 'react'
import browser from '../images/chrome.png'
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Messenger from '../images/messenger.svg'
import Notepad from '../images/notepad.png'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './Screen.css'
function Screen() {
    return (
        <div className="screen">
        <div className="screen__container">
            <div className="screen__top__container">
            <div className="screen__top">
                <div className="screen__inline"></div>
                 <div className="screen__camera">
                     <div className="screen__camera_part"></div>
                 </div>
             </div>
            </div>
            
            <div className="screen__body">
                <Link to='/'>
                    <div className="screen__body__power"></div>
                </Link>
                            
                <div className="screen__body__menu">
                <div className="screen__body__menu__cont">
                 <div className="screen__body__iconCont" style={{backgroundColor:" #302f2f"}} >
                        <Link to='/music'>
                          <MusicNoteIcon className="screen__icon" style={{color:"white"}}  />
                        </Link>
                    </div>
                        <Link to='/Login'>
                            <img width='45px' src={Messenger} alt=""/>
                        </Link>
                        <Link to='/Notepad'>
                            <img width='45px' src={Notepad} alt=""/>
                        </Link>
                    <div className="screen__body__iconCont">
                        <Link to='/chrome'>
                            <img width='55px' src={browser}/>
                        </Link>
                    </div>
                    </div>
                   
                </div>
                             
            </div>
             <div className="screen__bottom">
                 <div className="screen__bottom__name">
                     <h3>HUAWEI</h3>
                     <div className="ChromeSearch__goBack">
                         <Link to='/screen'>
                             <ArrowBackIcon style={{textDecoration:"none",color:'#fff'}} />
                         </Link>
                 </div>
                 </div>
             </div>
        </div>
    </div>
    )
}

export default Screen
