import React, { useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import robo from './robo.json'
const roboAdress = "0x224EF20553629ae76Ca90e7c5383cE8E704967d0"

const MainMint = ({accounts, setAccounts}) => {
  const [mintAmount, setMintAmount] = useState(1)
  const isConnected = Boolean(accounts[0])

  const handleMint = async () => {

    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const balance = await provider.getBalance(accounts[0])
      ethers.utils.formatEther(balance)
      const tx = {
        from: accounts[0],
        to: '0x931fb2a70e606f716Be2899749CD2F5ef2A79C72',
        value: ethers.utils.parseEther(0.01.toString()),
        gasLimit: ethers.utils.hexlify(100000), // 100000
        gasPrice: 100000,
      }
      await signer.sendTransaction(tx).then((transaction) => {
        console.dir(transaction)
        alert("Send finished!")
      })
      
      // const contract = new ethers.Contract(roboAdress, robo.abi, signer)
      // await contract.mint(BigNumber.from(mintAmount), {
      //   value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
      // })
    }
  }
  const send = async () => {
  }
  const handleDecremet = () => {
    if(mintAmount <= 1) return
    setMintAmount(mintAmount - 1)
  }
  const handleIncremet = () => {
    if(mintAmount >= 3) return
    setMintAmount(mintAmount + 1)
  }

  return (
    <main>
      <h1>RoboPunks</h1>
      <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eos? Reprehenderit, assumenda!</p>
      {isConnected ? (
        <div>
          <div className="mintmain">
            <button onClick={handleDecremet}>-</button>
            <input type="text" value={mintAmount}/>
            <button onClick={handleIncremet}>+</button>
          </div>
          <button onClick={handleMint} className="mintnow">Mint now!</button>
          <button onClick={send} className="mintnow">send</button>

        </div>
      ) : (
        <p className='s'>you must connected to mint</p>
      )}
    </main>
  ) 

}

export default MainMint