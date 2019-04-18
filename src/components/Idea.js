import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Idea.css';

const Idea = ({image, linkid, title, color}) => (
  <div className={style.idea} style={{ backgroundImage : `url(${image})`, borderColor : `${color}` }}>
    <Link className={style.idea_link} href={linkid}>
      <h2 className={style.idea_title} style={{background : `${color}` }}>{title}</h2>
    </Link>
  </div>
);

export default Idea
