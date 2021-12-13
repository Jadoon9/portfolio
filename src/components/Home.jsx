import React from 'react';
import image from '../images/home-image.jpg';

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt='home-image'
        className='absolute w-full h-full object-cover'
      />

      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 '>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
          Hey! I am Shahzeb Jadoon
        </h1>
      </section>
    </main>
  );
};

export default Home;
