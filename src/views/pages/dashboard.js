import Swal from "sweetalert2";
import ReportResource from "../../scripts/data/report-source";

const Dashboard = {
    async render() {
      const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.hash = '#/login';
    }
      return `
      <style>
      
      </style>

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
            <a class="login" href="#/login">Logout</a>
        </div>
    </header>
    <main id="mainContent">
    <div class="red">
    <h2>Layanan Aduan Situs Judi Online</h2>
    <p>Laporkan Situs Judi Online yang Anda Temukan</p>
    <p style="margin-bottom:-30px">Caution!! website ini masih dalam tahap pengembangan</p>
      <hr>
  </div>
  <div class="white">
  </div>
  <div class="aduan_container">
  <form enctype="multipart/form-data">
      <h2>Buat Laporan Anda Disini</h2>
      <label>Tautan Aduan:</label>
      <input class="tautan" type="text" placeholder="Contoh: http://tautan-situs.com/"> <br>
      <label>Alasan:</label>
      <input class="desk" type="text" placeholder="Deskripsikan alasan detail anda disini">
      <label>File Pendukung:</label>
      <div class="nop">
          <input class="file" type="file" placeholder="Choose Files">
      </div>
      <p class="tipe">Tipe file yang dapat diupload png, jpg, jpeg, dan pdf maksimal 5 file dengan maksimum total size 8 mb</p>

      <div>
          <button class="reset">Reset!</button>
          <button class="report" type="submit">Lapor!</button>
      </div>
  </form>
  </div>
    </main>
    <footer>
    <h3>CopyRight 2023</h3>
</footer>
      
      `;
    },
   
    async afterRender() {
      const reportForm = document.querySelector('form');
      reportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        // Retrieve form data
        const tautan = document.querySelector('.tautan').value;
        const alasan = document.querySelector('.desk').value;
        const fileInput = document.querySelector('.file');
        const file = fileInput.files[0];
        
        const inputRequest = {
          subject: tautan,
          description: alasan,
          file: file,
        }

        // const formData = new FormData();
        // formData.append("subject", tautan);
        // formData.append("description", alasan);
        // formData.append("file", file);

        // console.log(formData);

        try {
          const id = JSON.parse(localStorage.getItem('idUser'));
          // const token = JSON.parse(localStorage.getItem('accessToken'));
        
          const response = await ReportResource.addReport(inputRequest, id);
      
          if (response.status === true) {
            await Swal.fire({
              icon: 'success',
              title: 'Success',
              text: `${response.message}`,
              confirmButtonText: 'OK'
            });
  
            // localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
            // localStorage.setItem('idUser', JSON.stringify(response.data.id));
            // window.location.href = '#/dashboard'
            window.location.reload();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
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
       }
        
      });
      
    },
  };
   
export default Dashboard;