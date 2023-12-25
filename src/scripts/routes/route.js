import Faq from "../../views/pages/FAQ";
import Dashboard from "../../views/pages/dashboard";
import Kontak from "../../views/pages/kontak";
import Riwayat from "../../views/pages/riwayat";
import Home from "../../views/pages/home";
import Login from "../../views/pages/login";
import News from "../../views/pages/News";
import detailNews from "../../views/pages/detail_news";
 
const routes = {
  '/': Home,
  '/dashboard': Dashboard,
  '/riwayat': Riwayat,
  '/kontak' : Kontak,
  '/faq' : Faq,
  '/login' : Login,
  '/news' : News,
  '/detail': detailNews


};
 
export default routes;