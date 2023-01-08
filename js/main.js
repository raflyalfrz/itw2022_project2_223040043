// .........................Untuk membuat show more pada button...................
document
  .getElementById("show-more-button")
  .addEventListener("click", function () {
    document.getElementById("more-products").style.display = "";
    this.style.display = "none";
  });

document
  .getElementById("lihat-lebih-banyak")
  .addEventListener("click", function () {
    document.getElementById("semua-produk").style.display = "";
    this.style.display = "none";
  });

document
  .getElementById("lihat-klik-tombol")
  .addEventListener("click", function () {
    document.getElementById("lihat-produk").style.display = "";
    this.style.display = "none";
  });

//   ........................untuk membuat navbar toggler naik atau tertutup ketika nav-link di klik............
// Dapatkan semua elemen nav-link
var navLinks = document.querySelectorAll(".nav-link");

// Tambahkan event handler pada setiap elemen nav-link,......................
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Dapatkan elemen navbar-collapse
    var navbarCollapse = document.querySelector(".navbar-collapse");

    // Hapus kelas 'show' dan tambahkan kelas 'collapse'
    navbarCollapse.classList.remove("show");
    navbarCollapse.classList.add("collapse");
  });
});

// .....................ketika tombol di klik maka tombol itu akan menghilang.................
const tombol = document.querySelector("#lihat-klik-tombol");
const barisTersembunyi = document.querySelector("#lihat-produk");
const barisInduk = barisTersembunyi.parentElement;

tombol.addEventListener("click", () => {
  // Hapus baris tersembunyi
  barisTersembunyi.remove();

  // Tambahkan elemen anak dari baris tersembunyi ke baris induk
  while (barisTersembunyi.firstChild) {
    barisInduk.appendChild(barisTersembunyi.firstChild);
  }
});
