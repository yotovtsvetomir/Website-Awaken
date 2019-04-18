import { h } from 'preact'
import { Link } from 'preact-router/match';
import style from './Sysarticle.css'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const media = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/media.jpg";
const mm = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/mm.jpg";
const md = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/md.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Media = () => (
  <div className="sysarticle">
    <MetaTags>
      <title>The truth about world media</title>
      <meta name="description" content="Billions of things happen every day. How do they choose exactly which to show to the public?" />
      <meta property="og:title" content="The truth about world media" />
      <meta property="og:description" content="Billions of things happen every day. How do they choose exactly which to show to the public?" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.allawaken.com/the_system/media" />
      <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/media.jpg" />
      <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className={style.sysarticle_sidebar}>
      <img className={style.sidebar_image} src={media} />
      <h1 className={style.sysarticle_title}>Media</h1>
      <p className={style.sidebar_desc}>Billions of things happen every day. How do they choose exactly which to show to the public?</p>
    </div>
    <div className={style.sysarticle_content}>
      <div className={style.sysarticle_par}>
        <img className={style.sysarticle_image} src={mm}/>
        <h1 className="text-display-1">Media Manipulation</h1>
        <p>The Media is the right hand of the banking elite to control everyone. News carefully planned and executed by their political puppets. Masking and hiding secrets and truths, twisting events and news in a way that deceits the people and focus them only on topics that have no impact on their lives. But most importantly blind to their real problems.</p>
        <div className="sysarticle_actions">
          <a href="https://www.portal.allawaken.com" className="button">Dive in</a>
        </div>
      </div>
      <div className={style.sysarticle_par}>
        <img className={style.sysarticle_image} src={md}/>
        <h1 className="text-display-1">Weapon for mass destruction</h1>
        <p>Media is a very closed circle and control is centralized. News are identical or absolutely the same all over the media. The purpose is to control the masses in whichever way the elites seem fit.</p>
        <div className="sysarticle_actions">
          <a href="https://www.portal.allawaken.com" className="button btn-yellow">Dive in</a>
        </div>
      </div>
    </div>
  </div>
);

export default Media;
