    const buttons = document.querySelectorAll('.btn');

    function toggle(index) {
      switch(index) {
        case 0: // Toggle self and every 3rd button (1-based: 3, 6)
          [0, 2, 5].forEach(i => toggleBtn(i));
          break;
        case 1: // Toggle adjacent buttons only
          if (index > 0) toggleBtn(index - 1);
          if (index < buttons.length - 1) toggleBtn(index + 1);
          break;
        case 2: // Toggle primes (1-based: 2, 3, 5, 7 → 1, 2, 4, 6)
          [1, 2, 4, 6].forEach(i => toggleBtn(i));
          break;
        case 3: // Toggle buttons NOT divisible by 2 or 3 (1-based: 1, 5, 7 → 0, 4, 6)
          [0, 4, 6].forEach(i => toggleBtn(i));
          break;
        case 4: // Toggle buttons two places away (i-2 and i+2)
          if (index - 2 >= 0) toggleBtn(index - 2);
          if (index + 2 < buttons.length) toggleBtn(index + 2);
          break;
        case 5: // Toggle all except self
          buttons.forEach((btn, i) => {
            if (i !== index) toggleBtn(i);
          });
          break;
        case 6: // Toggle even-numbered (1-based: 2, 4, 6 → 1, 3, 5)
          [1, 3, 5].forEach(i => toggleBtn(i));
          break;
      }
      checkWin();
    }

    function toggleBtn(i) {
      buttons[i].classList.toggle('on');
    }

    function checkWin() {
      const allOn = [...buttons].every(btn => btn.classList.contains('on'));
      document.getElementById('message').textContent = allOn ? 'You are doing well, your next word is ticket. Here is your last clue in this line: https://www.mediafire.com/file/v6lop69yhryj4gz/clue_6.png/file' : '';
    }

    function resetButtons() {
      buttons.forEach(btn => btn.classList.remove('on'));
      document.getElementById('message').textContent = '';
    }