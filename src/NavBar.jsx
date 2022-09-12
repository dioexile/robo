import React from 'react'
import facebook from './assets/social-media-icons/facebook_32x32.png'
import twitter from './assets/social-media-icons/twitter_32x32.png'
import email from './assets/social-media-icons/email_32x32.png'

const NavBar = ({accounts, setAccounts}) => {

  const isConnected = Boolean(accounts[0])

  const connectAccount = async () => {
    if(window.ethereum){
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      setAccounts(accounts)
    }
  }

  return (
    <header>
      <div className="left-side">
        <div className="facebook"><img src={facebook} alt="" /></div>
        <div className="twitter"><img src={twitter} alt="" /></div>
        <div className="email"><img src={email} alt="" /></div>
      </div>
      <div className="right-side">
        <div className="about">About</div>
        <div className="mint">Mint</div>
        <div className="team">Team</div>
        {isConnected ? (<div className="connected">Connected</div>) : (<div onClick={connectAccount} className="connected">Connect</div>)}
      </div>
    </header>
  )
}

export default NavBar