import React, {Component} from 'react';
import VideoListItem from './videoListItem';


class VideoList extends Component () {
    constructor(props){
        super(props);


    }


    render() {
        return (
            <ul className="col-md-4 list-group">
                { props.videos.map( (video) =>
                    <VideoListItem  video={video}/>
                )}
            </ul>
        );
    }
}

export default VideoList;