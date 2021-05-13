import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import './Chat.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import { useStateValue } from './StateProvider';
import firebase from 'firebase'
import db from './firebase'
import ChatMessages from './ChatMessages'
function Chat() {
    const [messages, setMessages] = useState([])
    const [messageInput, setMessageInput] = useState("")
    const [imageInput, setImageInput] = useState("")
    const[{user},dispatch] = useStateValue();

   
    useEffect(() => {
      
        db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
          })
      }, [])
      const HandleMessage =(e)=>{
          e.preventDefault();
          db.collection('messages').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              message: messageInput,
              profile: user.photoURL,
              username: user.displayName,
              image:imageInput,
            })
            setImageInput('');
                setMessageInput('');

      }
  
    return (
        <div className="Chat">
        <div className="Chat__container">
            <div className="Chat__top__container">
            <div className="Chat__top">
                <div className="Chat__inline"></div>
                 <div className="Chat__camera">
                     <div className="Chat__camera_part"></div>
                 </div>
             </div>
            </div>
            <div className="Chat__body">
                <Link to='/'>
                    <div className="Chat__body__power"></div>
                </Link>
            <div className="Chat__body__top">
                <Link to='/message'>
                 
                    <ArrowBackIcon style={{textDecoration:"none",color:'#fff',paddinLeft:'20px'}} />
                 
                </Link>
                <Avatar src="https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg?w=636&h=424" className="Chat__body__top-avatar"/>
                <p>Chat 1</p>
            </div>
            <div className="Chat__body__messages">
                    {messages.map((message) => (
                            <ChatMessages
                            key={message.id}
                            profile={message.data.profile}
                            message={message.data.message}
                            timestamp={message.data.timestamp}
                            username={message.data.username}
                            image={message.data.image}
                />
                ))}
            </div>
          
            <div className="Chat__body__bottom__cont">
                <div className="Chat__body__bottom">
                        <input
                        type='text'
                        onChange={(e)=>setImageInput(e.target.value)}
                        value={imageInput}
                        className="image_input" 
                        placeholder="Image URL"/>
                        
                        <input 
                        value={messageInput}
                        type='text'
                        onChange={(e)=>setMessageInput(e.target.value)}
                        className="text_input" 
                        placeholder="Image URL" placeholder="Aa"/>
                       { messageInput.length > 0  && <SendIcon onClick={HandleMessage} style={{color:'#fff',paddingLeft:'10px',cursor:'pointer'}} />} 
                </div>
            </div>

            </div>
             <div className="Chat__bottom">
                 <div className="Chat__bottom__name">
                     <h3>HUAWEI</h3>
                     <div className="ChatSearch__goBack">
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

export default Chat
