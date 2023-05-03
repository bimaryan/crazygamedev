// Membuat variabel untuk elemen form
const form = document.querySelector('form');

// Menambahkan event listener pada saat form di-submit
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form untuk melakukan submit secara default

    // Mendapatkan nilai dari elemen input dan textarea
    const name = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('pesan').value.trim();

    // Memvalidasi nilai yang di-input oleh pengguna
    if (name === '' || email === '' || message === '') {
        alert('Harap isi semua field pada formulir');
        return;
    }

    // Mengirim data ke server (contoh)
    fetch('https://crazygamedev.netlify.app/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
        .then(response => response.json())
        .then(data => {
            // Memperbarui halaman dengan menampilkan pesan sukses
            const section = document.querySelector('section');
            section.innerHTML = '<h2>Pesan Terkirim</h2><p>Terima kasih telah mengirimkan pesan kepada kami.</p>';
        })
        .catch(error => {
            // Menampilkan pesan error jika terjadi masalah
            alert('Terjadi kesalahan saat mengirimkan pesan');
            console.error(error);
        });
});
