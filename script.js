// ============================================
// 💜 GIGI OS — MAIN SYSTEM
// ============================================


// ============================================
// LIVE CLOCK
// ============================================

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

updateClock();

setInterval(updateClock, 1000);


// ============================================
// APP WINDOW
// ============================================

const appWindow = document.querySelector("#appWindow");
const appTitle = document.querySelector("#appTitle");
const appContent = document.querySelector("#appContent");

const appClose = document.querySelector("#appClose");
const appMinimize = document.querySelector("#appMinimize");
const appMaximize = document.querySelector("#appMaximize");


// ============================================
// APP CONTENT
// ============================================

const apps = {

    manual: {

        title: "GIGI OS // USER MANUAL",

        content: `
            <h1>📖 Gigi Manual</h1>

            <p>
                Welcome to the official operating manual
                for Gigi.exe.
            </p>

            <div class="app-card">
                <h2>01 // BASIC OPERATION</h2>

                <p>
                    Gigi is a highly social, chaotic,
                    food-powered human system.
                </p>

                <span class="tag">social butterfly</span>
                <span class="tag">extroverted</span>
                <span class="tag">chaotic</span>
                <span class="tag">food-powered</span>
            </div>


            <div class="app-card">

                <h2>02 // SYSTEM REQUIREMENTS</h2>

                <p>
                    Required for optimal Gigi performance:
                </p>

                <p>
                    🍜 Good food<br>
                    👯 Friends<br>
                    🎮 Roblox / ML<br>
                    🎵 Music<br>
                    💜 Quality time<br>
                    📶 Stable WiFi
                </p>

            </div>


            <div class="app-card">

                <h2>03 // COMMUNICATION PROTOCOL</h2>

                <p>
                    If Gigi suddenly says
                    <strong>"WAIT I HAVE AN IDEA"</strong>,
                    stop whatever you're doing.
                </p>

                <p>
                    This is considered a Level 10
                    Priority Event.
                </p>

            </div>
        `
    },


    brain: {

        title: "GIGI OS // BRAIN.exe",

        content: `
            <h1>🧠 Gigi Brain</h1>

            <p>
                Internal thought-processing department.
            </p>


            <div class="app-card">

                <h2>CURRENT PROCESSES</h2>

                <p>
                    🧠 Overthinking<br>
                    🎵 Listening to music<br>
                    🍜 Thinking about food<br>
                    💡 Creating another idea<br>
                    💻 Learning coding
                </p>

            </div>


            <div class="app-card">

                <h2>KNOWN PERSONALITY SETTINGS</h2>

                <span class="tag">funny</span>
                <span class="tag">energetic</span>
                <span class="tag">friendly</span>
                <span class="tag">curious</span>
                <span class="tag">chaotic</span>

            </div>


            <div class="app-card">

                <h2>TRUST SYSTEM</h2>

                <p>
                    Trust is unlocked gradually.
                    Comfort level must reach 100% first.
                </p>

                <p>
                    ⚠️ Spilling secrets may permanently
                    damage the friendship connection.
                </p>

            </div>
        `
    },


    warnings: {

        title: "GIGI OS // WARNINGS",

        content: `
            <h1>⚠️ Warning Center</h1>

            <p>
                Please review these warnings before
                operating Gigi.exe.
            </p>


            <div class="warning-card">

                <strong>⚠️ WARNING 001</strong>

                <p>
                    Gigi may hit your shoulder.
                </p>

            </div>


            <div class="warning-card">

                <strong>⚠️ WARNING 002</strong>

                <p>
                    Mentioning food may immediately
                    activate the food department.
                </p>

            </div>


            <div class="warning-card">

                <strong>⚠️ WARNING 003</strong>

                <p>
                    If Gigi says "WAIT I HAVE AN IDEA,"
                    prepare for a sudden change of plans.
                </p>

            </div>


            <div class="warning-card">

                <strong>⚠️ WARNING 004</strong>

                <p>
                    Do not underestimate the power
                    of a bored Gigi.
                </p>

            </div>
        `
    },


    bugs: {

        title: "GIGI OS // KNOWN BUGS",

        content: `
            <h1>🐛 Known Bugs</h1>

            <p>
                Current bugs detected in Gigi.exe.
                Developers are working on absolutely nothing.
            </p>


            <div class="bug-card">

                <strong>BUG #001 — PROCRASTINATION.exe</strong>

                <p>
                    May activate when an important task
                    is approaching.
                </p>

            </div>


            <div class="bug-card">

                <strong>BUG #002 — IDEA OVERLOAD</strong>

                <p>
                    Gigi may suddenly generate 37 new
                    website ideas at once.
                </p>

            </div>


            <div class="bug-card">

                <strong>BUG #003 — TAKOYAKI.EXE</strong>

                <p>
                    System may consume takoyaki at
                    suspiciously high speeds.
                </p>

            </div>


            <div class="bug-card">

                <strong>BUG #004 — "WHATEVER"</strong>

                <p>
                    Frequently used response.
                    Actual meaning may vary.
                </p>

            </div>
        `
    },


    era: {

        title: "GIGI OS // CURRENT ERA",

        content: `
            <h1>🎵 Current Era</h1>

            <p>
                Loading Gigi's current interests...
            </p>


            <div class="app-card">

                <h2>🕷️ CURRENT OBSESSION</h2>

                <span class="tag">Spider-Man</span>
                <span class="tag">SpongeBob</span>
                <span class="tag">purple</span>

            </div>


            <div class="app-card">

                <h2>🎮 ACTIVE GAMES</h2>

                <span class="tag">Roblox</span>
                <span class="tag">Mobile Legends</span>

            </div>


            <div class="app-card">

                <h2>🎵 MUSIC DEPARTMENT</h2>

                <p>
                    Current artists in rotation:
                </p>

                <span class="tag">Taylor Swift</span>
                <span class="tag">Shanti Dope</span>
                <span class="tag">Malcolm Todd</span>

            </div>


            <div class="app-card">

                <h2>✈️ LONG-TERM QUEST</h2>

                <p>
                    Destination currently loaded:
                </p>

                <p>
                    <strong>🇫🇷 PARIS</strong>
                </p>

            </div>
        `
    },


    achievements: {

        title: "GIGI OS // ACHIEVEMENTS",

        content: `
            <h1>🏆 Achievements</h1>

            <p>
                Gigi's unlocked accomplishments.
            </p>


            <div class="app-card">

                <h2>🏆 SOCIAL BUTTERFLY</h2>

                <p>
                    Successfully maintained friendships
                    across multiple social circles.
                </p>

            </div>


            <div class="app-card">

                <h2>💻 CODER ARC</h2>

                <p>
                    Started learning how to build websites.
                </p>

            </div>


            <div class="app-card">

                <h2>🍜 TAKOYAKI CHAMPION</h2>

                <p>
                    Consumed 12 pieces of takoyaki
                    within 30 minutes.
                </p>

            </div>


            <div class="app-card">

                <h2>🚀 COMFORT ZONE ESCAPE</h2>

                <p>
                    Continues to try new things,
                    learn new skills, and grow.
                </p>

            </div>
        `
    }

};


