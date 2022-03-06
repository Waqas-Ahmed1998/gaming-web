import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [onClick, setClick] = useState(true);
  const [onContact, setContact] = useState(false);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className='hidden  xl:flex justify-between items-center py-4 md:font-semibold md:max-w-7xl lg:max-w-screen-2xl mx-auto  '>
        <div className=''>
          <Link to='/'>
            {' '}
            <img
              className='cursor-pointer w-40 h-40 object-contain'
              src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png'
              alt=''
            />
          </Link>
        </div>

        <div className=' flex xl:space-x-7  text-2xl tracking-wide'>
          <Link to='/'>
            <a href='' className='hover:text-[#FE8936] cursor-pointer'>
              Home
            </a>
          </Link>
          <Link to='/services'>
            <a href='' className='hover:text-[#FE8936] cursor-pointer'>
              Services
            </a>
          </Link>
          <Link to='/influencers'>
            <a href='' className='hover:text-[#FE8936] cursor-pointer'>
              Influencers
            </a>
          </Link>
          <Link to='/talents'>
            <a href='' className='hover:text-[#FE8936] cursor-pointer'>
              On-Air Talents
            </a>
          </Link>
          <Link to='/case'>
            <a href='' className='hover:text-[#FE8936] cursor-pointer'>
              Case Studies
            </a>
          </Link>
          <Link to='/about'>
            <a href='' className='hover:text-[#FE8936] cursor-pointer'>
              About Us
            </a>
          </Link>
          <Link to='/'>
            <a href='' className='hover:text-[#FE8936] cursor-pointer'>
              中国人
            </a>
          </Link>
        </div>

        <div className=' text-center'>
          <button
            onClick={(e) => setContact(!onContact)}
            className=' text-white hidden md:inline-grid btn-contact  py-4 bg-[#FEA366]   w-60 hover:shadow-2xl shadow-orange-700 rounded-full text-2xl'
          >
            Contact Us
          </button>
        </div>
      </div>
      {
        // mobile nav
      }
      <div className=' pr-5 mb-10 relative xl:hidden bg-transparent  flex justify-between p-2 items-center'>
        <Link to='/'>
          {' '}
          <img
            onClick={(e) => setClick(!onClick)}
            className='cursor-pointer w-20 h-20 object-contain'
            src='https://influencers.ar-ad.com/wp-content/uploads/2021/07/main-logo-236x300.png'
            alt=''
          />
        </Link>
        <div className='cursor-pointer z-50 text-black font-bold'>
          {!onClick && (
            <FontAwesomeIcon
              icon={faStream}
              size={'lg'}
              onClick={(e) => setClick(!onClick)}
            />
          )}
          {onClick && (
            <FontAwesomeIcon
              icon={faTimes}
              size={'lg'}
              onClick={(e) => setClick(!onClick)}
            />
          )}
        </div>
        {onClick && (
          <div className='left-0 absolute text-white items-center justify-evenly top-[100%] z-40 bg-black xl:hidden flex flex-col space-y-5 h-screen w-full'>
            <Link to='/'>
              <a
                onClick={(e) => setClick(!onClick)}
                href=''
                className='hover:text-[#FE8936] cursor-pointer'
              >
                Home
              </a>
            </Link>
            <Link to='/services'>
              <a
                onClick={(e) => setClick(!onClick)}
                href=''
                className='hover:text-[#FE8936] cursor-pointer'
              >
                {' '}
                Services
              </a>
            </Link>
            <Link to='/influencers'>
              <a
                onClick={(e) => setClick(!onClick)}
                href=''
                className='hover:text-[#FE8936] cursor-pointer'
              >
                Influencers
              </a>
            </Link>

            <Link to='/talents'>
              <a
                onClick={(e) => setClick(!onClick)}
                href=''
                className='hover:text-[#FE8936] cursor-pointer'
              >
                {' '}
                On-Air Talents
              </a>
            </Link>
            <Link to='/case'>
              <a
                onClick={(e) => setClick(!onClick)}
                href=''
                className='hover:text-[#FE8936] cursor-pointer'
              >
                {' '}
                Case Studies
              </a>
            </Link>
            <Link to='/'>
              <a
                onClick={(e) => setClick(!onClick)}
                href=''
                className='hover:text-[#FE8936] cursor-pointer'
              >
                About Us
              </a>
            </Link>
            <Link to='/'>
              <a href='' className='hover:text-[#FE8936] cursor-pointer'>
                中国人
              </a>
            </Link>
          </div>
        )}
      </div>
      {
        // Contact form

        onContact && (
          <>
            <div
              onClick={() => setContact(!onContact)}
              className='flex items-center contact-background z-10 h-[100vh] top-0 w-[100vw] bg-black fixed'
            ></div>

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
                        Whether you're an Influencer, an Agency, or a Brand
                        wishing to work with us, please get in touch
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
                          <p>
                            {' '}
                            You’ll hear back from us within one business day.
                          </p>
                        </div>
                      </form>
                    </div>
                    <button
                      onClick={() => setContact(!onContact)}
                      className='absolute top-0 right-4 md:right-0 px-4 py-2  bg-blue-400'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}

export default Navbar;
