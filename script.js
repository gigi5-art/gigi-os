// ================================
// GIGI OS — MAIN SYSTEM
// ================================


// LIVE CLOCK
function updateClock() {

    const clock = document.querySelector(".clock");

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    minutes = minutes.toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes} ${ampm}`;
}


// Update clock immediately
updateClock();


// Update every second
setInterval(updateClock, 1000);


// =================================
// WELCOME BUTTON
// =================================

const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function () {

    alert(
        "💜 GIGI OS\n\n" +
        "System initialized.\n" +
        "Welcome to the official operating manual of Gigi."
    );

});


// =================================
// DESKTOP ICON INTERACTIONS
// =================================

const desktopIcons = document.querySelectorAll(".desktop-icon");

desktopIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        const name = icon.querySelector("span").textContent;

        alert(
            `📂 ${name}\n\n` +
            "This section is currently under development.\n\n" +
            "Gigi is probably making it more complicated."
        );

    });

});


// =================================
// RANDOM SYSTEM MESSAGE
// =================================

const messages = [
    "Gigi.exe is running normally.",
    "WARNING: excessive chaos detected.",
    "System status: somehow functioning.",
    "Reminder: Gigi probably has another idea.",
    "Current task: absolutely questionable.",
    "Background process: overthinking.",
    "Background process: listening to music.",
    "Background process: thinking about food.",
    "System note: please do not disturb Gigi.",
    "Everything is under control. Probably."
];


// Show a random message in console
const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

console.log("💜 GIGI OS");
console.log(randomMessage);
