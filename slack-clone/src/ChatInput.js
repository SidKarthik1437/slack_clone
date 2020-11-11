import React from 'react'
import './ChatInput.css'
import { Button } from '@material-ui/core'

function ChatInput() {
    return (
        <div className="chatinput">
            <form>
                <input placeholder="" />
                <Button variant="" color="primary">SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
