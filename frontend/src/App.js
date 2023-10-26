import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import PublicStance from './components/PublicStance';
import Review from './components/Review';
import Rating from './components/Rating';
import Search from './components/Search';
import Filter from './components/Filter';
import Flag from './components/Flag';
import ModerationQueue from './components/ModerationQueue';
import PrivacyControls from './components/PrivacyControls';
import Accessibility from './components/Accessibility';
import UIUXDesign from './components/UIUXDesign';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/public-stance" component={PublicStance} />
        <Route path="/review" component={Review} />
        <Route path="/rating" component={Rating} />
        <Route path="/search" component={Search} />
        <Route path="/filter" component={Filter} />
        <Route path="/flag" component={Flag} />
        <Route path="/moderation-queue" component={ModerationQueue} />
        <Route path="/privacy-controls" component={PrivacyControls} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/ui-ux-design" component={UIUXDesign} />
        <Route path="/" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;