import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Contact() {
  const [close, setClose] = useState(false);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        onClick={() => setClose(!close)}
        className='flex items-center contact-background z-10 h-[100vh] top-0 w-[100vw] bg-black fixed'
      ></div>
      {!close && (
        <div className='  flex justify-center '>
          <div className=' fixed  z-20 max-w-4xl  bg-white h-fit mx-auto'>
            <div className='flex h-full  '>
              <div className='hidden  xl:flex items-center justify-center contact-image w-[40%]'>
                <div className='contact-color object-contain flex items-center justify-center w-full h-full'>
                  <Link to='/'>
                    <img
                      src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png'
                      alt=''
                      className='w-28 h-28 object-contain'
                    />
                  </Link>
                </div>
              </div>
              <div className='relative flex flex-col  text-center '>
                <div className='p-10 space-y-2'>
                  <h2 className='text-lg md:text-3xl font-bold'>
                    Looking forward to speak.
                  </h2>
                  <p className='text-sm md:text-base '>
                    Whether you're an Influencer, an Agency, or a Brand wishing
                    to work with us, please get in touch
                  </p>
                  <form action='' className=' '>
                    <div className='space-y-5 flex flex-col'>
                      <input
                        type='text'
                        className=' focus:outline-none border-none bg-gray-100 px-4 py-2'
                        placeholder='Name'
                      />
                      <input
                        type='email'
                        className=' focus:outline-none border-none bg-gray-100 px-4 py-2'
                        placeholder='Email'
                      />
                      <textarea
                        className='[resize:none] focus:outline-none bg-gray-100 px-4 py-2'
                        placeholder='Message'
                        name=''
                        id=''
                        cols='30'
                        rows='10'
                      ></textarea>
                      <button
                        onClick={submit}
                        className='px-2 py-4 bg-[#FEA366] '
                      >
                        Submit Now
                      </button>
                      <p> You’ll hear back from us within one business day.</p>
                    </div>
                  </form>
                </div>
                <button className='absolute top-0 right-4 md:right-0 px-4 py-2  bg-blue-400'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
