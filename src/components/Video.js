import React from 'react';
import RelatedVideos from './RelatedVideos';
import {Link} from 'react-router-dom';

const Video = (props) => {
    return (
        <React.Fragment>
            <div className="video-wrapper">
            
            <iframe src={`https://www.youtube.com/embed/${props.match.params.id}`}></iframe>
            <h2>Related Videos</h2>
            <Link to="/" exact="true">Back to home</Link>
            <hr />
            </div>
            <RelatedVideos category={props.history.location.search.substring(1)} videoid={props.match.params.id} />
        </React.Fragment>
    )
}

export default Video;