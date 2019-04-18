import { h } from 'preact';

const bimage = require('./images/404.png');

const Fourofour = () => (
  <div style="height: 100vh; padding: 100px 200px;">
    <img src={bimage} style="width: 100%; height: 100%;" />
  </div>
);

export default Fourofour
