import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCebe45gBhsjqE7hLjl73VI4BdJ8dOj4rs';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'Led Zeppelin'}, (videos) => {
      this.setState({videos});
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
