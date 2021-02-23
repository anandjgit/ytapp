import React, {useContext} from 'react';
import YoutubeList from '../context/YoutubeList';
import {Link} from 'react-router-dom';

const RelatedVideos = (props) => {
    const videoData = useContext(YoutubeList);
    console.log(props.videoid)
    return videoData.map((video) => {
            if(video.category === props.category && video.videoId !== props.videoid){
                return (     
                    <Link key={video.videoId} to={`/video/${video.videoId}?${video.category}`}>
                        <div className="grid__item">
                            <div className="card">
                                <img className="card__img" src={video.image} />
                                <div className="card__content">
                                    <h3 className="card__header">{video.title}</h3>
                                </div>
                                <div className="play__btn"></div>
                            </div>
                        </div>
                    </Link>
                    )
            }
        })
}

export default RelatedVideos;