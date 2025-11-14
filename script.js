// Elemen
const openBtn = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let isPlaying = false;

// Fungsi buka undangan
openBtn.addEventListener("click", () => {
  cover.classList.add("hidden-section");
  invitation.classList.remove("hidden-section");
  invitation.classList.add("fade-in");

  // Mainkan musik
  bgMusic.play().then(() => {
    isPlaying = true;
    musicToggle.textContent = "🔊";
  }).catch(err => {
    console.log("Autoplay diblokir browser, user perlu klik toggle musik.");
  });
});

// Toggle musik
musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    isPlaying = false;
    musicToggle.textContent = "🔈";
  } else {
    bgMusic.play();
    isPlaying = true;
    musicToggle.textContent = "🔊";
  }
});

// Countdown
const countdownEl = document.getElementById("countdown");
const targetDate = new Date("2025-12-11T10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "Acara telah berlangsung 🌸";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik lagi`;
}
setInterval(updateCountdown, 1000);

function copyRekening(id) {
    const text = document.getElementById(id).textContent.trim();
    navigator.clipboard.writeText(text)
      .then(() => {
        // ubah teks tombol jadi "✅ Disalin!" sebentar
        const button = event.target;
        const original = button.textContent;
        button.textContent = "✅ Disalin!";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = original;
          button.disabled = false;
        }, 1500);
      })
      .catch(err => {
        alert("Gagal menyalin nomor rekening 😅");
        console.error(err);
      });
  }
