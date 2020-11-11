import React, { useState } from 'react'
import './ChatInput.css'
import { Button, Input } from '@material-ui/core'
import db from './firebase'
import { useStateValue } from './StateProvider';
import firebase from 'firebase'

function ChatInput({ channelName, channelId }) {

    const [{ user }] = useStateValue();
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId)
        {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }

        setInput('');
    }

    return (
        <div className="chatinput">
            <form>
                <input 
                placeholder={`Message #${channelName?.toLowerCase()}`}
                value={input}
                onChange={e => setInput(e.target.value)}
                />
                <Button type="submit" onClick={sendMessage} variant="contained" color="primary">SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
