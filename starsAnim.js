var starsDiv = document.body.getElementsByClassName(`stars`);

function createStars(type, quantity) 
{
    var fragment = document.createDocumentFragment(); // Добавляем через 1 запрос

    for (let i = 0; i < quantity; i++) 
    {
        var star = document.createElement('div');
        star.classList.add('star', `type-${type}`);

        star.style.width = `${type}px`;
        star.style.height = `${type}px`;
        star.style.left = `${randomNumber(1, 99)}%`;
        star.style.bottom = `${randomNumber(1, 99)}%`;
        star.style.opacity = `${randomNumber(parseFloat(type) * 0.15, 0.6)}`;
        star.style.animationDuration = `${randomNumber(50, 200)}s`;

        fragment.appendChild(star);
    }
    console.log(fragment.childNodes)
    starsDiv[0].appendChild(fragment);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

createStars(1, 80);
createStars(2, 60);
createStars(3, 40);