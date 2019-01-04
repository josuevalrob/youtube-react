import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
import { Grid, Container } from 'semantic-ui-react'


import 'semantic-ui-css/semantic.min.css'

class App extends React.Component {

  state = {videos : [], selectedVideo: null };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params : {
        q: term
      }
    });
    this.setState ({
      videos:response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onVideoSelected = (video) => {
    // console.log(video);
    this.setState({selectedVideo: video});
  }

  componentDidMount (){
    this.onTermSubmit('buildings')
  }

  render(){
    return (
      <Container>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={11}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column width={5}>
              <VideoList
                onVideoSelected={this.onVideoSelected}
                videos={this.state.videos}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default App;
