import React, {Component} from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);
  }

  onVideoSelect(video) {
    this.props.onVideoSelect(video);
  }

  render() {

    const imgUrl = this.props.video.snippet.thumbnails.default.url;

    return(
      <li className="list-group-item"  onClick={() => this.onVideoSelect(this.props.video)}>
        <div className="video-list-media">
          <div className="media-left">
            <img className="media-object" src={imgUrl} />
          </div>

          <div className="media-body">
            <div className="media-heading">
              <div>{this.props.video.snippet.title}</div>
            </div>
          </div>

        </div>
      </li>
    )
  }
}

export default VideoListItem;
