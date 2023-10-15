const blops = document.querySelectorAll(".blop");
let blopState = true;

function toggleOpacity() {
    blops.forEach(blop => {
        const currentOpacity = parseFloat(window.getComputedStyle(blop).getPropertyValue("opacity"));

        if (blopState) {
            blop.style.opacity = Math.max(currentOpacity + 0.5, 1);
        } else {
            blop.style.opacity = Math.max(currentOpacity - 0.5, 0);
        }
    });
    blopState = !blopState;
}

setInterval(toggleOpacity, 5000);