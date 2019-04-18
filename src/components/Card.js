import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Card.css';

const Card = ({linkid, title, color, image}) => (
      <div className={style.card}>
        <Link className={style.card_link} href={linkid}>
          <img className={style.card_image} src={image} alt={title} />
          <div className={style.card_content}>
            <h3 className={style.card_title} style={{ background: `${color}` }}>{title}</h3>
          </div>
        </Link>
      </div>
);

export default Card;
