import { h } from 'preact';
import pkg from '../../../../../package.json';
const appName = pkg.name[0].toUpperCase() + pkg.name.slice(1)

import './Footer.scss';

const Footer = () => (
  <footer>
    <div style="font-weight:100">
        <a class="sec-clr" href="//github.com/av4/blaze">{appName} v{pkg.version}</a> ©<span id="cpyear">2022</span> - <a class="sec-clr" href="//github.com/av4/blaze/blob/master/LICENSE" target="_blank">MIT License</a>
        <br />
        <span style="font-size:smaller">
          A share now adaptation of <a class="sec-clr" href="//blaze.now.sh" target="_blank">Blaze</a> - <a class="sec-clr" href="//github.com/blenderskool/blaze/blob/master/LICENSE" target="_blank">MIT License</a>
          <br />
          <span style="font-size:smaller">1-to-1 &amp; Many-to-Many file transfers across various networks &amp; devices. No signups, ads or Google. </span>
        </span><br />
    </div>
    <script>
      if ((new Date).getFullYear() > 2022) document.getElementById('cpyear').innerText = '2022 - ' + (new Date).getFullYear();
    </script>
  </footer>
);

export default Footer;
