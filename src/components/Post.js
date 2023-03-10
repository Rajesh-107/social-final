import { ChatBubbleOvalLeftIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

const Post = ({name, message, img, title , timeDate,postImage, email}) => {
    return (
        <div className='flex flex-col'>
           <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={img} width={40} height={40} />
          <div>
            <p className="font-medium">{name}</p>
            {timeDate ? (
              <p className="text-xs text-gray-400">
                {timeDate}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>
            
            {
                postImage && (
                    
                    <div>
                        <div className='relative h-56 md:h-96 bg-white'>
                        
                        <Image 
                        className='p-5'
                        src={postImage}
                        objectFit='cover'
                        layout='fill'
                        />
                    </div>
                    </div>
                )
            }
            <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon p-3 rounded-none rounded-bl-2xl">
          <HandThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon p-3 rounded-none">
          <ChatBubbleOvalLeftIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon p-3 rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
        <div className="inputIcon p-3 rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Add Cart</p>
        </div>
      </div>
        </div>
    );
};

export default Post;