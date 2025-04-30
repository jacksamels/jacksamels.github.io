setInterval(() => {
  const grid = document.getElementById("slideshowGrid");
  const slides = Array.from(grid.children);
  for (let i = slides.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    grid.appendChild(slides[j]);
  }
}, 12000);