import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/logo.png"
import login from "../../images/login-icon.png"
import loginWhite from "../../images/login-white.png"
import { Header } from './styled'


const AuthHeader = () => {
  return (
    <Header>
    <ul>
        <li>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </li>
        <li>
            <Link className="login" to="#">Login
                <img className="l-g" src={login} alt='icon' />
                <img className="l-w" src={loginWhite} alt='icon' />
            </Link>
        </li>
    </ul>
</Header>
  )
}

export default AuthHeader