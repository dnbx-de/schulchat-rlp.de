/**
 * Schulchat-RLP Dynamic UI & Particle Engine
 */

class ParticleEngine {
    constructor() {
        this.canvas = document.getElementById('particle-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.numberOfParticles = window.innerWidth < 768 ? 40 : 100;
        
        this.init();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.resize();
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(23, 147, 213, ${p.opacity})`;
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ── Footer Injection ──
function injectFooter() {
    const footer = document.createElement('div');
    footer.className = 'footer-container';
    footer.innerHTML = `
        <p>Geschützt durch <strong>dnbx.de</strong></p>
        <p>Entwickelt von <a href="https://xpsystems.de" target="_blank">xpsystems.de</a> & <a href="https://ternis-edv.de" target="_blank">ternis-edv.de</a></p>
        <div style="margin-top: 10px; opacity: 0.6">
            <a href="#">Impressum</a> • <a href="#">Datenschutz</a>
        </div>
    `;
    document.querySelector('main').appendChild(footer);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ParticleEngine();
    injectFooter();
});