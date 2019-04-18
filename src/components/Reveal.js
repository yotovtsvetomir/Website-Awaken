import { h } from 'preact'
import style from './Awagoal.css'
import MetaTags from 'react-meta-tags'

const light = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/light.jpg";
const evil = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/evil.jpg";
const eb = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/eb.jpg";
const scope = "https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/scope.jpg";

const primaryYellow = "#fbc02d";
const secondaryYellow = "#fffde7";

const Reveal = () => (
  <div className="shell">
    <MetaTags>
        <title>Revealing the truth</title>
        <meta name="description" content="There is official document which is describing the power of the BIS - Bank of international settlements. There are also 3 more institutions - Federal Reserve, IMF, World Bank - with almost equal power controlling all of the money in the world. A small group of people the 0,01% are owning these institutions. " />
        <meta property="og:title" content="Revealing the truth" />
        <meta property="og:description" content="There is official document which is describing the power of the BIS - Bank of international settlements. There are also 3 more institutions - Federal Reserve, IMF, World Bank - with almost equal power controlling all of the money in the world. A small group of people the 0,01% are owning these institutions. " />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/goals/system_change" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/light.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className={style.awagoal}>
      <div className={style.awagoal_image} style={{ backgroundImage : `url(${light})` }}>
        <h1 className={style.awagoal_title} style={{ background: `${primaryYellow}` }}>Revealing the truth</h1>
      </div>
      <div className={style.awagoal_content}>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${evil})` }}></div>
          <h2 className={style.awagoal_block_title}>What truth?</h2>
          <p>There is official document which is describing the power of the BIS - Bank of international settlements. There are also 3 more institutions - Federal Reserve, IMF, World Bank - with almost equal power controlling all of the money in the world. A small group of people the 0,01% are owning these institutions. This gives them the true power over governments, countries and ultimately the world. The politicians do not have power at all. This leads to the majority of the problems we have nowadays.</p>
        </div>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${eb})` }}></div>
          <h2 className={style.awagoal_block_title}>The problem source</h2>
          <p>The source of the problem is that we don't have a choice. We are born owned by the government, forced to live under laws and rules, forced to live within a system. A system which we have never had the chance to choose or agree with. This puts us in control of the government which is the circus built for distracting us from the real problem - the owners of the biggest financial institutions in the world.</p>
        </div>
        <div className={style.awagoal_block}>
          <div className={style.awagoal_block_image} style={{ backgroundImage : `url(${scope})` }}></div>
          <h2 className={style.awagoal_block_title}>Scope</h2>
          <p>Most of the problems in the world are inherited from the scheme we mentioned in the previous article. Environment, healthcare, education, politics, business and jobs - almost everyone is doing it only for the money. That is how the pyramid is repeating downroad to our everyday life. Most of us are blaming the wrong people for our situation.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Reveal;
