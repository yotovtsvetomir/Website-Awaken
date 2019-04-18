import { h } from 'preact';
import style from './Book.css';

const intro = require('./images/intro.jpg');

const Book = () => (
  <div className={style.book_section}>
    <div className="shell">
      <h2 className={style.book_title}>The Book <div className={style.book_decor}></div></h2>
      <p className={style.book_subtitle}>Ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className={style.book} style={{ backgroundImage : `url(${intro})` }}></div>
    </div>
  </div>
);

export default Book
