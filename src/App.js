import React from 'react';
// Multiple Exports
import { Grid } from '@material-ui/core';
// Default Export
import youtube from './api/youtube';
import { SearchBar, VideoDetail } from './components'


// Created React Class Based Component - Other is function component
class App extends React.Component {
    // Async as it fetches from YoutubeAPI
    state = {
        video: [],
        selectedVideo: null,
    }
    
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: '[API_KEY]',
                q: searchTerm,
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    }
    render() {
        const {selectedVideo} = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

// Dummy function based components
// const App = () => {
//     return (<h1>Youtube Test</h1>)
// }
export default App;