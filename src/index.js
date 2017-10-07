import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDYgyXHG7AlrC1EYzM2PozXkWCoJ48jiA8';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'Man Utd'}, (videos) => {
            this.setState({videos});
        });
    }
    render(){
        return(
            <div>
                <SearchBar />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
