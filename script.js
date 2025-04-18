document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengambil nilai dari input
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    // Menampilkan pesan konfirmasi
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Terima kasih, ${name}! Pesan Anda telah dikirim.</p>`;
    responseMessage.style.color = 'green';

    // Mengosongkan formulir setelah pengiriman
    event.target.reset();
});