import React from 'react'
import {Link, Route} from 'react-router-dom'
const Topic =({match}) => (
    <div>
      <h3>{match.params.id}</h3>
    </div>
);

const Topics =({match}) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><Link to={match.url+"/first"}>First</Link></li>
        <li><Link to={match.url+"/second"}>Second</Link></li>
        <li><Link to={match.url+"/third"}>Third</Link></li>
      </ul>
      <hr/>
      <Route exact path={match.url} component={Empty}/>
      <Route path={match.url+"/:id"} component={Topic}/>
    </div>
);

const Empty =() => (
    <div>
      <h3>Empty</h3>
    </div>
);

export default Topics
