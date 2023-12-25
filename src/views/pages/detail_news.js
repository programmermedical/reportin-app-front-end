// core version + navigation, pagination modules:

import { detailNewsTemplate } from "../templates/template-creator";

const detailNews = {
  async render() {
    return `

    <header class="navbar">
        <div class="navbar_nav">
            <a href="/" class="brand_logo"><img src='bf7fd14952d4ceb9d298.png' alt="Logo"></a>
            <nav class="navbar_link">
                <a href="#/dashboard">Aduan</a>
                <a href="#/faq">FAQ</a>
                <a href="#/kontak">Kontak</a>
                <a href="#/riwayat">Riwayat Laporan</a>
                <a href="#/news">News</a>
            </nav>
            <a class="login" href="#/login">Login</a>
        </div>
    </header>
    <main id="mainContent">
    <section>
        <div class="container blue">
            <div class="contentwrapper">
            <div class="detail_news"></div>
            </div>
        </div>
    </section>
    </main>

      `;
  },

  async afterRender() {

    const registerContainer = document.querySelector(".detail_news");
    registerContainer.innerHTML += detailNewsTemplate();
  },
};

export default detailNews;
