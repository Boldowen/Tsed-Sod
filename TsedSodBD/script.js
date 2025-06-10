// Create floating background particles
    function createParticles() {
      const container = document.getElementById('particles');
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(particle);
      }
    }

    // Create fireworks animation
    function createFirework(x, y) {
      const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
      const fireworksContainer = document.getElementById('fireworks');
      
      for (let i = 0; i < 12; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';
        firework.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (i * 30) * Math.PI / 180;
        const distance = Math.random() * 100 + 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        firework.style.setProperty('--dx', dx + 'px');
        firework.style.setProperty('--dy', dy + 'px');
        firework.style.animationDelay = Math.random() * 0.3 + 's';
        
        fireworksContainer.appendChild(firework);
        
        setTimeout(() => {
          firework.remove();
        }, 2000);
      }
    }

    // Random fireworks
    function randomFireworks() {
      setInterval(() => {
        if (!document.getElementById('overlay').classList.contains('hidden')) return;
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.6;
        createFirework(x, y);
      }, 2000);
    }

    function submitName() {
      const name = document.getElementById('nameInput').value.trim();
      if (name) {
        document.getElementById('guestName').textContent = name;
        const overlay = document.getElementById('overlay');
        overlay.classList.add('hidden');
        
        setTimeout(() => {
          const card = document.getElementById('card');
          card.classList.add('show');
          
          // Celebration fireworks
          setTimeout(() => {
            for (let i = 0; i < 5; i++) {
              setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight * 0.5;
                createFirework(x, y);
              }, i * 300);
            }
          }, 500);
        }, 500);
      }
    }

    function rsvp() {
      document.getElementById('thanks').style.display = 'block';
      
      // Celebration fireworks
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight * 0.6;
          createFirework(x, y);
        }, i * 200);
      }
    }

    // Allow Enter key to submit name
    document.getElementById('nameInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        submitName();
      }
    });

    // Initialize
    createParticles();
    randomFireworks();