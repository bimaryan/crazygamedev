<?php
//koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "forum";

$conn = new mysqli($servername, $username, $password, $dbname);

//cek koneksi
if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}

//ambil data dari tabel posts dan users
$sql = "SELECT posts.*, users.username FROM posts INNER JOIN users ON posts.user_id = users.id ORDER BY created_at DESC";
$result = $conn->query($sql);

//tampilkan data pada halaman forum
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "<div class='post'>";
    echo "<h2>" . $row["title"] . "</h2>";
    echo "<p>" . $row["content"] . "</p>";
    echo "<span class='author'>Posted by " . $row["username"] . " on " . $row["created_at"] . "</span>";
    echo "</div>";
  }
} else {
  echo "Tidak ada postingan yang ditemukan.";
}

//tutup koneksi ke database
$conn->close();
?>
