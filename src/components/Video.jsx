// import React from 'react'
// import { abbreviateNumber } from 'js-abbreviation-number'
// import { Link } from 'react-router-dom'
// import { BsFillCheckCircleFill } from 'react-icons/bs'

// const Video = ({video}) => {
//   return (
//     <Link to={`/video/${video?.videoId}`}>
//     <div className='flex flex-col mb-8'>
//       <div className='relative h-48 md:h-56 md:rounded-lg overflow-hidden '>
//          <img 
//           className='h-full w-96 object-cover'
//           src={video?.thumbnails?.[0]?.url} 
//         />
//       </div>
//     </div>
//   </Link>
//   );

// }

// export default Video
import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import VideoLength from '../shared/videoLength';

const Video = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-56 md:h-56 lg:h-56 overflow-hidden'>
          <img 
            className='h-full w-full object-cover md:rounded-xl'
            src={video?.thumbnails?.[0]?.url}
            alt='Video Thumbnail'
          />
          {video?.lengthSeconds && (
             <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className='mt-3 flex text-white'>
           <div className='flex items-start'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
               <img 
                 className='h-full w-full object-cover'
                 src={video?.author?.avatar[0]?.url} />
            </div>
           </div>
           <div className='flex flex-col ml-3 overflow-hidden'>
              <span className='text-[15px] font-semibold line-clamp-2'>
                {video?.title}
              </span>
              <span className='text-[12px] font-semibold text-slate-300 mt-2 flex items-center'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className='text-blue-500 text-[13px] font-bold ml-1' />
                )}
              </span>
              <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
                 <span>{`${abbreviateNumber(video?.stats?.views, 2)}views`}</span>
                 <span className='flex text-[24px] font-bold leading-none relative top-[-10px] mx-1 text-white/[0.7]'>.</span>
                 <span className='truncate'>{video?.publishedTimeText}</span>
              </div>
           </div>
        </div>
      </div>
    </Link>
  );
}

export default Video;
