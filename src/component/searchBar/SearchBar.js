import React from 'react';

class SearchBar extends React.Component{
    state = {term : ''};

    onChangeInput = (e)=>{
        this.setState({term: e.target.value})
    }

    OnFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term)
    }
    render(){
        return (
            <div className="Search-Bar ui segment">
                <div className="ui large icon input">
                    <form onSubmit={this.OnFormSubmit} className="ui form">
                        <label>Search</label>
                        <input type="text" placeholder="Search large..."
                         value={this.state.term} 
                        onChange={this.onChangeInput}/>
                    </form>
                </div>
            </div>
        );
    }
}
export default SearchBar;