import { h } from 'preact'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const poverty = "https://res.cloudinary.com/awaken/image/upload/w_1000,h_400,f_auto/v1548582651/allawaken/poverty.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Poverty = () => (
  <div className="shell">
    <MetaTags>
        <title>Why there is so much poverty in the world?</title>
        <meta name="description" content="There are 7.4 billion people on earth, 1.1 billion children do not have food, clean water or they are forced to work from the age of 5." />
        <meta property="og:title" content="Why there is so much poverty in the world?" />
        <meta property="og:description" content="There are 7.4 billion people on earth, 1.1 billion children do not have food, clean water or they are forced to work from the age of 5." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/current_situation/poverty" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/poverty.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="article">
      <h1 className="ideas_title">Poverty</h1>
      <div className="article_content">
        <div className="article_decor" style={{ background: `${primaryBlue}` }}></div>
        <div className="article_decor2" style={{ background: `${primaryBlue}` }}></div>
        <img className="article_image" src={poverty} />
        <div className="article_text">
          <h3 className="text-headline">There are 7.4 billion people on earth, 1.1 billion children don't have food, clean water or they are forced to work from the age of 5.</h3>
          <p>Welcome to the real world, not the one the media sells to you.</p>
        </div>
      </div>
      <h1 className="ideas_title">Videos</h1>
      <div className="videos">
        <div className="videoholder">
          <Video color={primaryBlue} title="Statistics" linkid="https://www.youtube.com/embed/zwIEZDMDBo4"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} title="What is important?" linkid="https://www.youtube.com/embed/-9pNeT55U_c"/>
        </div>
      </div>
    </div>
  </div>
);

export default Poverty;
