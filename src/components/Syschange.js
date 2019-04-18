import { h } from 'preact'
import style from './Awagoal.css'
import MetaTags from 'react-meta-tags'

const system = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/thesystem.jpg";
const people = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/people.jpg";
const heart = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/heart.jpg";
const leader = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/leader.jpg";
const nature = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/nature.jpg";

const primaryRed = "#e53935";
const secondaryRed = "#ffebee";

const Syschange = () => (
  <div className="shell">
    <MetaTags>
        <title>All Awaken - Change the system</title>
        <meta name="description" content="The true power in the world lies within all the ordinary people. The 99% are the world itself, or the biggest part of it. The people don't realize how much power they have if they unite under a cause. Nothing is stronger or more powerful in the world. And we believe that this is the only way to change the system." />
        <meta property="og:title" content="All Awaken - Change the system" />
        <meta property="og:description" content="The true power in the world lies within all the ordinary people. The 99% are the world itself, or the biggest part of it. The people don't realize how much power they have if they unite under a cause. Nothing is stronger or more powerful in the world. And we believe that this is the only way to change the system." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/goals/system_change" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/thesystem.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className={style.awagoal}>
      <div className={style.awagoal_image} style={{ backgroundImage : `url(${system})` }}>
        <h1 className={style.awagoal_title} style={{ background: `${primaryRed}` }}>Change the system</h1>
      </div>
      <div className={style.awagoal_content}>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${people})` }}></div>
          <h2 className={style.awagoal_block_title}>True power</h2>
          <p>The true power in the world lies within all the ordinary people. The 99% are the world itself, or the biggest part of it. The people don't realize how much power they have if they unite under a cause. Nothing is stronger or more powerful in the world. And we believe that this is the only way to change the system.</p>
        </div>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${heart})` }}></div>
          <h2 className={style.awagoal_block_title}>The Heart</h2>
          <p>Creating a fair system, where everyone has a chance. By fair we mean that everyone, no matter what job or business we are doing will have more than enough to have everything we need. A world system driven by ideas and morals, not money.</p>
        </div>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${nature})` }}></div>
          <h2 className={style.awagoal_block_title}>Mother Earth</h2>
          <p>Respecting our home, the nature and every living thing inside. Creating and using eco-friendly technology and live in a clean well organized world.</p>
        </div>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${leader})` }}></div>
          <h2 className={style.awagoal_block_title}>Leaders</h2>
          <p>When money are out of the equation and leaders are under the people's command, finally leaders will be chosen for their ideas and morals, not for how deep their pockets are.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Syschange;
