/* ── Hintergrund-Divs dynamisch einfügen (bleibt im JS, damit HTML sauber bleibt) ── */
(function () {
    const bgLayer = document.createElement('div');
    bgLayer.className = 'bg-layer';
    bgLayer.setAttribute('aria-hidden', 'true');
    document.body.prepend(bgLayer);

    const bgNoise = document.createElement('div');
    bgNoise.className = 'bg-noise';
    bgNoise.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bgNoise);

    const particleCanvas = document.createElement('canvas');
    particleCanvas.id = 'particle-canvas';
    particleCanvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(particleCanvas);

    /* Fußzeile */
    const footer = document.createElement('div');
    footer.className = 'footer-note';
    footer.innerHTML = 'Eine Initiative des <a href="https://bildungslogin-rlp.de" target="_blank" rel="noopener">Bildungslogin RLP</a> · Datenschutz & Impressum';
    document.querySelector('main').appendChild(footer);
})();