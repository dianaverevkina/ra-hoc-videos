import React from 'react'

export const Video = ({views, url}) => {
  return (
    <div className="item item-video">
        <iframe src={url} title='Card' allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <p className="views">Просмотров: {views}</p>
    </div>
  )
}
