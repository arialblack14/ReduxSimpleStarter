import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAbAAomS9Pxa8qrwvVwhlo709ZNgUoFPsk';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = { videos: [] };
    
    // Call youtube api
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Render to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
