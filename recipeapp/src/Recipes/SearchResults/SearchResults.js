import React, {Component} from 'react';

export class SearchResults extends Component {
    constructor(props){
        super(props);
        this.state={
            strCategory: props.data.searchResults.strCategory,
            strCategoryThumb: props.data.searchResults.strCategoryThumb,
            strCategoryDescription: props.data.searchResults.strCategoryDescription,
        }
    }

    populateTable = () => {
        const category = this.props.data.searchResults.length > 0 &&  this.props.data.searchResults !== ''?this.props.data.searchResults[0]['strCategory']: 'No props';
        const thumb = this.props.data.searchResults.length > 0 &&  this.props.data.searchResults !== ''?this.props.data.searchResults[0]['strCategoryThumb']: 'No props'
        const description = this.props.data.searchResults.length > 0 &&  this.props.data.searchResults !== ''?this.props.data.searchResults[0]['strCategoryDescription']: 'No props'
        this.setState({
            strCategory: category,
            strCategoryThumb: thumb,
            strCategoryDescription: description
                
            }, () => {console.log(this.state)})
    }
    
    render(){
        console.log('>>>>', this.state)
        return(
            <div className="searchResults">
            <table>
                <tr>
                    <th>Meal Category</th>
                    <th>Meal Picture</th> 
                    <th>Meal Description</th>
                </tr>
                
            
                <tr>
                {this.populateTable}
                    <td>{this.state.strCategory}</td>
                    <td>{this.state.strCategoryThumb}</td> 
                    <td>{this.state.strCategoryDescription}</td>
                </tr>
            </table>
            <button onClick={this.populateTable}>
                me
            </button>
                
            </div>
        );

    }
}


