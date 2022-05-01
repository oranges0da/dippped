import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

const CartLoading = () => {
  return (
    <div>
      <Player
        src='https://assets6.lottiefiles.com/packages/lf20_zphsbvfe.json'
        autoplay
        loop
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default CartLoading