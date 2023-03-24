const items = document.querySelectorAll(".item");
console.log(items);

items.forEach(item => {
    item.addEventListener("mouseover", () => {
        removeFocus();
        item.classList.add("selected");
    })


    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove("selected");
        })
    }
})


function storeCountDown() {
    const storeDate = new Date ("July 18, 2023 10:00");
    const now = new Date ();
    const diff = storeDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        storeArrived();

        const store = document.querySelectorAll(".store");
        const two = document.querySelectorAll("h2")
        store.forEach(function(item) {
            item.classList.add("green")
        }) 
        two.forEach(function(item) {
            item.classList.add("green")
        })
        

    }
}

let timerID = setInterval(storeCountDown, 1000);

function storeArrived(){
    const heading = document.querySelector("h1");
    heading.textContent = "WE ARE OPEN!!!"
    heading.classList.add("second");
}


