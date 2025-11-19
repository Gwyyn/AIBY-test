document.getElementById('continue-btn').addEventListener('click', () => {
    const yearly = document.getElementById('yearlyAccess').checked;

    if (yearly) {
        window.location.href = "https://apple.com/";
    } else {
        window.location.href = "https://google.com/";
    }
});