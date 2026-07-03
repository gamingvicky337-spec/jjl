// Array path gambar tim
const teamImages = [
  "img/tim1.jpg",
  "img/tim2.jpg",
  "img/tim3.jpg",
  "img/tim4.jpg",
];

let currentIndex = 0;
const totalImages = teamImages.length;
const imageElement = document.getElementById("teamImage");

// Fungsi untuk menampilkan gambar saat klik dot
function currentImage(index) {
  showImage(index);
}

// Fungsi untuk menampilkan gambar dengan efek zoom out
function showImage(index) {
  if (index < 0 || index >= totalImages) return;

  // Tambahkan kelas zoom-out sebelum mengganti gambar
  imageElement.classList.add("zoom-out");

  // Ganti sumber gambar setelah 10ms agar efek terlihat
  setTimeout(() => {
    imageElement.src = teamImages[index];
    // Hapus kelas zoom-out setelah gambar baru muncul
    setTimeout(() => {
      imageElement.classList.remove("zoom-out");
    }, 10);
  }, 10);

  currentIndex = index;
  updateDots();
}

// Update active class pada dot
function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Ganti gambar otomatis setiap 5 detik
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}, 5000);
