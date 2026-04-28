/**
 * Schulchat-RLP - Dynamic UI Engine
 * Particle System + Official Footer Injection
 */

const UI = {
    init() {
        this.injectBackground();
        this.initParticles();
        this.injectFooter();
    },

    injectBackground() {
        const mesh = document.createElement('div');
        mesh.className = 'mesh-bg';
        document.body.prepend(mesh);

        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        document.body.prepend(canvas);
    },

    injectFooter() {
        const footer = document.createElement('footer');
        footer.className = 'footer-note';
        footer.innerHTML = `
            <span class="footer-credit">Geschützt durch <strong>dnbx.de</strong></span>
            <div>Entwickelt von <a href="https://xpsystems.de" target="_blank">xpsystems.de</a> & <a href="https://ternis-edv.de" target="_blank">ternis-edv.de</a></div>
            <div class="footer-links">
                <a href="#">Impressum</a>
                <a href="#">Datenschutz</a>
                <a href="https://bildungslogin-rlp.de">Bildungslogin RLP</a>
            </div>
        `;
        document.querySelector('.glass-card').appendChild(footer);
    },

    initParticles() {
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = window.innerWidth < 480 ? 40 : 100; // Optimization for Mobile

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = Math.random() * 0.4 - 0.2;
                this.speedY = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(23, 147, 213, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function createParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Draw lines between nearby particles for "Network" look
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.strokeStyle = `rgba(23, 147, 213, ${0.15 - distance / 800})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        createParticles();
        animate();
    }
};

document.addEventListener('DOMContentLoaded', () => UI.init());