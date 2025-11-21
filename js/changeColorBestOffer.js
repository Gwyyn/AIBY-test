const yearlyInput = document.getElementById("yearlyAccess");
const bestOffer = document.querySelector(".best-offer");

function updateBestOfferColor() {
    if (yearlyInput.checked) {
        bestOffer.style.color = "#141131";
    } else {
        bestOffer.style.color = "#ffffff";
    }
}

updateBestOfferColor();

document.querySelectorAll('input[name="choose"]').forEach(input => {
    input.addEventListener('change', updateBestOfferColor);
});