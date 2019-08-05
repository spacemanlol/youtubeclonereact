import React from 'react';

import {Grid} from '@material-ui/core';

import VideoItem from './VideoItem'

// Map Array of videoItems
const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList;