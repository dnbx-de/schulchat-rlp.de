// --- Particle System ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) this.reset();
    }
    draw() {
        ctx.fillStyle = `rgba(23, 147, 213, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// --- Interactive 3D Tilt & Glow ---
const card = document.getElementById('main-card');
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Update Glow position
    const rect = card.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);

    // Subtle Tilt logic
    const moveX = (clientX - innerWidth / 2) / 50;
    const moveY = (clientY - innerHeight / 2) / 50;
    card.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
});

// --- Dynamic Official Footer ---
(function() {
    const footer = document.createElement('footer');
    footer.className = 'footer-note';
    footer.innerHTML = `
        <div>Geschützt durch <a href="https://dnbx.de" target="_blank">dnbx.de</a></div>
        <div class="footer-brand">
            <span>Entwickelt von <a href="https://xpsystems.de" target="_blank">xpsystems.de</a></span>
            <span style="opacity:0.3">|</span>
            <span><a href="https://ternis-edv.de" target="_blank">ternis-edv.de</a></span>
        </div>
        <div style="margin-top:15px; opacity:0.5">
            <a href="#">Impressum</a> &bull; <a href="#">Datenschutz</a>
        </div>
    `;
    document.querySelector('main').appendChild(footer);
})();