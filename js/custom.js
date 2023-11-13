// Modal
const myModal = new bootstrap.Modal(document.getElementById("modalCover"), {});
myModal.toggle();

// Play Audio
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const song = document.querySelector("#song");
let isPlaying = false;
document.getElementById("musiknya").onclick = function () {
  song.volume = 0.2;
  audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
};
audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// Countdown
// Mengatur waktu akhir perhitungan mundur
var countDown = new Date("May 20, 2024 08:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {
  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();

  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var jarak = countDown - now;

  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(jarak / (1000 * 60 * 60 * 24));
  var hours = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((jarak % (1000 * 60)) / 1000);

  // Keluarkan hasil dalam elemen dengan id = "hari,jam,menit,detik"
  document.getElementById("hari").innerHTML = days + "";
  document.getElementById("jam").innerHTML = hours + "";
  document.getElementById("menit").innerHTML = minutes + "";
  document.getElementById("detik").innerHTML = seconds + "";

  // Jika hitungan mundur selesai, tulis beberapa teks
  if (jarak < 0) {
    clearInterval(x);
    document.getElementById("hari").innerHTML = "00";
    document.getElementById("jam").innerHTML = "00";
    document.getElementById("menit").innerHTML = "00";
    document.getElementById("detik").innerHTML = "00";
  }
}, 1000);

// Galeri
const durasi = document.querySelector("#galeriCarousel");
const carousel = new bootstrap.Carousel(durasi, {
  interval: 2000,
  touch: false,
});
