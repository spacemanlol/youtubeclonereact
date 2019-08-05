import React from 'react';
// Multiple Exports
import { Grid } from '@material-ui/core';
// Default Export
import youtube from './api/youtube';
import { SearchBar, VideoDetail } from './components'


// Created React Class Based Component - Other is function component
class App extends React.Component {
    // Async as it fetches from YoutubeAPI
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search');
    }
    render() {
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
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