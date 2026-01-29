const e = document.querySelector(".progress");

let progress = 0;

const interval = setInterval(() => {
    progress += 10;

    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }

    e.style.width = progress + "%";
}, 500);
