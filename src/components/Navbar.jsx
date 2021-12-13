import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <header className='bg-red-600'>
      <div className='mx-auto container flex justify-between'>
        <nav className=' '>
          <NavLink
            to='/'
            className='mr-4 text-4xl flex inline-flex items-center hover:text-green-800text-white py-6 text-red-100 py-3 px-3 font-bold cursive tracking-widest hover:text-green-800'
          >
            ShahZeb
          </NavLink>

          <NavLink
            to='/post'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 rounded hover:text-green-800'
          >
            Blog Posts
          </NavLink>

          <NavLink
            to='/project'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 rounded hover:text-green-800'
          >
            Projects
          </NavLink>

          <NavLink
            to='/about'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 rounded hover:text-green-800'
          >
            About Me
          </NavLink>
        </nav>
        <div className='inline-flex px-3 py-3 my-6'>
          <SocialIcon
            url='https://www.youtube.com/channel/UCFFiEWENVqm7_o70mlpqljw'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/shahzeb-jadoon-8bb2949b/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.instagram.com/shahzebjadoon_/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
