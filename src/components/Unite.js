import { h } from 'preact'
import style from './Awagoal.css'
import MetaTags from 'react-meta-tags'

const flags = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/flags.jpg";
const unity = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/around.jpg";
const problem = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/wws.jpg";

const primaryGreen = "#43a047";

const Unite = () => (
  <div className="shell">
    <MetaTags>
        <title>All Awaken - Where all activists meet</title>
        <meta name="description" content="Unite all likeminded people around the world who are fighting to change the system." />
        <meta property="og:title" content="All Awaken - Where all activists meet" />
        <meta property="og:description" content="Unite all likeminded people around the world who are fighting to change the system." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/goals/united_activists" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/flags.png" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className={style.awagoal}>
      <div className={style.awagoal_image} style={{ backgroundImage : `url(${flags})` }}>
        <h1 className={style.awagoal_title} style={{ background: `${primaryGreen}` }}>Unite all activists</h1>
      </div>
      <div className={style.awagoal_content}>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${unity})` }}></div>
          <h2 className={style.awagoal_block_title}>Around the world</h2>
          <p>Many people tried to help and change the world by their own unique way. Some of them defend the environment, others fight for freedom of speech. All of those people are worthy of recognition.
          But the truth is this will not change the world. Statistics show that everything that we as human beings are doing until this moment is not solving our problems. The 2 main reasons this is
          happening is because we are not uniting and we are not focusing on the right problems.</p>
        </div>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${problem})` }}></div>
          <h2 className={style.awagoal_block_title}>The problem</h2>
          <p>The only way to win is to stand together. It is important and logical for people who are aiming for the same goal to be on the same team. As we have said many people fight for various good
          causes which are striving for changing the world in the right direction. But we need to realize that the source of most of the problems worldwide is the same. - "How the world really works?".
          Once we deal with the main and biggest problem, only then we can achieve change.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Unite;
