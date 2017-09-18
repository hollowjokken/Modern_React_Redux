import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state={values: [] };

        this.onInputChange=this.onInputChange.bind(this)
    }

    render () {
        return (
            <div>
                <input
                    placeholder={this.state.values}
                    onChange={this.onInputChange}
                />
                <p>
                {this.state.values}
                </p>
            </div>
        );
    }

    onInputChange(event){
        this.setState({values: event.target.value});
          //console.log(event.target.value);
    }

}
export default SearchBar;