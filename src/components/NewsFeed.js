import React from 'react';
import InputBox from './InputBox';
import Stories from './Stories';

const NewsFeed = () => {
    return (
        <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 '>
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                
                {/* stories */}
                <Stories/>
                {/* InputBox */}
                <InputBox/>
                {/* Posts */}
            </div>
        </div>
    );
};

export default NewsFeed;