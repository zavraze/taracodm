const wrap = document.querySelector('.wrap');
const question = document.querySelector('.question');
const pic = document.querySelector('.pic');
const taraBtn = document.querySelector('.tara-btn');
const passBtn = document.querySelector('.pass-btn');

taraBtn.addEventListener("click", () => {
    question.innerHTML = "MAG OPEN KA NAAAAA!";
    pic.src = "lets.gif"
})

passBtn.addEventListener('mouseover', () => {
    const passBtnRect = passBtn.getBoundingClientRect();
    const maxX = window.innerWidth - passBtnRect.width;
    const maxY = window.innerHeight - passBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    passBtn.style.left = randomX + 'px';
    passBtn.style.top = randomY + 'px';
})