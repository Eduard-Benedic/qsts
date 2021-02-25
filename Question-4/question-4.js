
function select(selector, all) {
    if (all) return document.querySelectorAll(selector)
    return document.querySelector(selector)
}

function doDiscount(originalPrice, discountBy) {
    let newPrice;
    if (typeof originalPrice == 'string') {
        newPrice = (originalPrice - parseFloat(originalPrice) * (discountBy / 100));
        return newPrice.toFixed(2)
    }
    if (typeof originalPrice == 'number') {
        newPrice = (originalPrice - originalPrice * (discountBy / 100))
        return newPrice.toFixed(2)
    }
    throw new Error('Original price must be string or number')
}

function process(items) {
    // If no second item return
    if (items.length <= 1) return
    
    const secondProduct = items[1];
    const priceEl = secondProduct.querySelector('.price-sales')
    const price = priceEl.getAttribute('data-price')
    priceEl.style.color = 'red'
    priceEl.textContent = doDiscount(price, 10)
}


document.addEventListener('DOMContentLoaded', function () {
    const searchItems = select('.product-price', true)
    process(searchItems)   
    const wrapperEl = select('.main-wrapper', false)
    wrapperEl.addEventListener('click', (e) => {
        setTimeout(() => {
            // Every time there is a click on the wrapper
            // check the items again
            const searchItems = select('.product-price', true)
            process(searchItems)    
        },1000)
    })
})
const loadedEvent = new Event('DOMContentLoaded');

document.dispatchEvent(loadedEvent)

