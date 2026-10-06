const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent =
    "Okay... 🥺 But Somya is still waiting for a little forgiveness.";

  yesBtn.textContent = "Okay, I'll forgive you eventually 😌";
});

noBtn.addEventListener("click", () => {
  response.textContent =
    "Yayyy! ❤️ Somya can finally breathe again. 🥹";

  noBtn.textContent = "I knew it! ❤️";

  createHearts(18);
});

function createHearts(count = 8) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "❤️" : "💕";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 20 + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6500);
  }
}

setInterval(() => createHearts(1), 1200);
