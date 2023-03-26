// Set up the download button
const downloadBtn = document.getElementById("download-btn");
const downloadLink = "/game/drawing & coloring/apk/Drawing & Coloring.apk"; // Ganti dengan nama file yang ingin diunduh

// Cek apakah browser mendukung localStorage
if (typeof(Storage) !== "undefined") {
  // Jika browser mendukung, cek apakah ada data download yang tersimpan di localStorage
  if (localStorage.downloadCount) {
    // Jika ada, ambil nilainya dan tambahkan 1
    localStorage.downloadCount = Number(localStorage.downloadCount) + 1;
  } else {
    // Jika belum ada, inisialisasi dengan 1
    localStorage.downloadCount = 1;
  }

  // Setelah nilai downloadCount diupdate, tampilkan nilainya di HTML secara real-time dengan Ajax
  const downloadCount = localStorage.downloadCount;
  $("#download-count").text(downloadCount);
} else {
  // Jika browser tidak mendukung localStorage, tampilkan pesan error
  const errorElement = document.createElement("p");
  errorElement.textContent = "Sorry, your browser does not support web storage...";
  document.body.appendChild(errorElement);
}

// Atur event listener untuk tombol download
downloadBtn.addEventListener("click", function() {
  // Tambahkan 1 ke nilai downloadCount setiap kali tombol download di-klik
  localStorage.downloadCount = Number(localStorage.downloadCount) + 1;

  // Tampilkan nilai downloadCount secara real-time di HTML dengan Ajax
  const downloadCount = localStorage.downloadCount;
  $("#download-count").text(downloadCount);

  // Redirect ke file yang akan diunduh
  window.location.href = downloadLink;
});
