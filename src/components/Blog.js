import React from 'react'
import YouTube from 'react-youtube';
import { useParams } from 'react-router'

export default function Blog( {data} ) {
  const params = useParams();
  const post = data.posts.find(dataItem => dataItem.id === params.id)
  const youtubeID = post.url.split("v=")[1]

  const onReady = e => {
    console.log(e.target)
  }

  return (
    <div className="blog">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="player">
        <YouTube videoId={youtubeID} onReady={onReady}/>
      </div>
    </div>
  )
}
