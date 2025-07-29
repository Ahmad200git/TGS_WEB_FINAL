// Navigasi sederhana SPA
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.page-section');

function setActivePage(pageId) {
  sections.forEach(section => {
    if (section.id === pageId) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });

  links.forEach(link => {
    if (link.dataset.page === pageId) {
      link.style.textDecoration = 'underline';
    } else {
      link.style.textDecoration = 'none';
    }
  });
}

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    setActivePage(link.dataset.page);
  });
});

// Tampilkan halaman home pertama kali
setActivePage('home');

// Formulir Kontak
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const msg = document.getElementById('contactMsg');
  msg.textContent = 'Pesan Anda telah berhasil dikirim. Terima kasih!';
  msg.style.display = 'block';
  this.reset();
});

// Formulir Pendaftaran
document.getElementById('admissionForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const msg = document.getElementById('admissionMsg');
  msg.textContent = 'Pendaftaran berhasil dikirim. Tim kami akan menghubungi Anda segera.';
  msg.style.display = 'block';
  this.reset();
});
