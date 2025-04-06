"use client";
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className='player-wrapper h-auto'>
      <ReactPlayer
        playing={true}
        muted={true}
        className='react-player'
        url={url}
        width='100%'
        height='100%'
        controls={false}
        loop
      />
    </div>
  )
}

export default VideoPlayer