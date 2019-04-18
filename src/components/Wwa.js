import { h } from 'preact'
import { Link } from 'preact-router/match';
import Video from './Video'
import style from './Awa.css'
import MetaTags from 'react-meta-tags'

const wwaa = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/4795.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Wwa = () => (
  <div className="awa">
    <MetaTags>
        <title>All Awaken - Who we are?</title>
        <meta name="description" content="We are an idea, deeply caring for all human beings, the environment and the animals. We are fighting for justice, freedom, peace and equal chance for everyone." />
        <meta property="og:title" content="All Awaken - Who we are?" />
        <meta property="og:description" content="We are an idea, deeply caring for all human beings, the environment and the animals. We are fighting for justice, freedom, peace and equal chance for everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/awaken/whoweare" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/4795.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <div className={style.awa_head} style={{ background: `${primaryBlue}` }}>
        <h1 className={style.awa_title}>Who We Are</h1>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={wwaa} />
        <div className={style.awa_content}>
          <p>We are an idea, deeply caring for all human beings, the environment and the animals. We are fighting for justice, freedom, peace and equal chance for everyone. </p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryBlue}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={wwaa} />
        <div className={style.awa_content}>
          <p>All Awaken will cut the drama out. We will spread the truth about how the world works and stick to facts, documents and what is real.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryBlue}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={wwaa} />
        <div className={style.awa_content}>
          <p>We are going to focus on global matters that affect all the 99% of the world. We do not divide, we unite people, because the system is the same everywhere, no matter the country.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryBlue}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Wwa;
