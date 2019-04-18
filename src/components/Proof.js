import { h } from 'preact'
import { Link } from 'preact-router/match';
import Video from './Video'
import MetaTags from 'react-meta-tags'

const primaryRed = "#e53935";
const secondaryRed = "#ffebee";

const primaryBlue = "#1e88e5";
const secondaryBlue = "#bbdefb";

const primaryGreen = "#43a047";
const secondaryGreen = "#e8f5e9";

const primaryYellow = "#fbc02d";
const secondaryYellow = "#fffde7";

const primaryGrey = "#eee";
const primaryWhite = "#fff";
const blueGrey = "#202124";

const intro = require('./images/intro.jpg');

const Proof = () => (
    <div className="shell">
      <MetaTags>
        <title>All Awaken - revealing the truth</title>
        <meta name="description" content="These videos are covering the most important points and prove them with facts. Those are educational videos about Economics, Politics, History, Education and important world views." />
        <meta property="og:title" content="All Awaken - revealing the truth" />
        <meta property="og:description" content="These videos are covering the most important points and prove them with facts. Those are educational videos about Economics, Politics, History, Education and important world views." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/proof" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/4795.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
      </MetaTags>
      <h2 className="ideas_title">Proof</h2>
      <p className="proof_subhead">These videos are covering the most important points and prove them with facts. Those are educational videos about Economics, Politics, History, Education and important world views.</p>
      <div className="proof_actions">
        <Link className="proof_button" href="/proof/docs">Official documents</Link>
      </div>
      <div className="videos">
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Wage slavery" linkid="https://www.youtube.com/embed/rg7EF90Aaw8"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="Global economy" linkid="https://www.youtube.com/embed/iFDe5kUUyT0"/>
        </div>
        <div className="videoholder">
          <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="The truth" linkid="https://www.youtube.com/embed/bIFFD03Evi4"/>
        </div>
        <div className="videoholder">
          <Video color={primaryGreen} linkid2="rg7EF90Aaw8" title="Dear future generations" linkid="https://www.youtube.com/embed/7X9v8byYibY"/>
        </div>
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Think again" linkid="https://www.youtube.com/embed/1ZidbzAtUDo"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="Who are the Elites?" linkid="https://www.youtube.com/embed/RO0S6j2Zsqo"/>
        </div>
        <div className="videoholder">
          <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="How do the Elites operate?" linkid="https://www.youtube.com/embed/qUjpBS3qaDY"/>
        </div>
        <div className="videoholder">
          <Video color={primaryGreen} linkid2="rg7EF90Aaw8" title="What about technology?" linkid="https://www.youtube.com/embed/d6e1riShmak"/>
        </div>
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Shifting world" linkid="https://www.youtube.com/embed/gGKogwbO240"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="History is a lie" linkid="https://www.youtube.com/embed/mQUhJTxK5mA"/>
        </div>
        <div className="videoholder">
          <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="All wars are bankers wars" linkid="https://www.youtube.com/embed/5hfEBupAeo4"/>
        </div>
        <div className="videoholder">
          <Video color={primaryGreen} linkid2="rg7EF90Aaw8" title="What have we done?" linkid="https://www.youtube.com/embed/zwIEZDMDBo4"/>
        </div>
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Revolution thoughts" linkid="https://www.youtube.com/embed/COl-rPT203w"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="We must fight for justice" linkid="https://www.youtube.com/embed/9yA24CM8gYg"/>
        </div>
        <div className="videoholder">
          <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="What is possible?" linkid="https://www.youtube.com/embed/Yb5ivvcTvRQ"/>
        </div>
        <div className="videoholder">
          <Video color={primaryGreen} linkid2="rg7EF90Aaw8" title="The story of enslavement" linkid="https://www.youtube.com/embed/Xbp6umQT58A"/>
        </div>
      </div>
    </div>
);

export default Proof
