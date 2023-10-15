function createStars(type, quantity) 
{
    for (let i = 0; i < quantity; i++) 
    {
        var star = document.createElement('div');
        star.classList.add('star', `type-${type}`);

        star.style.left = `${randomNumber(1, 99)}%`;
        star.style.bottom = `${randomNumber(1, 99)}%`;
        star.style.opacity = `${randomNumber(parseFloat(type) * 0.15, 0.6)}`;
        star.style.animationDuration = `${randomNumber(50, 200)}s`;
        
        document.body.appendChild(star);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}
console.log(parseFloat(3) * 0.15)
createStars(1, 80);
createStars(2, 60);
createStars(3, 40);