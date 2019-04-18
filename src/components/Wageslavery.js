import { h } from 'preact'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const ws = "https://res.cloudinary.com/awaken/image/upload/w_1000,h_400,f_auto/v1548582649/allawaken/cs.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";

const Wageslavery = () => (
  <div className="shell">
    <MetaTags>
        <title>Wage slavery around the world</title>
        <meta name="description" content="The modern slavery - a job from 9 to 5 or small business which can not pay your bills." />
        <meta property="og:title" content="Wage slavery" />
        <meta property="og:description" content="The modern slavery - a job from 9 to 5 or small business which can not pay your bills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/current_situation/wage_slavery" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/cs.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
     </MetaTags>
    <div className="article">
      <h1 className="ideas_title">Wage Slavery</h1>
      <div className="article_content">
        <div className="article_decor" style={{ background: `${primaryRed}` }}></div>
        <div className="article_decor2" style={{ background: `${primaryRed}` }}></div>
        <img className="article_image" src={ws} />
        <div className="article_text">
          <h3 className="text-headline">Does it matter if you work from 9 to 5 or not?</h3>
          <p>The modern slavery - a job from 9 to 5 or small business which can't pay your bills.
             In the past people forced other people to work difficult and hard jobs with no reward, using whips and chains. Now they are using economic chains
             which are forcing us to accept the same terms.
          </p>
        </div>
      </div>
      <h1 className="ideas_title">Videos</h1>
      <div className="videos">
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="Wage slavery" linkid="https://www.youtube.com/embed/rg7EF90Aaw8"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="The choice" linkid="https://www.youtube.com/embed/WO8OO-R8iFQ"/>
        </div>
        <div className="videoholder">
          <Video color={primaryYellow} linkid2="rg7EF90Aaw8" title="Escape" linkid="https://www.youtube.com/embed/2fgEK-Ksis4"/>
        </div>
        <div className="videoholder">
          <Video color={primaryGreen} linkid2="rg7EF90Aaw8" title="Employee or slave?" linkid="https://www.youtube.com/embed/8wDvnAIfJXs"/>
        </div>
      </div>
    </div>
  </div>
);

export default Wageslavery;