// ============================================
// OPEN APP
// ============================================

function openApp(appName) {

    const app = apps[appName];

    if (!app) return;

    appTitle.textContent = app.title;

    appContent.innerHTML = app.content;

    appWindow.classList.remove("hidden");

}


// ============================================
// CLOSE APP
// ============================================

function closeApp() {

    appWindow.classList.add("hidden");

}

appClose.addEventListener("click", closeApp);


// ============================================
// MINIMIZE APP
// ============================================

appMinimize.addEventListener("click", function () {

    appWindow.classList.add("hidden");

});


// ============================================
// MAXIMIZE APP
// ============================================

let maximized = false;

appMaximize.addEventListener("click", function () {

    maximized = !maximized;

    if (maximized) {

        appWindow.style.width = "92vw";
        appWindow.style.height = "78vh";
        appWindow.style.maxHeight = "none";

    } else {

        appWindow.style.width = "";
        appWindow.style.height = "";
        appWindow.style.maxHeight = "";

    }

});


// ============================================
// DESKTOP ICONS
// ============================================

const desktopIcons =
    document.querySelectorAll(".desktop-icon");

desktopIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        const appName = icon.dataset.app;

        openApp(appName);

    });

});


// ============================================
// ENTER SYSTEM BUTTON
// ============================================

const startButton =
    document.querySelector(".start-button");

startButton.addEventListener("click", function () {

    openApp("manual");

});


// ============================================
// WELCOME WINDOW BUTTONS
// ============================================

const welcomeWindow =
    document.querySelector(".welcome-window");

const welcomeClose =
    document.querySelector(".window-close");

const welcomeMinimize =
    document.querySelector(".window-minimize");

welcomeClose.addEventListener("click", function () {

    welcomeWindow.style.display = "none";

});

welcomeMinimize.addEventListener("click", function () {

    welcomeWindow.style.display = "none";

});


// ============================================
// START MENU
// ============================================

const startMenu =
    document.querySelector(".start-menu");

startMenu.addEventListener("click", function () {

    welcomeWindow.style.display = "block";

});


// ============================================
// RANDOM SYSTEM MESSAGE
// ============================================

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

const randomMessage =
    messages[Math.floor(Math.random() * messages.length)];

console.log("💜 GIGI OS");
console.log(randomMessage);

// ============================================
// 🖱️ DRAGGABLE APP WINDOW
// ============================================

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const appHeader = document.querySelector(".app-window-header");

appHeader.addEventListener("mousedown", function (event) {

    if (event.target.tagName === "BUTTON") return;

    isDragging = true;

    const rect = appWindow.getBoundingClientRect();

    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    appWindow.style.transform = "none";

    appWindow.style.left = rect.left + "px";
    appWindow.style.top = rect.top + "px";

});


document.addEventListener("mousemove", function (event) {

    if (!isDragging) return;

    let newX = event.clientX - offsetX;
    let newY = event.clientY - offsetY;

    const maxX =
        window.innerWidth - appWindow.offsetWidth;

    const maxY =
        window.innerHeight - appWindow.offsetHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(45, Math.min(newY, maxY));

    appWindow.style.left = newX + "px";
    appWindow.style.top = newY + "px";

});


document.addEventListener("mouseup", function () {

    isDragging = false;

});
