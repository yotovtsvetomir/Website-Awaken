import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Goal.css';

const Goal = ({ desc, image, linkid, title, color}) => (
  <div className={style.goal}>
    <Link className={style.goal_link} href={linkid}>
      <div className={style.goal_content} style={{ background: `${color}` }}>
        <h3 className={style.goal_title}>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className={style.goal_image} style={{ backgroundImage : `url(${image})` }}></div>
    </Link>
  </div>
);

export default Goal;
