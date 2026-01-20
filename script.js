function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "yaramlove") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    document.getElementById("error").innerText = "❌ Wrong password";
  }
}

function openGift() {
  document.getElementById("giftText").innerText =
    "🎉 You are my forever gift, Yaram Ki Jan 💖";
}

const birthday = new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${d} Days ${h} Hours ${m} Minutes ${s} Seconds`;
}, 1000);

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  music.paused ? music.play() : music.pause();
}