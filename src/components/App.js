import React, {Component} from 'react';
import Home from './Home.js';
import About from './About.js';
import Topics from './Topics.js';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
// BrowserRouter를 Router라고 renaming
//
//
//

class App extends Component {
  render = ()=>{  // return에는 하나의 div tag로 이뤄져야한다.
                  // Router을 불러옴. 
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr/>
            <Route exact path = "/" component={Home} />
            <Route path = '/about' component={About} />
            <Route path = '/topics' component={Topics} />
          </div>
        </Router> 
      </div>
    );
  }

};

export default App; // App을 기본으로 export함.


// App.js 와 여러 js 파일을 한꺼번에 보내고 싶다면, 
// index.js 파일을 생성하고 
// App.js와 다른 js파일을 import 하고
// 하나로 묶어 export함.
