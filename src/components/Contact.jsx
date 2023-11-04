import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#252222] flex justify-center items-center p-4 pt-16'>
        <form method='POST' action="https://getform.io/f/59c7f7b9-7cb8-4ca8-a9ee-6a48db6262f2" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p> 
                <p className='text-gray-300 py-4'>// Submit the form below or send us an email - magomanogirls@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Full Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email or Phone' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit here </button>
        </form>
    </div>
  )
}

export default Contact