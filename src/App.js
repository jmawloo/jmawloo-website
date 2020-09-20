import React from 'react';
import MsgBox from './components/MsgBox/MsgBox';
import ContactBox from './components/ContactBox/ContactBox';
import './App.scss';
import landingCopy from './static/copy/landing-page.json';

import DesktopProfile from './static/img/desktop-profile.jpg';
import MobileProfile from './static/img/mobile-profile.png';

function App() {
  return (
    <div className="App">
      <MsgBox id="landing-message" landCopy={landingCopy} />
      <div id="landing-bottom">
        <ContactBox />
        <img className="content-box profile desktop-profile" src={DesktopProfile} alt="Me pointing top-left to my introduction message." />
        <img className="content-box profile mobile-profile" src={MobileProfile} alt="Me pointing up to my introduction message." />
      </div>
    </div>
  );
}

export default App;
