import React,{useState} from 'react'
import {Link} from "react-router-dom";
import Google from '../images/google.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Chrome.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useHistory} from 'react-router-dom'
import {useStateValue} from './StateProvider'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {actionTypes} from './reducer'
import amindige from '../images/header-logo.png'
function Chrome() {
    const [{},dispatch] = useStateValue();

    const [input, setInput] = useState("")
    const history = useHistory()

    const search =(e)=>{
        e.preventDefault()
        console.log(input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
           
        })
    history.push('/ChromeSearch')

    }


    return (
        <div className="chrome">
        <div className="chrome__container">
            <div className="chrome__top__container">
            <div className="chrome__top">
                <div className="chrome__inline"></div>
                 <div className="chrome__camera">
                     <div className="chrome__camera_part"></div>
                 </div>
             </div>
            </div>
            <div className="chrome__body">
                <Link to='/'>
                    <div className="chrome__body__power"></div>
                </Link>
                   
                    <div className="chrome__browser">
                        <div className="chrome__browser__logo">
                            <img width='150px' src={Google} alt='google'/>
                        </div>
                        <div className="chrome__browser__search">
                        <form onSubmit={search}>

                            {/* input */}
                            <input
                            value={input}
                            onChange={e =>setInput(e.target.value)}
                            className='input' 
                            type="text" 
                            placeholder='Search or type web address'/>
                        </form>
                      
                        <button className='btn' onClick={search}><ArrowForwardIosIcon /></button>
                        </div>
                        <div className="chrome__browser__quicksearch">
                            <a href="https://www.facebook.com" style={{textDecoration:'none'}} target="_blank">
                            <div className="chrome__browser__menu">
                                <div className="chrome__browser__menu__cont">     
                                 <FacebookIcon style={{color:'blue',fontSize:'30px'}} />
                             </div>
                             <p>Facebook</p>
                            </div>
                            </a>
                            
                            <a href="https://www.youtube.com" style={{textDecoration:'none'}} target="_blank">
                            <div className="chrome__browser__menu">

                              <div className="chrome__browser__menu__cont">     
                                 <YouTubeIcon style={{color:'red',fontSize:'30px'}} />
                             </div>
                             <p>Youtube</p>

                        </div>
                        </a>

                        <a href="https://amindi.ge/ka/" style={{textDecoration:'none'}} target="_blank">
                            <div className="chrome__browser__menu">

                              <div className="chrome__browser__menu__cont">     
                                 <img width="40px" src={amindige} alt=""/>
                             </div>
                             <p>Amindi.GE</p>

                        </div>
                        </a>
                        </div>
                    </div>
               
            </div>
             <div className="chrome__bottom">
                 <div className="chrome__bottom__name">
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

export default Chrome
