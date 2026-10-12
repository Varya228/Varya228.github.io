console.log("hello");


const reels = ['a','🍒', '🍋', '🍇', '🍌', '💎', '7️⃣'];
    let isSpinning = false;
    var hello=1;

    function spin() {
      if (isSpinning) return;
      isSpinning = true;

      const r1 = document.getElementById('r1');
      const r2 = document.getElementById('r2');
      const r3 = document.getElementById('r3');
      const result = document.getElementById('result');

      // Простая анимация прокрутки
      const interval = setInterval(() => {
        r1.textContent = reels[Math.floor(Math.random() * reels.length)];
        r2.textContent = reels[Math.floor(Math.random() * reels.length)];
        r3.textContent = reels[Math.floor(Math.random() * reels.length)];
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        const v1 = r1.textContent;
        const v2 = r2.textContent;
        const v3 = r3.textContent;

        if (v1 === v2 && v2 === v3) {
          result.textContent = '🎉 Победа! Три одинаковых символа!';
          result.style.color = '#ffd700';
        } else {
          result.textContent = '😕 Попробуйте ещё раз!';
          result.style.color = '#fff';
        }
        isSpinning = false;
      }, 2000); // длительность вращения
    }