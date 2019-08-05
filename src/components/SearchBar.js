import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    // Use Arrow function instead of .bind(this) for each method
    // Update searchTerm state for all components on change 
    handleChange = (e) => this.setState({searchTerm: e.target.value})
    // Destructuring
    handleSubmit= (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
    }
    render(){
        return(
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;