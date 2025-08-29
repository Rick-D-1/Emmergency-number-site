
// Heart Function
function HeartCountFunc() {
    const Heart = document.getElementById("heart-count");

    let Heartcount = parseInt(Heart.innerText);

    Heartcount += 1;
    Heart.innerText = Heartcount;
}

document.getElementById("heart-btn").addEventListener('click', function () {
    HeartCountFunc();
});

document.getElementById("heart-btn-1").addEventListener('click', function () {

    HeartCountFunc();

});
document.getElementById("heart-btn-2").addEventListener('click', function () {

    HeartCountFunc();

});
document.getElementById("heart-btn-3").addEventListener('click', function () {

    HeartCountFunc();

});
document.getElementById("heart-btn-4").addEventListener('click', function () {

    HeartCountFunc();

});
document.getElementById("heart-btn-5").addEventListener('click', function () {

    HeartCountFunc();

});
document.getElementById("heart-btn-6").addEventListener('click', function () {

    HeartCountFunc();

});
document.getElementById("heart-btn-7").addEventListener('click', function () {

    HeartCountFunc();

});
document.getElementById("heart-btn-8").addEventListener('click', function () {

    HeartCountFunc();

});



// Copy Function
const copyCounterElement = document.getElementById("copy-number");
let copyCount = parseInt(copyCounterElement.innerText) || 0;

const copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
    const button = copyButtons[i];
    button.addEventListener("click", function () {
        const card = button.closest(".card"); // find parent card
        if (!card) return;

        const numberEl = card.querySelector("[id^='NumAlrtTxt']");
        if (!numberEl) return;

        const numberText = numberEl.innerText;

        navigator.clipboard.writeText(numberText);
        alert("Number copied! " + numberText);

        copyCount++;
        copyCounterElement.innerText = copyCount;
    });
}

// Call Buttons
for (let i = 0; i <= 8; i++) {
    let buttonId = i === 0 ? "call-btn" : "call-btn-" + i;
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const alertId = i === 0 ? "AlrtTxt" : "AlrtTxt-" + i;
            const numberId = i === 0 ? "NumAlrtTxt" : "NumAlrtTxt-" + i;
            handleCall(alertId, numberId);
        });
    }
}

// Call History
let historyData = [];
const historyContainer = document.querySelector(".card-history");
const historyList = document.createElement("div");
historyList.id = "history-list";
historyContainer.appendChild(historyList);

// Get current time
function getTimeNow() {
    const now = new Date();
    return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

// Clear history function (moved outside)
function clearHistory() {
    historyList.innerHTML = "";
    historyData.forEach(item => {
        const div = document.createElement("div");
        div.className = "Call-Hist";
        div.innerHTML = `
            <div class="flex p-5 md:w-[20vw] bg-gray-100 rounded-2xl mx-5 my-2 justify-between items-center">
                <div>
                    <h1 class="font-semibold">${item.name}</h1>
                    <p class="text-gray-400">${item.number}</p>
                </div>
                <p>${item.time}</p>
            </div>
        `;
        historyList.appendChild(div);
    });
}

// Handle Call Function
function handleCall(alertId, numberId) {
    const alertText = document.getElementById(alertId).innerText;
    const numberText = document.getElementById(numberId).innerText;

    const coin = document.getElementById("coin-Count");
    let coinCount = parseInt(coin.innerText) || 0;

    if (coinCount < 20) {
        alert("Don't have enough coins");
        return;
    } else {
        alert("📞 Calling " + alertText + " " + numberText);
    }

    coinCount -= 20;
    coin.innerText = coinCount;

    historyData.push({
        name: alertText,
        number: numberText,
        time: getTimeNow()
    });

    clearHistory();
}

// Clear Button
const clearBtn = document.querySelector(".card-history button");
if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        historyData = [];
        clearHistory();
    });
}
