// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
import ReportResource from '../../scripts/data/report-source';
import swal from 'sweetalert2';

import { landingPage, register, newsCard } from "../templates/template-creator";
const Home = {
  async render() {
    return `
    <header class="navbar">
        <div class="navbar_nav">
            <a href="/" class="brand_logo"><img src='bf7fd14952d4ceb9d298.png' alt="Logo"></a>
            <nav class="navbar_link">
                <a href="#/faq">FAQ</a>
                <a href="#/kontak">Kontak</a>
                <a href="#/news">News</a>
            </nav>
            <a class="login" href="#/login">Login</a>
        </div>
    </header>
    <main id="mainContent">
    <section>
    <div class="container">
        <div class="contentwrapper">
            <div class="onobarding_container"></div>
        </div>
    </div>
</section>
<section>
    <div class="container blue">
        <div class="contentwrapper">
        <div class="register_container" id="registerContainer"></div>
        
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
    const container = document.querySelector(".onobarding_container");
    container.innerHTML += landingPage();
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        
      }
    });

    const slideContainer = document.querySelector('.swiper-wrapper');
    const news = await ReportResource.getNews();
    
    console.log(news.data.posts.title);
    news.data.posts.slice(0, 10).forEach((a) => {
      slideContainer.innerHTML += newsCard(a);
    });

    const registerContainer = document.querySelector(".register_container");
    registerContainer.innerHTML += register();

    const registerForm = document.querySelector(".form");
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log("Register");
      const nameInput = document.querySelector('#name').value;
      const emailInput = document.querySelector('#email').value;
      const passwordInput = document.querySelector('#password').value;

      const registerInput = {
        username: nameInput,
        email: emailInput,
        password: passwordInput,
        role: "user"
      }
      console.log(registerInput);

      try {
        const response = await ReportResource.register(registerInput);
    
        if (response.status === true) {
          await swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration was successful!',
            confirmButtonText: 'OK'
          });
          window.location.assign(window.location.href = '#/login');
        } else {
          swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Registration failed!',
            confirmButtonText: 'OK'
          });
        }
     } catch (error) {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Registration failed!',
          confirmButtonText: 'OK'
        });
        console.log(error)
     }

    })
  },
};

export default Home;
