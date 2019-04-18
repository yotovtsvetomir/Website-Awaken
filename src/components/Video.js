import { h } from 'preact'
import style from './Video.css'

const yt = require('./images/yt.jpg');

const Video = ({color, linkid, linkid2, title}) => (
  <div className={style.video} style={{ 'border-color': `${color}` }}>
    <div className={style.video_content} style={{ backgroundImage : `url(${yt})` }}>
      <iframe
        className={style.player}
        src={linkid}
        allowFullScreen={1}
        />
    </div>
    <h3 className="text-headline">{title}</h3>
  </div>
);

export default Video;
