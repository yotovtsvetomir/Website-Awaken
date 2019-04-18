import { h } from 'preact'
import Syscard from './Syscard'
import MetaTags from 'react-meta-tags'

const economics = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/economics.jpg";
const politics = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/politics.jpg";
const media = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/media.jpg";
const education = "https://res.cloudinary.com/awaken/image/upload/w_350,h_200,f_auto/v1548582649/allawaken/education.jpg";

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

const TheSystem = () => (
  <div className="wrap">
    <MetaTags>
      <title>How the world system works?</title>
      <meta name="description" content="The world system is everwhere and it is the same for each and everyone of us. It is built on 4 major parts - they are economics, politics, media and education. This system unites 99% of the population on Earth." />
      <meta property="og:title" content="How the world system works?" />
      <meta property="og:description" content="The world system is everwhere and it is the same for each and everyone of us. It is built on 4 major parts - they are economics, politics, media and education. This system unites 99% of the population on Earth." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.allawaken.com/the_system" />
      <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/blacklogo.jpg" />
      <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <h2 className="ideas_title">The System</h2>
      <h5 className="text-headline sysubtitle">The world system is everwhere and it is the same for each and everyone of us. It is built on 4 major parts - they are economics, politics, media and education. This system unites 99% of the population on Earth.</h5>
      <div className="syscards">
        <div className="sysholder">
          <Syscard img={economics} secolor={secondaryRed} color={primaryRed} linkid="/the-system/economics" title="Economics" desc="Every single country has a national debt. The strongest economies have the largest debt. Who do they owe to?" />
        </div>
        <div className="sysholder">
          <Syscard img={politics} secolor={secondaryBlue} color={primaryBlue} linkid="/the-system/politics" title="Politics" desc="All politicians, leaders and corporate CEOs are just puppets to the real rulers who are pulling the strings from behind the scene." />
        </div>
        <div className="sysholder">
          <Syscard img={media} secolor={secondaryYellow} color={primaryYellow} linkid="/the-system/media" title="Media" desc="Billions of things happen every day. How do they choose exactly which to show to the public?" />
        </div>
        <div className="sysholder">
          <Syscard img={education} secolor={secondaryGreen} color={primaryGreen} linkid="/the-system/education" title="Education" desc="The education system hasn't changed for more than 400 years. He who opens a school door, closes a prison - Victor Hugo." />
        </div>
      </div>
    </div>
  </div>
);

export default TheSystem
