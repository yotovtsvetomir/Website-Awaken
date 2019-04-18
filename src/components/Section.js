import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Section.css';

const Section = ({flex, bt, image, color, page, title, subtitle}) => (
  <div className={style.section} style={{ background: `${color}` }}>
    <div className={flex}>
      <div className={style.section_content}>
        <div className={style.section_text}>
          <h2 className={style.section_title}>{title}</h2>
          <p className={style.section_subhead}>{subtitle}</p>
          <Link href={page} className={bt}>Dive in</Link>
        </div>
      </div>
      <div className={style.holder}>
        <div className={style.section_image} style={{ backgroundImage: `url(${image})` }}/>
      </div>
    </div>
  </div>
);


export default Section
