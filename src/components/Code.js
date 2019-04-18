import { h } from 'preact'
import { Link } from 'preact-router/match';
import Video from './Video'
import style from './Awa.css';
import MetaTags from 'react-meta-tags'

const focus = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/focus.jpg";
const oneman = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/peace.jpg";
const yinyang = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/yinyang.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Illusion = () => (
  <div className="awa">
    <MetaTags>
        <title>All Awaken - Code</title>
        <meta name="description" content="We are creating content and sharing information which is useful for everyone worldwide." />
        <meta property="og:title" content="All Awaken - Code" />
        <meta property="og:description" content="We are creating content and sharing information which is useful for everyone worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/awaken/code" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/code.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <div className={style.awa_head} style={{ background: `${primaryRed}` }}>
        <h1 className={style.awa_title}>Code</h1>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={focus} />
        <div className={style.awa_content}>
          <p>We are creating content and sharing information which is useful for everyone worldwide.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryRed}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={oneman} />
        <div className={style.awa_content}>
          <p>We are fighting for freedom, defending the weak, standing for mother nature and supporting every cause that is helping to achieve change in the system peacefuly.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryRed}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={yinyang} />
        <div className={style.awa_content}>
          <p>We believe that everyone was borned with morals installed inside. Deep down everyone knows what is right or wrong, good or evil. </p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryRed}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Illusion;
