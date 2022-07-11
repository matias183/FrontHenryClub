import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { FcGoogle } from "react-icons/fc";

export default function LoginButton() {

  const {loginWithRedirect} = useAuth0()

  return (
    <button type="button" style={{borderStyle:"solid"}} onClick={loginWithRedirect}>
      Log in with 
      <div><FcGoogle /></div>
    </button>
  )
}