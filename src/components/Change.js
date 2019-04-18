import { h } from 'preact'
import { Link } from 'preact-router/match';
import Video from './Video'
import style from './Awa.css';
import MetaTags from 'react-meta-tags'

const change = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/change.jpg";
const changee = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/seeworld.jpg";
const share = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/share.jpg";
const checkmate = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/checkmate.jpg";


const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Change = () => (
  <div className="awa">
    <MetaTags>
        <title>All Awaken - The Plan</title>
        <meta name="description" content="We will create content which is easily understood by the masses, opening their eyes to their real situation and the main source of their problems." />
        <meta property="og:title" content="All Awaken - The Plan" />
        <meta property="og:description" content="We will create content which is easily understood by the masses, opening their eyes to their real situation and the main source of their problems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/awaken/theplan" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/plan.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <div className={style.awa_head} style={{ background: `${primaryYellow}` }}>
        <h1 className={style.awa_title}>The Plan</h1>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={changee} />
        <div className={style.awa_content}>
          <p>We will create content which is easily understood by the masses, opening their eyes to their real situation and the main source of their problems.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryYellow}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={share} />
        <div className={style.awa_content}>
          <p>Unite all activists and groups around the world who are fighting the same fight, helping them focus on what is truly important. We will share and support their causes. </p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryYellow}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={checkmate} />
        <div className={style.awa_content}>
          <p>Gathering enough people who understand the truth will give us the power to create our own system created by the 99% which will be fair and just for everyone, not only for the 1% or those born with the golden spoon.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryYellow}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Change;
