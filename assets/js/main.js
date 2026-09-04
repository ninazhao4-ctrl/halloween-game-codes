const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.nav');if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});nav.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')})}document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}));
const countdownPanel = document.getElementById("launch-countdown");

if (countdownPanel) {
  const launchDate = new Date("2026-09-08T00:00:00");

  const daysElement = document.getElementById("countdown-days");
  const hoursElement = document.getElementById("countdown-hours");
  const minutesElement = document.getElementById("countdown-minutes");
  const secondsElement = document.getElementById("countdown-seconds");

  const formatNumber = (number) => String(number).padStart(2, "0");

  const updateCountdown = () => {
    const remaining = launchDate.getTime() - Date.now();

    if (remaining <= 0) {
      clearInterval(countdownTimer);

      countdownPanel.innerHTML = `
        <div class="countdown-content launch-live">
          <span class="status-label">
            <span class="dot"></span>
            Full Launch
          </span>
          <h2>The Game Is<br><span>Now Available</span></h2>
          <p>
            We are checking the full release for verified codes,
            redemption features, and launch updates.
          </p>
        </div>
      `;

      return;
    }

    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    daysElement.textContent = formatNumber(days);
    hoursElement.textContent = formatNumber(hours);
    minutesElement.textContent = formatNumber(minutes);
    secondsElement.textContent = formatNumber(seconds);
  };

  updateCountdown();
  const countdownTimer = setInterval(updateCountdown, 1000);
}
