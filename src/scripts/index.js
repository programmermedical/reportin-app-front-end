import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/home.css';
import '../styles/news.css'
import '../styles/detailNews.css';
import '../styles/riwayat.css';
import '../styles/faq.css';
import '../styles/tentangKami.css';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from '../views/app';

 
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('body'),
});
 
window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});