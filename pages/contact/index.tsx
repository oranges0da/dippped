import { NextPage } from 'next'
import React, { useState, useEffect, } from 'react'
import Head from 'next/head'
import axios from 'axios'

const url = 'http://localhost:4000'

const ContactPage: NextPage = () => {
  const [firstName, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    const res = await axios.post(`${url}/contact`, {
      firstName,
      lastName,
      email,
      message
    })
  }

  return (
    <>
      <Head>
        <title>Contact - Head</title>
      </Head>
      <form className='mx-20 my-10 font-karla'>
        <h1 className='text-center mb-10'>Contact Us</h1>
        <div className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input onChange={e => setName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder='John' />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input onChange={e => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              E-mail
            </label>
            <input onChange={e => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@gmail.com" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Message
            </label>
            <textarea onChange={e => setMessage(e.target.value)} className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button onClick={() => handleSubmit()} className="sm:hover:scale-110 transition-all align-center border border-gray-200 bg-teal-400 hover:bg-teal-400 focus:outline-none text-black font-bold py-2 px-4 rounded" type="button">
              Submit
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
        <div>
          First Name: {firstName} <br />
          Last Name: {lastName} <br />
          Email: {email} <br />
          Message: {message} <br />
        </div>
      </form>
    </>
  )
}

export default ContactPage