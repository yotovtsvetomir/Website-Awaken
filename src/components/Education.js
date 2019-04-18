import { h } from 'preact'
import { Link } from 'preact-router/match';
import style from './Sysarticle.css'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const education = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/education.jpg";
const eb = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/eb.jpg";
const standard = "https://res.cloudinary.com/awaken/image/upload/v1548582651/allawaken/standard.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Education = () => (
  <div className="sysarticle">
    <MetaTags>
      <title>The truth about world education</title>
      <meta name="description" content="The education system has not changed for more than 400 years. He who opens a school door, closes a prison - Victor Hugo." />
      <meta property="og:title" content="The truth about world education" />
      <meta property="og:description" content="The education system has not changed for more than 400 years. He who opens a school door, closes a prison - Victor Hugo." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.allawaken.com/the_system/education" />
      <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/education.jpg" />
      <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className={style.sysarticle_sidebar}>
      <img className={style.sidebar_image} src={education} />
      <h1 className={style.sysarticle_title}>Education</h1>
      <p className={style.sidebar_desc}>The education system hasn't changed for more than 400 years. He who opens a school door, closes a prison - Victor Hugo.</p>
    </div>
    <div className={style.sysarticle_content}>
      <div className={style.sysarticle_par}>
        <img className={style.sysarticle_image} src={standard}/>
        <h1 className="text-display-1">The real focus of the Education</h1>
        <p>Education is focused only on the scores and notes. Both the teachers and the students are more occupied with the documentation, scores, points and exact subject coverage. Leaving them no time to do what the education must do - teach / learn real skills which are useful further on in life.</p>
        <div className="sysarticle_actions">
          <a href="https://www.portal.allawaken.com" className="button btn-yellow">Dive in</a>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
