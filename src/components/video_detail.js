import React, {Component} from 'react';

class VideoDetail extends Component{
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.video) {
      return(
        <div>
          Loading...
        </div>
      )
    }

    const videoId = this.props.video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return(
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9" style={{marginTop:'20px'}}>
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
        </div>
      </div>
    )
  }
}

export default VideoDetail;
