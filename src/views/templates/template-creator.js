const landingPage = () => `
    <div class="title">
        <h2>Lindungi Generasi Kita dari Bahaya Judi Online!</h2>
        <p>Maraknya situs judi online adalah masalah yang serius. Laporkan situs-situs tersebut dan kita akan mengambil tindakan tegas. Yuk laporkan sekarang!</p>
       <a href="#registerContainer"><button class="lapor">Lapor Sekarang</button></a>
    </div>
    <div class="swiper mySwiper">
    <div class="swiper-wrapper"></div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    
</div>
      `
const newsCard = (a) => `
<div class="swiper-slide">
            <div class="news_container">
            <a href="${a.link}" target="_blank">
                <div class="card">
                    <div class="card-image"><img
                            src="${a.thumbnail}"
                            alt=""></div>
                    <div class="heading">${a.title}
                        <div class="author"> By <span class="name">Ronaldo</span> 4 days ago</div>
                    </div>
                </div>
            </div>
            </a>
        </div>
`

const register = () => `
<h2 id="daftar">Daftar Sekarang</h2>
<hr>
<form class="form">
    <div class="header">Register</div>
    <div class="inputs">
        <input placeholder="Nama" class="input" id="name" type="text">
        <input placeholder="Email" class="input" id="email" type="text">
        <input placeholder="Password" class="input" id="password" type="password">
    <div class="checkbox-container">
        <label class="checkbox">
        <input type="checkbox" id="checkbox">
        </label>
        <label for="checkbox" class="checkbox-text">Remember me</label>
    </div>
    <button class="sigin-btn">Submit</button>
    <a class="forget" href="#">Forget password ?</a>
    <p class="signup-link">Sudah punya akun? <a href="#/login">Login</a></p>
    </div>
</form>
`
const login = () => `
<form class="form">
    <div class="header">Sign In</div>
    <div class="inputs">
        <input placeholder="Email" class="input" id="email" type="text">
        <input placeholder="Password" class="input" id="password" type="password">
    <div class="checkbox-container">
        <label class="checkbox">
        <input type="checkbox" id="checkbox">
        </label>
        <label for="checkbox" class="checkbox-text">Remember me</label>
    </div>
    <button class="sigin-btn">Submit</button>
    <a class="forget" href="#">Forget password ?</a>
    <p class="signup-link">Belum punya akun? <a href="/#daftar">Daftar</a></p>
    </div>
</form>
`

const newsList = (data) => `
<div class="card_news">
                        <div class="card_img">
                            <img src="${data.thumbnail}" alt="">
                        </div>
                        <div class="card_content">
                            <h4 class="title_news">${data.title}</h4>
                            <p class="desc_news">${data.description}</p>
                        </div>
                        <div class="selengkapnya">
                            <a href="${data.link}" target="_blank" >Selengkapnya</a>
                        </div>
                    </div>

`

const detailNewsTemplate = () => `
<div class="card_detail">
<div class="image_detail"></div>
 <div class="content_detail">
   <a href="#">
     <span class="title_detail">
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
     </span>
   </a>

   <p class="desc_detail">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
     dolores, possimus pariatur animi temporibus nesciunt praesentium 
   </p>
 </div>
</div>

`

const riwayatTemplate = (data) =>`
<div class="card_riwayat">
<div class="riwayat_tgl">
<p class="tgl">${data.subject}</p>
</div>
<div class="riwayat_detail">
<p class="riwayat_title">${data.description}
</p>
</div>
<div class="riwayat_img">
    <img src="${data.file}" alt="">
</div>
</div>

`

const faqTemplate = () =>`
<div class="faq-item">
<div class="faq-question">
<button class="expand-button">+</button>
  <h3>Apa itu website pelapor judi online?</h3>
</div>
<div class="faq-answer">
  <p>Answer to question 1 goes here...</p>
</div>
</div>

<div class="faq-item">
<div class="faq-question">
<button class="expand-button">+</button>
  <h3>Apa yang terjadi setelah saya melapor?</h3>
</div>
<div class="faq-answer">
  <p>Answer to question 2 goes here...</p>
</div>
</div>
`

export {landingPage, register, login, newsList, detailNewsTemplate, riwayatTemplate, faqTemplate, newsCard};