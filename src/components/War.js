import { h } from 'preact'
import Video from './Video'
import MetaTags from 'react-meta-tags'

const war = "https://res.cloudinary.com/awaken/image/upload/w_1000,h_400,f_auto/v1548582651/allawaken/war.jpg";

const primaryRed = "#e53935";
const primaryBlue = "#1e88e5";
const primaryGreen = "#43a047";
const primaryYellow = "#fbc02d";
const blueGrey = "#202124";

const War = () => (
  <div className="shell">
    <MetaTags>
        <title>War: There are no winners in war</title>
        <meta name="description" content="Do we really hate each other so much, to kill each other on a massive scale? The truth about war - it brings only death and suffering. We need to realize that only the financial elite benefits from war, fighting for power and resources. There is no hate between the soldiers or the people on both sides." />
        <meta property="og:title" content="War: There are no winners in war" />
        <meta property="og:description" content="Do we really hate each other so much, to kill each other on a massive scale? The truth about war - it brings only death and suffering. We need to realize that only the financial elite benefits from war, fighting for power and resources. There is no hate between the soldiers or the people on both sides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.allawaken.com/current_situation/war" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1548582649/allawaken/war.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
    </MetaTags>
    <div className="article">
      <h1 className="ideas_title">War</h1>
      <div className="article_content">
        <div className="article_decor" style={{ background: `${blueGrey}` }}></div>
        <div className="article_decor2" style={{ background: `${blueGrey}` }}></div>
        <img className="article_image" src={war} />
        <div className="article_text">
          <h3 className="text-headline">"Listen up - there's no war that will end all wars." ― Haruki Murakami.</h3>
          <p>Do we really hate each other so much, to kill each other on a massive scale? The truth about war - it brings only death and suffering.
             We need to realize that only the financial elite benefits from war, fighting for power and resources. There is no hate between the
             soldiers or the people on both sides.
          </p>
        </div>
      </div>
      <h1 className="ideas_title">Videos</h1>
      <div className="videos">
        <div className="videoholder">
          <Video color={primaryBlue} linkid2="rg7EF90Aaw8" title="There are no winners in war" linkid="https://www.youtube.com/embed/MUTkyzdf1Z4"/>
        </div>
        <div className="videoholder">
          <Video color={primaryRed} linkid2="rg7EF90Aaw8" title="Horrors of war" linkid="https://www.youtube.com/embed/4mTbGZJE2hw"/>
        </div>
      </div>
    </div>
  </div>
);

export default War;
