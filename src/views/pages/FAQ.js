import { faqTemplate } from "../templates/template-creator";
const Faq = {
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
    <h2 class="trending">Pertanyaan yg sering diajukan</h2>
      <div class="news_container"></div>
      </div>
    </div>
    </section>  
    </main>
    <footer>
        <h3>CopyRight 2023</h3>
    </footer>
      `;
  },

  async afterRender() {
    const container = document.querySelector(".news_container");
    container.innerHTML += faqTemplate();

    const expandButtons = document.querySelectorAll(".expand-button");

    expandButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const answer = this.closest(".faq-item").querySelector(".faq-answer");
        
        if (answer) {
          answer.style.display = answer.style.display === "none" || getComputedStyle(answer).display === "none" ? "block" : "none";
          this.classList.toggle("expanded");
          this.textContent = this.classList.contains("expanded") ? "-" : "+";
        }
      });
    });
  },
};

export default Faq;
