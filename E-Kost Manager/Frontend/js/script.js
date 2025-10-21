document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.nav-wrapper');

    // Toggle menu saat tombol hamburger di-klik
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navWrapper.classList.toggle('active');
    });

    // Sembunyikan menu jika salah satu link di dalamnya di-klik
    // Ini berguna agar menu otomatis tertutup setelah user memilih halaman
    const navLinks = document.querySelectorAll('.nav-wrapper a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navWrapper.classList.contains('active')) {
                hamburger.classList.remove('active');
                navWrapper.classList.remove('active');
            }
        });
    });
});

// Form Hubungi Kami
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Tampilkan toast
        toast.classList.add('show');

        // Hilangkan toast setelah 3 detik
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);

        // Reset form
        contactForm.reset();
    });
}