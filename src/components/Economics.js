import { h } from 'preact'
import { Link } from 'preact-router/match';
import style from './Sysarticle.css'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const economics = "https://res.cloudinary.com/awaken/image/upload/w_400,h_400,f_auto/v1548582651/allawaken/economics.jpg";
const debt = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/ndebt.jpg";
const bis = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/bis.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Economics = () => (
  <div className="sysarticle">
    <MetaTags>
      <title>The truth about world economy</title>
      <meta name="description" content="Every single country has a national debt. The strongest economies have the largest debt. Who do they owe to?" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="Every single country has a national debt. The strongest economies have the largest debt. Who do they owe to?" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.allawaken.com/the_system/economics" />
      <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/economics.jpg" />
      <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className={style.sysarticle_sidebar}>
      <img className={style.sidebar_image} src={economics} />
      <h1 className={style.sysarticle_title}>Economics</h1>
      <p className={style.sidebar_desc}>Every single country has a national debt. The strongest economies have the largest debt. Who do they owe to?</p>
    </div>
    <div className={style.sysarticle_content}>
      <div className={style.sysarticle_par}>
        <img className={style.sysarticle_image} src={debt}/>
        <h1 className="text-display-1">The Impossible Economy</h1>
        <p>The stronger the country's economy the more debt they have.</p>
        <div className="sysarticle_actions">
          <a href="https://www.portal.allawaken.com" className="button btn-yellow">Dive in</a>
        </div>
      </div>
      <div className={style.sysarticle_par}>
        <img className={style.sysarticle_image} src={bis}/>
        <h1 className="text-display-1">The Bank for Central Banks</h1>
        <p>The BIS - "Bank of internation settlements" is controlling and deciding the economic policies of every country in the world. Deciding which country will receive what debt at what price, keeping everyone owing.</p>
        <div className="sysarticle_actions">
          <a href="https://www.portal.allawaken.com" className="button">Dive in</a>
        </div>
      </div>
    </div>
  </div>
);

export default Economics;
