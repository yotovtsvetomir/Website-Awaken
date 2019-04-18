import { h } from 'preact'
import { Link } from 'preact-router/match';
import style from './Sysarticle.css'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const politics = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/politics.jpg";
const distraction = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/distraction.jpg";
const rpow = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/rpow.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Politics = () => (
  <div className="sysarticle">
    <MetaTags>
      <title>The truth about world politics</title>
      <meta name="description" content="All politicians, leaders and corporate CEOs are just puppets to the real rulers who are pulling the strings from behind the scene." />
      <meta property="og:title" content="The truth about world politics" />
      <meta property="og:description" content="All politicians, leaders and corporate CEOs are just puppets to the real rulers who are pulling the strings from behind the scene." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.allawaken.com/the_system/politics" />
      <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/politics.jpg" />
      <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className={style.sysarticle_sidebar}>
      <img className={style.sidebar_image} src={politics} />
      <h1 className={style.sysarticle_title}>Politics</h1>
      <p className={style.sidebar_desc}>All politicians, leaders and corporate CEOs are just puppets to the real rulers who are pulling the strings from behind the scene.</p>
    </div>
    <div className={style.sysarticle_content}>
      <div className={style.sysarticle_par}>
        <img className={style.sysarticle_image} src={rpow}/>
        <h1 className="text-display-1">The Real Power</h1>
        <p>The real power lies in the hands of those who are in charge of the financial system. The other politicians do not have any power at all. They are just promoting the grand circus of distraction.</p>
        <div className="sysarticle_actions">
          <a href="https://www.portal.allawaken.com" className="button">Dive in</a>
        </div>
      </div>
      <div className={style.sysarticle_par}>
        <img className={style.sysarticle_image} src={distraction}/>
        <h1 className="text-display-1">Purpose of the Government</h1>
        <p>The main purpose is to distract you. Creating news, scandals and focusing all of the people to unimportant small details which are not impacting your life. On the other hand they are also there to bend the truth in a way that the people will agree with. For example twisting the reasons for war.</p>
        <div className="sysarticle_actions">
          <a href="https://www.portal.allawaken.com" className="button btn-yellow">Dive in</a>
        </div>
      </div>
    </div>
  </div>
);

export default Politics;
