import React,{useRef,useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ChatMessages.css'
function ChatMessages({message,username,profile,image,imageInput}) {

    
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [message]);
    return (
        <div className='ChatMessages'>
            <div className="ChattMessages__profile">
                <Avatar style={{width:30,height:30,marginTop:'25px'}} src={profile}/>
                
               <div className='ChatMessages__info'>

                <p className='ChatMessages__title'>{username}</p>
                <div className="ChatMessages__textCont">
                <div className="ChatMessages__textCont_main">
                    <p className='ChatMessages__text' >{message}</p>
                <div  ref={messagesEndRef} />

                </div>
                </div>
                <div className="ChatMessages__image">
                        <img width='200px' src={image} alt=''/>
                    </div>  
                </div>
             
        </div>
        </div>
    )
}

export default ChatMessages
