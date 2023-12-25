// core version + navigation, pagination modules:
import {login} from '../templates/template-creator'
import Swal from 'sweetalert2';
import ReportResource from '../../scripts/data/report-source';

const Login = {
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
            <div class="register_container login_container" id="registerContainer"></div>
            
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

    const registerContainer = document.querySelector(".register_container");
    registerContainer.innerHTML += login();

    const loginForm = document.querySelector(".form");
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = document.querySelector('#email').value;
      const passwordInput = document.querySelector('#password').value;

      const loginInput = {
        email: emailInput,
        password: passwordInput,
      }
      console.log(JSON.stringify(loginInput));
      const response = await ReportResource.login(loginInput);
      try {
        if (response.status === true) {
        await Swal.fire({
            icon: `success`,
            title: `Success`,
            text: `${response.message}`,
            confirmButtonText: 'OK'
          });
          localStorage.setItem('accessToken', JSON.stringify(response.accessToken));
          localStorage.setItem('idUser', JSON.stringify(response.data.id));
          window.location.assign(window.location.href = '#/dashboard');
        } else {
          Swal.fire({
            icon: `error`,
            title: `Error`,
            text: `${response.message}`,
            confirmButtonText: 'OK'
          });
          console.log(response);
        }
     } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `'Oppps undifined!'`,
          confirmButtonText: 'OK'
        });
        console.log(error)
     }

    })

  },
};

export default Login;
