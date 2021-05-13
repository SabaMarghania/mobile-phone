import React,{useState} from 'react'
import {Link} from "react-router-dom";
import './Login.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Messenger from '../images/messenger.svg'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer'
import { useStateValue } from './StateProvider';

function Login() {
    const [{ user }, dispatch] = useStateValue();
    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then((result) => {
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user,
            });
            console.log(result);
          })
          .catch((error) => {
            alert(error.message);
          });
      };

    return (
        <div className="Login">
        <div className="Login__container">
            <div className="Login__top__container">
            <div className="Login__top">
                <div className="Login__inline"></div>
                 <div className="Login__camera">
                     <div className="Login__camera_part"></div>
                 </div>
             </div>
            </div>
            <div className="Login__body">
                <Link to='/'>
                    <div className="Login__body__power"></div>
                </Link>
            
            <div className="Login__logo">
                <img width='100px' src={Messenger} alt=""/>
            </div>
            <div className="Login_auth-btn">
            <button type="submit"  onClick={signIn}>
                Sign In
            </button>
            </div>
            </div>
             <div className="Login__bottom">
                 <div className="Login__bottom__name">
                     <h3>HUAWEI</h3>
                     <div className="LoginSearch__goBack">
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

export default Login
