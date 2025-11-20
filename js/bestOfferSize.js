function fitText(el, maxWidth, minSize = 6, maxSize = 16) {
    let low = minSize;
    let high = maxSize;
    let size = maxSize;

    el.style.whiteSpace = 'nowrap';
    el.style.display = 'inline-block';

    while (high - low > 0.1) {
        size = (low + high) / 2;
        el.style.fontSize = size + "px";

        if (el.scrollWidth > maxWidth) {
            high = size;
        } else {
            low = size;
        }
    }
    el.style.fontSize = low + "px";
}

function adjustBestOfferText() {
    document.querySelectorAll(".best-offer").forEach(el => {
        const wrapper = el.closest(".best-offer-container");
        fitText(el, wrapper.clientWidth, 6, 13);
    });
}