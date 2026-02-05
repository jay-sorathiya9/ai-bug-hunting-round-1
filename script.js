document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('contactMessage');
    if (msg) {
        msg.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        msg.style.color = '#d4af37';
    }
    this.reset();
});