import React, { useEffect, useState } from 'react'
import './Chat.css'
import Message from './Message' 
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import db from './firebase'

function Chat() {

    const { roomId } = useParams();
    const [roomdetails, setRoomDetails] = useState(null);
    const [roommessages, setRoomMessages] = useState([])

    useEffect(() => {
        if(roomId)
        {
            db
            .collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => {
                setRoomDetails(snapshot.data());
            })
        }

        db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
            setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        })

    }, [roomId] )
    console.log(roommessages);
    console.log(roomdetails);
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header_left">
                    <h4 className="chat__ChannelName">
                        <strong># {roomdetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__header_right">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {/* Messages */}
                {roommessages.map(({ message, timestamp, user, userImage }) => (
                    <Message 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat
