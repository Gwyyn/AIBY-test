const yearlyInput = document.getElementById("yearlyAccess");
const bestOffer = document.querySelector(".best-offer");

function updateBestOfferColor() {
    if (yearlyInput.checked) {
        bestOffer.style.color = "#ffffff";
    } else {
        bestOffer.style.color = "#141131";
    }
}

updateBestOfferColor();

document.querySelectorAll('input[name="choose"]').forEach(input => {
    input.addEventListener('change', updateBestOfferColor);
});