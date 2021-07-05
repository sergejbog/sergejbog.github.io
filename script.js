let readMoreButtons = document.querySelectorAll(".movie__more");
let popups = document.querySelectorAll('.popup');
let popupsInside = document.querySelectorAll('.popup__window');

console.log(readMoreButtons);

readMoreButtons.forEach((elem, i) => {
    elem.addEventListener('click', e => {
        document.querySelector(`#${elem.dataset.popupType}`).classList.add('show_popup');
    }, );
});

popups.forEach(elem => {
    elem.addEventListener('click', e => {
        elem.classList.remove('show_popup');
    })
    
    elem.querySelector('a').addEventListener('click', e => {
        elem.classList.remove('show_popup');
    })
});

popupsInside.forEach(elem => {
    elem.addEventListener('click', e => {
        e.stopPropagation();
    })    
})