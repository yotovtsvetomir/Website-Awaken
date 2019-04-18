import { h } from 'preact'
import Idea from './Idea'
import MetaTags from 'react-meta-tags'

const ws = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582650/allawaken/cs.jpg";
const env = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582651/allawaken/env.jpg";
const lies = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582652/allawaken/lies.jpg";
const war = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582654/allawaken/war.jpg";
const poverty = "https://res.cloudinary.com/awaken/image/upload/w_500,h_500,f_auto/v1548582653/allawaken/poverty.jpg";

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

const CurrentSituation = () => (
  <div className="ideas">
    <MetaTags>
        <title>Current Situation in the system</title>
        <meta name="description" content="Learn more about Wage Slavery, Environment, Media Manipulation, War and Poverty worldwide." />
        <meta property="og:title" content="Current Situation in the system" />
        <meta property="og:description" content="Learn more about Wage Slavery, Environment, Media Manipulation, War and Poverty worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/current_situation" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/blacklogo.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <h2 className="ideas_title">Current Situation</h2>
      <div className="ideas_container">
        <Idea image={ws} color={primaryRed} linkid="/current-situation/wage-slavery" title="Wage Slavery" />
        <Idea image={env} color={primaryYellow} linkid="/current-situation/environment" title="Environment" />
        <Idea image={lies} color={primaryGreen} linkid="/current-situation/media" title="Media" />
      </div>
      <div className="ideas_container2">
        <Idea image={war} color={blueGrey} linkid="/current-situation/war" title="War" />
        <Idea image={poverty} color={primaryBlue} linkid="/current-situation/poverty" title="Poverty" />
      </div>
    </div>
  </div>
);

export default CurrentSituation
