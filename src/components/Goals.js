import { h } from 'preact'
import Goal from './Goal'
import MetaTags from 'react-meta-tags'

const unity = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/flags.png";
const light = "https://res.cloudinary.com/awaken/image/upload/v1548582652/allawaken/light.jpg";
const system = "https://res.cloudinary.com/awaken/image/upload/v1548582652/allawaken/thesystem.jpg";

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

const Goals = () => (
  <div className="wrap">
    <MetaTags>
        <title>All Awaken - Goals</title>
        <meta name="description" content="Our main goals are to unite all activists, reveal the truth and change the system." />
        <meta property="og:title" content="All Awaken - Goals" />
        <meta property="og:description" content="Our main goals are to unite all activists, reveal the truth and change the system." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/goals" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/4795.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <h2 className="ideas_title">Goals</h2>
      <div className="goals">
        <Goal image={unity} linkid="/goals/united-activists" color={primaryGreen} title="Unite all activists" desc="Unite all likeminded people around the world who are fighting to change the system." />
        <Goal image={light} linkid="/goals/revealing-truth" color={primaryYellow} title="Revealing the truth" desc="Recongizing the problem is the first step." />
        <Goal image={system} linkid="/goals/system-change" color={primaryRed} title="Change the system" desc="Enough of the injustice and pain" />
      </div>
    </div>
  </div>
);

export default Goals
