const counter = document.createElement('p');
counter.textContent = 'Clicks' ;
document.body.appendChild(counter);
buyLinks.forEach(link => {
    link.addEventListener('click', () => {
        // totalClicks++;
        counter.textContent = `Clicks totales: ${totalClicks}`;
    });
});