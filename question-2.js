
function bindListener(elements, event, handler) {
    elements.forEach(el => {
        el.addEventListener(event, handler);
    })
}

const radioBtns = document.querySelectorAll('input[type="radio"]');


bindListener(radioBtns, 'click', (e) => {
    const target = e.target;
    alert(target.value)
})