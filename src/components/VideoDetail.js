import React from 'react';
import { Dimmer, Loader, Segment, Header, Embed } from 'semantic-ui-react'


const VideoDetail = ({video}) => {
// console.log(video);
  if (!video){
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </Segment>
    )
  }
return (
  <div>
    <Embed id={video.id.videoId} title={video.snippet.title} placeholder={video.snippet.thumbnails.default.url} source='youtube' />
    <Segment>
      <Header size = "medium">{video.snippet.title}</Header>
        <p>{video.snippet.description}</p>
    </Segment>
  </div>
)
}

export default VideoDetail;
