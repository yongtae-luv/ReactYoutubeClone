import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDIBqV82lA9oYX7m4msNtplbUv4fYv08mw';

// Create a new component.  This component shold produce 
// some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos:[]};
    
    YTSearch({key:API_KEY, term:'surfboards'}, (videos) => {
      this.setState({videos});
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
       {console.log(this.state.videos)
       }
      </div>
    );
  }
}

// 이 컴포넌트가 만든 HTML을 가져가서 페이지에 반영한다. (자세하게는 DOM안에)
ReactDOM.render(<App/>, document.querySelector('.container'));