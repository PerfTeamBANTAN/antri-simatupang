// Website Antrian BELM - Butik Emas LM ANTAM

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Antrian BELM Loaded Successfully');
    initializeWebsite();
});

function initializeWebsite() {
    updateDateTime();
    setupEventListeners();
}

function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Jakarta'
    };
    console.log('Current date/time:', now.toLocaleDateString('id-ID', options));
}

function setupEventListeners() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navigating to:', this.getAttribute('href'));
        });
    });
}

function isWebsiteOpen() {
    const now = new Date();
    const day = now.getDay();
    return !(day === 0 || day === 6);
}
