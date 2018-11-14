import React, {Component} from 'react';
import { SearchBar } from '../SearchBar';
import { SearchResults } from '../SearchResults'
import './Root.css'
import mockData from '../mockData/mockData';

export class Root extends Component{
    state = {
        searchValue: '',
        searchResults: []
    }

    handleChange = (event) => {
        this.setState({
            searchValue: event.target.value
            })
        };

    handleSearchClick = (event) => {
        event.preventDefault();
        const { searchValue } = this.state;
        const data = mockData.filter(tem => tem.strCategory === searchValue);
        this.setState({
            searchResults: data
            })
        };

    render(){
        const searchResults = this.state;
        return( 
        <div>
            <h2>Search Recipes</h2>
            <SearchBar handleSearchClick={this.handleSearchClick} handleChange={this.handleChange} />
            <SearchResults data={searchResults} />
        </div>

        );
    }
    
}
    