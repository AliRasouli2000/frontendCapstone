import React from 'react'

export const Video = ({courseData}) => {

  const data = courseData.video

  return (
        <div className="video-container">
          <iframe 
            className="youtube-embed"
        src={`https://www.youtube.com/embed/${data.youtubeId}`}
            title={data.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          />
    </div>
  )
}
