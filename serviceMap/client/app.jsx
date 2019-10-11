import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMap from './components/simpleMap.jsx';
import Search from './components/search.jsx';

// require('../public/serviceMap.css');
const mostCommonSearches=['tutor','nanny','dogwalker'];

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            location:{},
            keyword:''
        }
    }
    render(){
        return(
            <div id="map-outer-form">              
                  <Search commonSearches={mostCommonSearches} />               
               <div id="map-inner-container"><SimpleMap/></div>
            </div>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById('map-root'))