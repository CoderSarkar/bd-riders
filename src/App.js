import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router';
import NotFound from './components/NotFound/notFound';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
 
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/destination/:id">
            <Destination></Destination>
          </PrivateRoute>

          <PrivateRoute path="/details/:id">
            <Search></Search>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
