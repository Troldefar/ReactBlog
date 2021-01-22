import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Create from './components/Blog/CreateBlog/CreateBlog';
import ViewBlog from './components/Blog/ViewBlog/ViewBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <ViewBlog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
