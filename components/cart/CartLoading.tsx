import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import ReactModal from 'react-modal'

const CartLoading = ({ isOpen }: any) => { // animation to play when person clicks checkout and waiting for stripe to redirect on server
  return (
    <ReactModal
      isOpen={isOpen}

    >
      <div>
        <Player
          src='https://assets6.lottiefiles.com/packages/lf20_zphsbvfe.json'
          autoplay
          loop
          style={{ width: '300px', height: '300px' }}
        />
      </div>
    </ReactModal>
  )
}

export default CartLoading