import React,{Component} from 'react';
import './SearchBar.css'

export class SearchBar extends Component {
    state = {
        searchValue: '',
    }
    handleChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }
    render(){
        return(
            <div className="searchBar">
                <input type="text" className = "searchInput" onChange={this.handleChange}/>
            </div>
        );
    }
}

