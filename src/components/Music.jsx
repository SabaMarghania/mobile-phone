import React,{useState} from 'react'
import {Link} from "react-router-dom";
import './Music.css'
import ReactAudioPlayer from 'react-audio-player';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import song1 from '../audio/song1.mp3'
import song2 from '../audio/song2.mp3'
import song3 from '../audio/song3.mp3'
import song4 from '../audio/song4.mp3'
import song5 from '../audio/song5.mp3'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
function Music() {
 

    return (
        <div className="Music">
        <div className="Music__container">
            <div className="Music__top__container">
            <div className="Music__top">
                <div className="Music__inline"></div>
                 <div className="Music__camera">
                     <div className="Music__camera_part"></div>
                 </div>
             </div>
             <Link to='/'>
                    <div className="screen__music__body__power"></div>
                </Link>
            </div>
            
            <div className="Music__body">
           

             <div className="Music__fixedtop">
             <div className="Music__fixedtop__cont">
                    <Link to='/screen'>
                        <ArrowBackIcon style={{textDecoration:"none",color:'#fff'}} />
                    </Link>
                    <p>All songs</p>
                    <MusicNoteIcon style={{color:'#fff'}}/>
             </div> 
             </div> 
             <div className="Music__songCont">
            <div className="Music__song" >
                <p>The Offspring - The future is now</p>
            <ReactAudioPlayer
                    src={song1}
                    controls
                    autoPlay={false}
                    className='Music__player'
                />
                
            </div>
            
            <div className="Music__song" >
                <p>Green day - Holiday</p>
            <ReactAudioPlayer
                    src={song2}
                    controls
                    autoPlay={false}
                    className='Music__player'
                />
                
            </div>
            <div className="Music__song" >
                <p>R3HAB,Timmy trumpet - 911</p>
            <ReactAudioPlayer
                    src={song3}
                    controls
                    autoPlay={false}
                    className='Music__player'
                />
                
            </div>

                 <div className="Music__song" >
                <p>Twenty One Pilots - Heathens</p>
            <ReactAudioPlayer
                    src={song4}
                    controls
                    autoPlay={false}
                    className='Music__player'
                />
                
            </div>

                   <div className="Music__song" >
                <p>All Good Things - For The Glory</p>
            <ReactAudioPlayer
                    src={song5}
                    controls
                    autoPlay={false}
                    className='Music__player'
                />
                
            </div>

                   <div className="Music__song" >
                <p>The Offspring - The future is now</p>
            <ReactAudioPlayer
                    src={song1}
                    controls
                    autoPlay={false}
                    className='Music__player'
                />
                
            </div>
            <div className="Music__song" >
                <p>The Offspring - The future is now</p>
            <ReactAudioPlayer
                    src={song1}
                    controls
                    autoPlay={false}
                    className='Music__player'
                />
                
            </div>
            </div>
                  
            </div>
             <div className="Music__bottom">
                 <div className="Music__bottom__name">
                     <h3>HUAWEI</h3>
                     <div className="MusicSearch__goBack">
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

export default Music
