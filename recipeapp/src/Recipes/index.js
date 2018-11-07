import React, {Component} from 'react';
import SearchBar from './SearchBar/SearchBar';
import '../Recipes/recipes.css'

class Recipes extends Component {
    render(){
        return(
            <div>
                <h2>Search Recipes</h2>
                <SearchBar/>
            </div>

        );
    }
}

export default Recipes
