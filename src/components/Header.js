import { h } from 'preact';
import { SocialIcon } from 'react-social-icons'

const logo = "https://res.cloudinary.com/awaken/image/upload/w_47,h_47,f_auto/v1549100793/portal/logo.webp";

function mobilemenu() {
  var x = document.getElementById("nav");
  var y = document.getElementById("ham");
  y.classList.toggle("change");
  if (x.style.opacity === "1") {
    x.style.opacity = "0";
    x.style.top = "-350px";
  } else {
    x.style.top = "64px";
    x.style.opacity = "1";
  }
}

const Header = () => (
  <header className="header">
    <div style="display:flex; align-items: center;">
      <a href="/" className="piclogo" style={{ backgroundImage : `url(${logo})` }}></a>
      <a href="/" className="logo text-display-1" style="margin-right: 20px;">All Awaken</a>
    </div>
    <div id="ham" class="container" onClick={mobilemenu}>
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <nav className="nav">
      <ul>
        <li>
          <a href="https://www.portal.allawaken.com" className="text-subhead">All Awaken Portal</a>
        </li>
        <li>
          <a href="/current-situation" className="text-subhead">Current Situation</a>
        </li>
        <li>
          <a href="/the-system" className="text-subhead">The System</a>
        </li>
        <li>
          <a href="/proof" className="text-subhead">Proof</a>
        </li>
        <li>
          <a href="/awaken" className="text-subhead">Awaken</a>
        </li>
        <li>
          <a href="/goals" className="text-subhead">Goals</a>
        </li>
      </ul>
    </nav>
    <nav id="nav" className="nav nav2">
      <ul>
        <li>
          <a href="https://www.portal.allawaken.com" className="text-subhead">All Awaken Portal</a>
        </li>
        <li>
          <a href="/current-situation" className="text-subhead" onClick={mobilemenu}>Current Situation</a>
        </li>
        <li>
          <a href="/the-system" className="text-subhead" onClick={mobilemenu}>The System</a>
        </li>
        <li>
          <a href="/proof" className="text-subhead" onClick={mobilemenu}>Proof</a>
        </li>
        <li>
          <a href="/awaken" className="text-subhead" onClick={mobilemenu}>Awaken</a>
        </li>
        <li>
          <a href="/goals" className="text-subhead" onClick={mobilemenu}>Goals</a>
        </li>
      </ul>
    </nav>
    <div className="social">
      <SocialIcon className="social_icon" url="https://www.facebook.com/All-Awaken-249808002588980/" style={{ height: 30, width: 30 }} fgColor="#fff" bgColor="#202124" />
      <SocialIcon className="social_icon" url="https://www.instagram.com/allawaken" style={{ height: 30, width: 30 }} fgColor="#fff" bgColor="#202124" />
      <SocialIcon className="social_icon" url="https://twitter.com/all_awaken" style={{ height: 30, width: 30 }} fgColor="#fff" bgColor="#202124" />
    </div>
  </header>
);

export default Header;
