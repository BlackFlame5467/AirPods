const chooseItem = document.querySelectorAll('.color__inner-btn');
const contentItem = document.querySelectorAll('.content__item');

chooseItem.forEach(function(element){
    element.addEventListener('click', change);
});

function change(event) {
    const target = event.currentTarget;
    const button = target.dataset.button;
    const changeItem = document.querySelectorAll(`.${button}`);

    console.log(changeItem);


    chooseItem.forEach(function(item) {
        item.classList.remove('color__inner-btn--active');
    })

    target.classList.add('color__inner-btn--active');

    contentItem.forEach(function(item) {
        item.classList.remove('content__item--active');
    })

    changeItem.forEach(function(item){
        item.classList.add('content__item--active');
    })
}