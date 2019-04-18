import { h } from 'preact'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const lies = "https://res.cloudinary.com/awaken/image/upload/w_1000,h_400,f_auto/v1548582651/allawaken/lies.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Lies = () => (
  <div className="shell">
    <MetaTags>
        <title>Global media manipulation</title>
        <meta name="description" content="Billions of things happen every day. How do they choose exactly which to show to the public? How come all the different media companies to produce the same fake news?" />
        <meta property="og:title" content="Global media manipulation" />
        <meta property="og:description" content="Billions of things happen every day. How do they choose exactly which to show to the public? How come all the different media companies to produce the same fake news?" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/current_situation/media" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/env.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="article">
      <h1 className="ideas_title">Media manipulation</h1>
      <div className="article_content">
        <div className="article_decor" style={{ background: `${primaryGreen}` }}></div>
        <div className="article_decor2" style={{ background: `${primaryGreen}` }}></div>
        <img className="article_image" src={lies} />
        <div className="article_text">
          <h3 className="text-headline">Constant distraction with news which have no impact on our lives directly.</h3>
          <p>Billions of things happen every day. How do they choose exactly which to show to the public? How come all the different media companies to produce the same fake news?
          The main purpose of the media is to distract us from our real problems and force us to focus on what we can't actually change.
          </p>
        </div>
      </div>
      <h1 className="ideas_title">Videos</h1>
      <div className="videos">
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Manipulation techniques" linkid="https://www.youtube.com/embed/ZOwv_gytSOM"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="Same news - everywhere" linkid="https://www.youtube.com/embed/iZ6iDBiCRiQ"/>
        </div>
        <div className="videoholder">
          <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="How it began?" linkid="https://www.youtube.com/embed/dzJ08VfCE4U"/>
        </div>
        <div className="videoholder">
          <Video color={primaryGreen} linkid2="rg7EF90Aaw8" title="Patterns and methods" linkid="https://www.youtube.com/embed/JO8OGhEiX_Q"/>
        </div>
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Caught" linkid="https://www.youtube.com/embed/SLphQbgZx6A"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="Supression" linkid="https://www.youtube.com/embed/29VQ5L4eijc"/>
        </div>
      </div>
    </div>
  </div>
);

export default Lies;
