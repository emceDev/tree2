import React from 'react';
import {signInPopup,logOut} from '../Firebase/userQ'

export const Login = () =>{
    return(
        <div>
        {window.localStorage.getItem('logged') !== true
        ?
        <button 
        onClick={()=>{
        logOut(()=>{
            this.props.history.push("/")
        })
        }}>
          logout
        </button>
        :
        <button 
        onClick={()=>{
            signInPopup(() => {
                this.props.history.push("/UserLogged");
              })   
        }}>
          log/sign
        </button>
        }
        </div>
    )
}
