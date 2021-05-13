import React from 'react'
import './ChromeSearch.css'
import {Link} from "react-router-dom";
import {useStateValue} from './StateProvider'
import google from '../images/google.png'
import useGoogleSearch from './UseGoogleSearch'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function ChromeSearch() {
    const [{term},dispatch] = useStateValue();

    const { data } = useGoogleSearch(term)
    // const data = Response;
    console.log(data)
    return (
        <div className="ChromeSearch">
        <div className="ChromeSearch__container">
            <div className="ChromeSearch__top__container">
            <div className="ChromeSearch__top">
                <div className="ChromeSearch__inline"></div>
                 <div className="ChromeSearch__camera">
                     <div className="ChromeSearch__camera_part"></div>
                 </div>
             </div>
            </div>
            
            <div className="ChromeSearch__body">
                <Link to='/'>
                    <div className="ChromeSearch__body__power">power</div>
                </Link>
               <div className="ChromeSearch__body__header">
                   <Link to='/screen'>
                       <img width='80px' src={google} alt=""/>
                   </Link>
               </div>

               <div className="ChromeSearch__body__search">
               </div>

               <div className="ChromeSearch__body__options">
                 <div className="ChromeSearch__body__options_item">
                    <p style={{borderBottom:'2px solid black'}}>All</p>
                 </div>
                 <div className="ChromeSearch__body__options_item">
                    <p>Images</p>
                 </div>
                 <div className="ChromeSearch__body__options_item">
                    <p>News</p>
                 </div>
                 <div className="ChromeSearch__body__options_item">
                    <p>Maps</p>
                 </div>
                 <div className="ChromeSearch__body__options_item">
                    <p>Video</p>
                 </div>
               </div>

               {data?.items.map((item,i) => (
                        <div className="ChromeSearch_result" key={i}>
                            <a style={{color:'#000',textDecoration:'none'}} href={item.link} target="_blank">
                                {item.displayLink} ✔
                            </a>
                            <a className="ChromeSearch_resultTitle" href={item.link} target="_blank">
                                <h3>{item.title}</h3>
                            </a>
                            <div className="ChromeSearch_resultImage">
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        width='200px'
                                        height='fit-content'
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}
                            </div>
                            <p className="ChromeSearch_resultSnippet">
                                {item.snippet}
                            </p>
                            <hr/>
                        </div>
                    ))}

         
               

                

                   
                </div>
            
             <div className="ChromeSearch__bottom">
                 <div className="ChromeSearch__bottom__name">
                     <h3>HUAWEI</h3>
                     <div className="ChromeSearch__goBack">
                         <Link to='/chrome'>
                             <ArrowBackIcon style={{textDecoration:"none",color:'#fff'}} />
                         </Link>
                 </div>
                 </div>
                
             </div>
        </div>
    </div>
    )
}

export default ChromeSearch
