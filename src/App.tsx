import React, { FC, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import AuthContext from './context/AuthContext';

const App: FC = () => {
  const { isLogin } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {
          isLogin ?
            <Route exact path="/" component={Home} />
            : <Redirect to="/login" />
        }
      </Switch>
    </Router>
  );
}

export default App;
