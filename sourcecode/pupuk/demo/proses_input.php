<?php
// Ambil data dari form
$id_pupuk = $_POST["id_pupuk"];
$nama_pupuk = $_POST["nama_pupuk"];
$harga = $_POST["harga"];

// Koneksi ke database MySQL
$host = "localhost";
$user = "root";
$password = "";
$dbname = "pupuk";
$conn = mysqli_connect($host, $user, $password, $dbname);
if (!$conn) {
  die("Koneksi gagal: " . mysqli_connect_error());
}

// Eksekusi query untuk menyimpan data
$sql = "INSERT INTO pupukk (id_pupuk, nama_pupuk, harga)
VALUES ('$id_pupuk', '$nama_pupuk', '$harga')";
if (mysqli_query($conn, $sql)) {
  echo "Data berhasil disimpan";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Tambahkan pesan alert
echo "<script type='text/javascript'>alert('Data berhasil ditambahkan');</script>";

// Alihkan ke halaman pertama setelah submit
header("Location: index.html");
exit;

// Tutup koneksi
mysqli_close($conn);
?>