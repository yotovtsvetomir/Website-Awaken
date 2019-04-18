import { h } from 'preact'
import { Link } from 'preact-router/match';
import Video from './Video'
import style from './Awa.css';
import MetaTags from 'react-meta-tags'

const jjoin = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/joinn.jpg";
const team = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/team.jpg";
const hope = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/hope.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Join = () => (
  <div className="awa">
    <MetaTags>
        <title>All Awaken - Join us</title>
        <meta name="description" content="To be Awaken is to live up to the ideals we preach. To understand the system. To trust your inner voice and follow your heart. Share the information and teach truth to the people. To fight against the wrong doing by your own unique way." />
        <meta property="og:title" content="All Awaken - Join us" />
        <meta property="og:description" content="To be Awaken is to live up to the ideals we preach. To understand the system. To trust your inner voice and follow your heart. Share the information and teach truth to the people. To fight against the wrong doing by your own unique way." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/awaken/join" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/joinn.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="shell">
      <div className={style.awa_head} style={{ background: `${primaryGreen}` }}>
        <h1 className={style.awa_title}>Join</h1>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={jjoin} />
        <div className={style.awa_content}>
          <p>To be Awaken is to live up to the ideals we preach. To understand the system. To trust your inner voice and follow your heart. Share the information and teach truth to the people. To fight against the wrong doing by your own unique way.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryGreen}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={team} />
        <div className={style.awa_content}>
          <p>We are prooving that we have been conditioned to be obedient workers and that we are living in economic prison. We need freedom for all of us. The only way this will happen is to stick to our similarities rather than our differences.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryGreen}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
      <div className={style.awa_body}>
        <img className={style.awa_image} src={hope} />
        <div className={style.awa_content}>
          <p>We all want the same after all. To be one of us costs nothing, but by supporting and spreading the truth you are strengthening the idea and giving all the people in the world a fighting chance.</p>
          <div className={style.awa_actions}>
            <Link className={style.awa_button} style={{ background: `${primaryGreen}` }}>All Awaken</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Join;
