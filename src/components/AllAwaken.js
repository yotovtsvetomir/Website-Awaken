import { h } from 'preact'
import Awaken from './Awaken'
import MetaTags from 'react-meta-tags'

const allawaken = "https://res.cloudinary.com/awaken/image/upload/v1548582649/portal/avatar.webp";
const change = "https://res.cloudinary.com/awaken/image/upload/v1548582653/allawaken/plan.jpg";
const freedom = "https://res.cloudinary.com/awaken/image/upload/v1548582650/allawaken/code.jpg";
const jjoin = "https://res.cloudinary.com/awaken/image/upload/v1548582652/allawaken/joinn.jpg";

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

const AllAwaken = () => (
  <div className="wrap">
    <MetaTags>
        <title>All Awaken - Vision and Mission</title>
        <meta name="description" content="Learn more about who we are, what is the plan, what is our code and how to join us." />
        <meta property="og:title" content="All Awaken - Vision and Mission" />
        <meta property="og:description" content="Learn more about who we are, what is the plan, what is our code and how to join us." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/awaken" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/4795.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <h2 className="ideas_title"></h2>
      <div className="awakens">
        <div className="awaholder">
          <Awaken image={allawaken} linkid="/awaken/whoweare" title="Who we are" color={primaryBlue} />
        </div>
        <div className="awaholder">
          <Awaken image={change} linkid="/awaken/theplan" title="The Plan" color={primaryYellow} />
        </div>
        <div className="awaholder">
          <Awaken image={freedom} linkid="/awaken/code" title="Code" color={primaryRed} />
        </div>
        <div className="awaholder">
          <Awaken image={jjoin} linkid="/awaken/join" title="Join" color={primaryGreen} />
        </div>
      </div>
    </div>
  </div>
);

export default AllAwaken
