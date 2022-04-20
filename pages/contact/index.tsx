import { NextPage } from 'next'
import React, { useState, useEffect, } from 'react'
import Head from 'next/head'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'

const url = 'http://localhost:4000'

const ContactPage: NextPage = () => {
  const { addToast } = useToasts()
  
  const [firstName, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    const { data } = await axios.post(`${url}/contact`, {
      firstName,
      lastName,
      email,
      message
    })
    
    if (data.status === 'success') {
      addToast("Contact Form Submitted.", {
        appearance: 'success',
        autoDismiss: true,
      })
    } else {
      addToast("Error submitting contact form.", {
        appearance: 'error',
        autoDismiss: false,
      })
    }
  }

  return (
    <>
      <Head>
        <title>Contact - Dippped</title>
      </Head>
      <form className='md:mx-20 mx-14 my-10 font-karla'>
        <div className='md:mx-20'>
          <h1 className='text-center mb-10'>Contact Us</h1>
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  First Name
                </label>
                <input required onChange={e => setName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder='John' />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input required onChange={e => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                E-mail
              </label>
              <input required onChange={e => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@gmail.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <textarea required onChange={e => setMessage(e.target.value)} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button onClick={() => handleSubmit()} className="sm:hover:scale-110 transition-all align-center border border-gray-200 bg-teal-400 hover:bg-teal-400 focus:outline-none text-black font-bold py-2 px-4 rounded" type="submit">
                Submit
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
      </div>
      </form>
    </>
  )
}

export default ContactPage