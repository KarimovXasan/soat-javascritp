const timeEl = document.querySelector('#Time');
const btn = document.querySelector("#stop")


let write = setInterval(() => {
    let now = new Date();
    let hour = now.getHours();
    let minut = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();

    timeEl.textContent =
        `${hour}:${minut.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${milliseconds.toString().slice(0, 2)}`
}, 100)

btn.addEventListener('click', function(){
    clearInterval(write)
})