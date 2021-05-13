import React from 'react'
import browser from '../images/chrome.png'
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Message.css'
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from './StateProvider';

function Screen() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="Message">
        <div className="Message__container">
            <div className="Message__top__container">
            <div className="Message__top">
                <div className="Message__inline"></div>
                 <div className="Message__camera">
                     <div className="Message__camera_part"></div>
                 </div>
             </div>
            </div>
            
            <div className="Message__body">
            <Link to='/'>
                    <div className="Login__body__power"></div>
                </Link>
                <div className="Message__body__top">
                    <Avatar  className="Message__avatar" src={user.photoURL}/>
                    <h3>Chats</h3>
                </div>
                <Link to='/Chat' style={{textDecoration:'none'}} >

                <div className="Message__body__groupchat">
                    <Avatar className="Message__avatar_2" src="https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg?w=636&h=424" />
                    <div className="Message__body__groupchat-title">
                        <p>Chat 1</p>
                        <p>Join and say hello ,{user.displayName}</p>
                    </div>
                </div>
                </Link>
                <Link to='/SecondChat' style={{textDecoration:'none'}} >

                <div className="Message__body__groupchat">
                    <Avatar className="Message__avatar_2" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg" />
                    <div className="Message__body__groupchat-title">
                        <p>Chat 2</p>
                        <p>Join and say hello ,{user.displayName}</p>
                    </div>
                </div>
                </Link>
                <Link to='/ThirdChat' style={{textDecoration:'none'}} >

                <div className="Message__body__groupchat">
                    <Avatar className="Message__avatar_2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuvD8XSISZ3Gen2WRaRJXlFzM69Cf003-AKXSK90h-j42ks8Dbf9KsCnm6Uo_2JtcHic8&usqp=CAU" />
                    <div className="Message__body__groupchat-title">
                        <p>Chat 3</p>
                        <p>Join and say hello ,{user.displayName}</p>
                    </div>
                </div>
                
                </Link>
                             
            </div>
             <div className="Message__bottom">
                 <div className="Message__bottom__name">
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
