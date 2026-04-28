(function() {
    // 1. Initialize Background Effects
    const bg = document.createElement('div');
    bg.className = 'aurora-bg';
    document.body.prepend(bg);

    // 2. Build the Official Footer
    const footer = document.createElement('footer');
    footer.className = 'official-footer';

    footer.innerHTML = `
        <div class="footer-top">
            <p>Geschützt durch <strong>dnbx.de</strong></p>
            <p>Entwickelt von 
                <a href="https://xpsystems.de" target="_blank">xpsystems.de</a> & 
                <a href="https://ternis-edv.de" target="_blank">ternis-edv.de</a>
            </p>
        </div>
        <div class="footer-bottom">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="https://bildungslogin-rlp.de">Bildungslogin</a>
        </div>
    `;

    // Append to main or app-root
    document.querySelector('main').appendChild(footer);

    // 3. Subtle Mobile Interaction
    // Slightly tilts the card on mobile orientation change
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) => {
            const card = document.querySelector('.glass-card');
            const tiltX = (e.beta / 20).toFixed(2);
            const tiltY = (e.gamma / 20).toFixed(2);
            card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });
    }
})();