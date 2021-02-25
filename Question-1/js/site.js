document.addEventListener('DOMContentLoaded', function () {
    // Get relevant elements
    const modalEl = document.querySelector('#cv-lightbox');
    const countEl = modalEl.querySelector('.modal__countdown');

    // Number of miliseconds in a minute
    const ONE_MINUTE = 60000;
    const TWO_MINUTES = 2 * ONE_MINUTE
    const endTimeOffer = new Date().getTime() + TWO_MINUTES;

    const id = setInterval(function () {
        const now =  new Date().getTime()
        const distance = endTimeOffer - now
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        const isElapsed = now > endTimeOffer;
        if (!isElapsed) {
            const trailingSeconds = 
            countEl.textContent = minutes + ':' + (seconds < 10 ? ('0' + seconds) : seconds);
        } else {
            countEl.textContent = '0:00'
            clearInterval(id)
        }
    }, 1000);
    
})
