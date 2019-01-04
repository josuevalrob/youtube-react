import React from 'react';
import { List, Image } from 'semantic-ui-react'

const VideoItem = ({video, onVideoSelected}) => {
  return (
          <List>
            <List.Item as='a' onClick={()=>onVideoSelected(video)}>
              <Image alt={video.snippet.title} src={video.snippet.thumbnails.default.url} />
              <List.Content>
                <List.Header >{video.snippet.title} </List.Header>
              </List.Content>
            </List.Item>
          </List>
  );
}

export default VideoItem;
