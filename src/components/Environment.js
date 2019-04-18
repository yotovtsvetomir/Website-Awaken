import { h } from 'preact'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const env = "https://res.cloudinary.com/awaken/image/upload/w_1000,h_400,f_auto/v1548582649/allawaken/env.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Environment = () => (
    <div className="shell">
      <MetaTags>
          <title>How the industry affects the environment?</title>
          <meta name="description" content="Poison gases from our vehicles, polluting the oceans, nuclear waste, huge piles of toxic garbage, burning fossil fuels like no tomorrow. " />
          <meta property="og:title" content="How the industry affects the environment?" />
          <meta property="og:description" content="Poison gases from our vehicles, polluting the oceans, nuclear waste, huge piles of toxic garbage, burning fossil fuels like no tomorrow. " />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.allawaken.com/current_situation/environment" />
          <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/env.jpg" />
          <meta property="fb:app_id" content="1118435171656958"/>
      </MetaTags>
      <div className="article">
        <h1 className="ideas_title">Environment</h1>
        <div className="article_content">
          <div className="article_decor" style={{ background: `${primaryYellow}` }}></div>
          <div className="article_decor2" style={{ background: `${primaryYellow}` }}></div>
          <img className="article_image" src={env} />
          <div className="article_text">
            <h3 className="text-headline">What are we doing with our only home - Earth?</h3>
            <p> Poison gases from our vehicles, polluting the oceans, nuclear waste, huge piles of toxic garbage, burning fossil fuels like no tomorrow.
              Eco friendly technologies are out there, but the rich think only about their money, not that after few hundred years maybe there won't be where to live.
            </p>
          </div>
        </div>
        <h1 className="ideas_title">Videos</h1>
        <div className="videos">
          <div className="videoholder">
            <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Effects of pollution" linkid="https://www.youtube.com/embed/7y6cvg_-6Lo"/>
          </div>
          <div className="videoholder">
            <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="Hotspots" linkid="https://www.youtube.com/embed/AAe1ALHcS7Y"/>
          </div>
          <div className="videoholder">
            <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="Consequences" linkid="https://www.youtube.com/embed/G4H1N_yXBiA"/>
          </div>
          <div className="videoholder">
            <Video color={primaryGreen} linkid2="rg7EF90Aaw8" title="Nuclear waste" linkid="https://www.youtube.com/embed/5vIZEgFY3hg"/>
          </div>
          <div className="videoholder">
            <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Industrial pollution" linkid="https://www.youtube.com/embed/qLU-1lNZjOM"/>
          </div>
          <div className="videoholder">
            <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="Impact" linkid="https://www.youtube.com/embed/IKZMGBA_0Ik"/>
          </div>
          <div className="videoholder">
            <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="Eco is possible" linkid="https://www.youtube.com/embed/XlMFLPGUiQE"/>
          </div>
        </div>
      </div>
    </div>
);

export default Environment;
