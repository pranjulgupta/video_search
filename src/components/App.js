import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './searchBar'
import youtube from '../api/youtube'
import VideoList from './videolist'
import VideoDetail from './videodetail'
class App extends React.Component{
    state={videos:[],selectedvideo:null}
    componentDidMount(){
        this.onTermSubmit('news');
    }
    onTermSubmit=async term=>{
     
      const response= await youtube.get('/search',{
            params:{
                q:term
            }
        })
        this.setState({videos:response.data.items,
        selectedvideo:response.data.items[0]})
        console.log("response data",response.data);
        
    }

    OnVideoSelect=video=>{
        console.log("video",video);
this.setState({selectedvideo:video})        
    }
    render()
    {
        return(
            <div className="ui container">
            <Searchbar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedvideo}/>
            </div>
            <div className="five wide column">
         <VideoList 
         OnVideoSelect={this.OnVideoSelect} 
         videos={this.state.videos}/>
            </div>
            </div>
            </div>
            </div>
            

        )
    }
}
export default App;