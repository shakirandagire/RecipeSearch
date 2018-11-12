import React, {Component} from 'react';
import { SearchBar } from '../SearchBar';
import './Root.css';

export class Root extends Component {
    render(){
        return(
            <div>
                <h2>Search Recipes</h2>
                <SearchBar/>
            </div>

        );
    }
}
