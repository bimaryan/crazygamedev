// Set up the download link
const downloadLink = document.getElementById("download-link");
const downloadUrl = "/game/drawing & coloring/apk/Drawing & Coloring.apk"; // Ganti dengan URL file PHP yang akan menghitung jumlah pengunduhan

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

// Atur event listener untuk link download
downloadLink.addEventListener("click", function(event) {
  event.preventDefault(); // Menghentikan aksi default link download

  // Tambahkan 1 ke nilai downloadCount setiap kali link download di-klik
  localStorage.downloadCount = Number(localStorage.downloadCount) + 1;

  // Tampilkan nilai downloadCount secara real-time di HTML dengan Ajax
  const downloadCount = localStorage.downloadCount;
  $("#download-count").text(downloadCount);

  // Kirim permintaan Ajax ke server untuk memperbarui jumlah pengunduhan
  $.ajax({
    url: downloadUrl,
    type: "POST",
    data: {downloadCount: downloadCount},
    success: function(response) {
      // Tidak perlu melakukan apa-apa jika permintaan berhasil
    },
    error: function(xhr) {
      console.log("Error: " + xhr.responseText); // Tampilkan pesan error di console
    }
  });

  // Redirect ke file yang akan diunduh setelah permintaan Ajax selesai
  window.location.href = downloadLink.href;
});