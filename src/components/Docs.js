import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './Docs.css';

const Docs = () => (
  <div className="shell">
    <h1 className="ideas_title">Documents</h1>
    <div className={style.docs}>
      <div className={style.doc}>
        <a className={style.doc_link} href="https://www.bis.org/about/arch_guide.pdf">
          <h3 className={style.doc_title}>BIS - Bank of International settlements</h3>
          <p>Official Archive - Organization & History</p>
          <p>"The BIS serves as a central bank for central banks."</p>
        </a>
      </div>
      <div className={style.doc}>
        <a className={style.doc_link} href="https://www.federalreserve.gov/aboutthefed/files/pf_complete.pdf">
          <h3 className={style.doc_title}>Federal Reserve</h3>
          <p>Official Release - System & Structure</p>
          <p>"Stakeholders" - private institution.</p>
        </a>
      </div>
      <div className={style.doc}>
        <a className={style.doc_link} href="https://www.jfklibrary.org/archives/other-resources/john-f-kennedy-speeches/american-newspaper-publishers-association-19610427">
          <h3 className={style.doc_title}>J.F. Kennedy Speech</h3>
          <p>Official Release - System & Structure</p>
          <p>"The killer speech" - meant that he said the truth.</p>
        </a>
      </div>
      <div className={style.doc}>
        <a className={style.doc_link} href="http://www.pbc.gov.cn/english/130727/130870/index.html">
          <h3 className={style.doc_title}>People's Bank of China</h3>
          <p>Monetary policy - Centered banking system</p>
        </a>
      </div>
      <div className={style.doc}>
        <a className={style.doc_link} href="https://en.wikipedia.org/wiki/Concentration_of_media_ownership">
          <h3 className={style.doc_title}>Centralized Media Ownership</h3>
          <p>Explanation of media monopoly & owners</p>
        </a>
      </div>
    </div>
  </div>
);

export default Docs;
