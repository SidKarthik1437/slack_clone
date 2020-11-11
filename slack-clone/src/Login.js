import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user 
            })
        })

        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" alt=""/>
                <h1 className="login__h1">Sign in to Sid Karthik HQ </h1>
                <p className="login__p">sidkarthik.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
