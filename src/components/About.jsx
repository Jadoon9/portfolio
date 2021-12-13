import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import imageLanding from '../images/home-image.jpg';
import imageBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const About = () => {
  const [author, setAuthor] = useState('');

  useEffect(() => {
    try {
      const getAuthor = async () => {
        const data = await sanityClient.fetch(`*[_type == 'author']{
          name,
          bio,
          'authorImage': image.asset->url
        }`);
        setAuthor(data[0]);
      };
      getAuthor();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (!author) return <div>Loading . . . </div>;
  return (
    <main className='relative'>
      <img src={imageLanding} alt='LandingImage' className='absolute w-full' />
      <div className='p-10 lg:pt-48 container mx-auto relative'>
        <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            alt={author.name}
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1>
              Hey there. I'm{' '}
              <span className='text-green-100'>{author.name}</span>
            </h1>
            <div className='prose lg:prose-xl text-white'>
              <BlockContent
                blocks={author.bio}
                projectId='krcob0sy'
                dataset='production'
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
