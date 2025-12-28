 
    // Helper to decide button text color based on background
    function getContrastYIQ(hexcolor){
      hexcolor = hexcolor.replace("#", "");
      const r = parseInt(hexcolor.substr(0,2),16);
      const g = parseInt(hexcolor.substr(2,2),16);
      const b = parseInt(hexcolor.substr(4,2),16);
      const yiq = ((r*299)+(g*587)+(b*114))/1000;
      return (yiq >= 128) ? 'black' : 'white';
    }
    let count = 0;
    let darkMode = false;
    
    const countEl = document.getElementById("count");
    const body = document.body;
    const modeBtn = document.querySelector(".mode-btn");
    const buttons = document.querySelectorAll("button:not(.mode-btn)");
    
    function animateNumber() {
      countEl.classList.add("animate");
      setTimeout(() => {
        countEl.classList.remove("animate");
      }, 300);
    }

    function updateDisplay() {
      countEl.textContent = count;
      animateNumber();
    }

    function increment() {
      count++;
      updateDisplay();
    }

    function decrement() {
      if (count > 0) {
        count--;
        updateDisplay();
      }
    }

    function reset() {
      count = 0;
      updateDisplay();
    }

    function toggleMode() {
      darkMode = !darkMode;
      body.className = darkMode ? "dark" : "light";
      modeBtn.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    }

    function changeButtonColor(color) {
      buttons.forEach(btn => {
        btn.style.backgroundColor = color;
        btn.style.color = getContrastYIQ(color);
      });
    }