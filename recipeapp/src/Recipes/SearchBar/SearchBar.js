import React,{Component} from 'react';
import './SearchBar.css'

export class SearchBar extends Component {
    
    render(){
        const { handleSearchClick, handleChange } = this.props;
        return(
            <div className="searchBar">
                <input type="text" className = "searchInput" onChange={handleChange}/>
                <input type="submit" className = "searchButton" onClick={handleSearchClick}/>
            </div>
        );
    }
}

