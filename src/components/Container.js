import React, {useEffect, useState} from 'react';
import VideoList from './VideoList';
import Video from './Video';
import YoutubeList from '../context/YoutubeList';
import {BrowserRouter, Route} from 'react-router-dom';

const Container = () => {
    const [data, setData] = useState([])

    // Get data on first load
    useEffect(() => {
        const url = './data/data.json';
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            setData(data);
            console.log('Checkout this JSON! ', data);
        })
        .catch(err => { throw err });
    }, [])

    return (
        <YoutubeList.Provider value={data}>
            <BrowserRouter>
                <div className="grid">
                    <Route path="/" component={VideoList} exact={true}/>
                    <Route path="/video/:id" component={Video} />
                </div>
            </BrowserRouter>
        </YoutubeList.Provider>
    )
}

export default Container;