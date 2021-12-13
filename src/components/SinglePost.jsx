import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const { slug } = useParams();
  const [singlePost, setSinglePost] = useState('');

  useEffect(() => {
    try {
      const imageFetch = async () => {
        const data = await sanityClient.fetch(`*[slug.current == '${slug}']{
          title, 
          _id,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          'name': author->name,
          'authorImage' : author->image
        }`);
        setSinglePost(data[0]);
      };
      imageFetch();
    } catch (error) {
      console.log(error.message);
    }
  }, [slug]);

  if (!singlePost) return <div>Loading . . .</div>;

  return (
    <main className='bg-gray-200 min-h-screen p12'>
      <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
        <header className='relative'>
          <div className='absolute h-full w-full items-center justify-center p-8'>
            <div className='bg-white bg-opacity-75 rounded p-12'>
              <h1 className='cursive text-3xl lg:text-6xl mb-4'>
                {singlePost.title}
              </h1>
              <div className='flex justify-center text-gray-800'>
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className='w-10 h-10 rounded-full'
                />
                <p className='cursive flex items-center pl-2 text-2xl'>
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            style={{ height: '400px' }}
            className='w-full object-cover rounded-t'
          />
        </header>
        <div className='px-16 lg:px-12 prose lg:prose-xl max-w-full'>
          <BlockContent
            blocks={singlePost.body}
            projectId='krcob0sy'
            dataset='production'
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
