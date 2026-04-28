(function() {
    // 1. Create Ambient Background
    const viewport = document.getElementById('viewport');
    
    const ambient = document.createElement('div');
    ambient.className = 'bg-ambient';
    document.body.prepend(ambient);

    const noise = document.createElement('div');
    noise.className = 'bg-noise';
    document.body.appendChild(noise);

    // 2. Build the Footer (Professional Layout)
    const card = document.querySelector('.portal-card');
    const footer = document.createElement('footer');
    footer.className = 'portal-footer';

    footer.innerHTML = `
        <div class="footer-credits">
            Geschützt durch <strong>dnbx.de</strong><br>
            Entwickelt von 
            <a href="https://xpsystems.de" target="_blank" style="color:var(--text-high); text-decoration:none;">xpsystems.de</a> & 
            <a href="https://ternis-edv.de" target="_blank" style="color:var(--text-high); text-decoration:none;">ternis-edv.de</a>
        </div>
        <div class="footer-links">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="https://bildungslogin-rlp.de">Bildungslogin RLP</a>
        </div>
    `;

    card.appendChild(footer);

    // 3. Performance: Passive Tilt Effect (Desktop Only)
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            card.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
        });
    }
})();