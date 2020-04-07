import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import Root from './Root';
import setAuthToken from 'utils/setAuthToken';

// Routes
import Routes from 'components/routing/Routes';

// Components
import ScrollToTop from 'containers/ScrollToTop/ScrollToTop'
import Landing from 'components/landing/Landing';
import Navbar from 'components/layout/Navbar/Navbar';
import Footer from 'components/layout/Footer/Footer';
import Alert from 'components/layout/Alert';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  return (
    <Root>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="alert-container">
          <Alert />
        </div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
        <Footer />
      </Router>
    </Root>
  );
};

export default App;
