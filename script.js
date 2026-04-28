(function () {
    // Inject Background Elements
    const bgLayer = document.createElement('div');
    bgLayer.className = 'bg-layer';
    document.body.prepend(bgLayer);

    const bgNoise = document.createElement('div');
    bgNoise.className = 'bg-noise';
    document.body.appendChild(bgNoise);

    // Create Footer with requested info
    const footer = document.createElement('div');
    footer.className = 'footer-note';
    
    footer.innerHTML = `
        <div class="security-info">
            Geschützt durch <a href="https://dnbx.de" target="_blank" rel="noopener">dnbx.de</a>
        </div>
        <div class="footer-links">
            <span>Entwickelt von 
                <a href="https://xpsystems.de" target="_blank" rel="noopener">xpsystems.de</a> & 
                <a href="https://ternis-edv.de" target="_blank" rel="noopener">ternis-edv.de</a>
            </span>
        </div>
        <div class="footer-links" style="margin-top: 12px; opacity: 0.7;">
            <a href="#">Datenschutz</a>
            <span class="separator">|</span>
            <a href="#">Impressum</a>
            <span class="separator">|</span>
            <a href="https://bildungslogin-rlp.de" target="_blank">Bildungslogin RLP</a>
        </div>
    `;
    
    document.querySelector('main').appendChild(footer);
})();