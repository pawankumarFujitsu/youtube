import React from 'react';
import SearchBar from './searchBar/SearchBar';
import youtube  from '../api/youtube';
import VideoFrame from './videoList/VideoFrame';
import VideoDetails from './videoList/VideoDetails';

const KEY = 'XXXX-XXXX-XXXX-XXXX-XXXX-222xx';

class App extends React.Component{
    state = {video :[],selectedVideo : null}
    onTermSubmit = async(term) =>{
        console.log(term)
        const response = await youtube.get("/search",{
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: KEY
            }
        });
        this.setState(
            {
                video : response.data.items,
                selectedVideo : response.data.items[0]
            });
    }

    onVideoSelect = (vedio)=>{
        console.log('hi',vedio)
        this.setState({selectedVideo : vedio});
    }
    render(){
        return (
        <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit}/>
            i have {this.state.video.length}
            <VideoDetails videoTitles={this.state.selectedVideo}/>
            <VideoFrame onVideoSelect={this.onVideoSelect} videos = {this.state.video}/>
        </div>);
    }
}

export default App;