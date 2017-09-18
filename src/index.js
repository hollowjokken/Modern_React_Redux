/**
 * Created by norbertronai on 07-Aug-17.
 */
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList'
import SearchBar from './components/searchBar';

const API_KEY= 'AIzaSyBOyONDiHgdGHtXSVxyTYzAqU9935BVxuE';

// YTSearch({key: API_KEY, term: 'surfboard'}, function (data) {
//     console.log(data);
//
// });

class App extends Component  {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboard'}, function (videos) {
            console.log("videos:", videos);

            this.setState({videos});
            console.log("this.state:", this.state);
            console.log("this.state.video:" , this.state.videos);
        });
    }

    render() {
        console.log("this.state:", this.state);
        return (
            <div>
                <p>ASD</p>
                <SearchBar />
                <VideoList videos={this.state}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
//Take this component's generated HTML and    put it on the page (in the DOM)