import React from "react";
import robots from "./robots";
import SearchBox from './SearchBox';
import CardList from "./CardList";

const App = () => {

    return (
        <div className='tc'>
            <h1>Robo Friends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    );
}

export default App;

