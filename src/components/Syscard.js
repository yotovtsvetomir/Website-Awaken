import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Syscard.css';

const Syscard = ({img, linkid, title, desc, color, secolor}) => (
  <div className={style.syscard}>
    <Link href={linkid}>
      <div className={style.syscard_container} style={{ background: `${secolor}` }}>
        <div className={style.syscard_img} style={{ backgroundImage : `url(${img})` }}></div>
        <div className={style.syscard_content}>
          <h3 className={style.syscard_title} style={{ background : `${color}` }}>{title}</h3>
          <p className={style.syscard_p}>{desc}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Syscard;
