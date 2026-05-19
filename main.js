// Leo Mullholland
//May 13th, 2026
//interactive-site

//DARK MODE
const btn = document.getElementById("dark-mode");

btn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

function toggleImage() {
    var img = document.getElementById('dark-mode');

    if (img.src.match("imgs/icon/darkmode.png")) {
        img.src = "imgs/icon/lightmode.png";
    } else {
        img.src = "imgs/icon/darkmode.png";
    }
}

//mouse hover image

const container = document.getElementById('tiltContainer');
const img = document.getElementById('tiltimage');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    img.style.transform = `rotateX(0deg) rotateY(0deg)`;
});