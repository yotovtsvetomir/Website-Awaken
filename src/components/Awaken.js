import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Awaken.css';

const Awaken = ({image, linkid, title, color}) => (
    <div className={style.awaken} style={{ backgroundImage : `url(${image})` }}>
      <div className={style.awaken_decor} style= {{ background : `${color}` }}></div>
      <Link className={style.awaken_link} href={linkid}>
        <div className={style.awaken_content}>
          <h3 className={style.awaken_title}>{title}</h3>
        </div>
      </Link>
    </div>
);

export default Awaken;
