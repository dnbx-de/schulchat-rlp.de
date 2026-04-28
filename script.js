(function() {
    // 1. Initialize Particle Canvas
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
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        draw() {
            ctx.fillStyle = '#003056';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < 60; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    init();
    animate();

    // 2. Inject Official Footer
    const footer = document.createElement('footer');
    footer.className = 'footer-note';
    footer.innerHTML = `
        <div class="footer-section">
            Geschützt durch <a href="https://dnbx.de" target="_blank">dnbx.de</a>
        </div>
        <div class="footer-section">
            Entwickelt von <a href="https://xpsystems.de" target="_blank">xpsystems.de</a> & 
            <a href="https://ternis-edv.de" target="_blank">ternis-edv.de</a>
        </div>
        <div class="footer-links">
            <a href="#">Impressum</a> &nbsp;•&nbsp; 
            <a href="#">Datenschutz</a> &nbsp;•&nbsp; 
            <a href="https://bildungslogin-rlp.de">Bildungslogin RLP</a>
        </div>
    `;
    document.querySelector('main').appendChild(footer);
})();