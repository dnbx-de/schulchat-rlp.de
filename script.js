
        (function() {
            const card = document.querySelector('.portal-card');
            const footerContainer = document.getElementById('footerContainer');
            const loginBtn = document.getElementById('loginBtn');
            const btnText = document.getElementById('btnText');
            const statusIndicator = document.querySelector('.status-indicator');

            // 1. Build the Footer (Merging Source 1 notice with Source 2 layout)
            footerContainer.innerHTML = `
                <div class="training-notice">
                    Schulungsumgebung • Bereitgestellt durch xpsystems.eu
                </div>
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

            // 2. Button Interaction Simulation (Merging Loader Logic)
            loginBtn.addEventListener('click', function(e) {
                // If it were a real app, we might stop propagation if JS validation fails
                // Here we just simulate the visual feedback
                
                // Prevent immediate navigation for demo purposes
                // In production, remove e.preventDefault() or add actual logic
                // e.preventDefault(); 
                
                // Activate Loading State
                loginBtn.classList.add('loading');
                btnText.textContent = "Verbindung wird hergestellt...";
                
                // Update Status Indicator
                statusIndicator.innerHTML = '<span class="dot" style="background:#fbbf24; box-shadow:0 0 8px #fbbf24;"></span> Verbindungsaufbau';
                
                // Optional: Reset after 2 seconds (Demo only)
                setTimeout(() => {
                    // loginBtn.classList.remove('loading');
                    // btnText.textContent = "Mit Bildungslogin anmelden";
                    // statusIndicator.innerHTML = '<span class="dot"></span> System bereit';
                }, 3000);
            });

            // 3. Performance: Passive Tilt Effect (Desktop Only)
            // Source 2 Logic
            if (window.matchMedia("(min-width: 1024px)").matches) {
                document.addEventListener('mousemove', (e) => {
                    const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
                    const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
                    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
                });
                
                // Reset on mouse leave
                document.addEventListener('mouseleave', () => {
                    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
                });
            }
        })();