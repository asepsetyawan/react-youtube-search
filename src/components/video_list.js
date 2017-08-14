import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    const list_video = this.props.videos.map((video) =>
      <VideoListItem
        onVideoSelect={this.props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );

    return(
      <div>
        <ul className="col-md-4 list-group" style={{marginTop:'20px'}}>
          {list_video}
        </ul>
      </div>
    )
  }
}

export default VideoList;
