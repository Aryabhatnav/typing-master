// ======================================================
// TYPING AREA
// ======================================================

const h = document.querySelector(".ds");


// ======================================================
// PRACTICE TEXT AREA
// ======================================================

const lessonText = document.querySelector(".ds2");


// ======================================================
// TYPING SYSTEM
// ======================================================

window.addEventListener("keydown", function (event) {

    // Ignore special keys
    if (
        event.key === "Shift" ||
        event.key === "Control" ||
        event.key === "Alt" ||
        event.key === "Tab" ||
        event.key === "CapsLock" ||
        event.key === "Enter"
    ) {
        return;
    }


    // BACKSPACE
    if (event.key === "Backspace") {

        h.textContent = h.textContent.slice(0, -1);

    }


    // SPACE
    else if (event.key === " ") {

        h.textContent += " ";

    }


    // NORMAL CHARACTERS
    else if (event.key.length === 1) {

        h.textContent += event.key;

    }

});


// ======================================================
// VIRTUAL KEYBOARD
// ======================================================

const keyboardLayout = [

    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BS"],

    ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],

    ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],

    ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT"],

    ["CTRL", "ALT", "SPACE", "ALT", "CTRL"]

];


const keyboard = document.querySelector(".keyboard");


// ======================================================
// CREATE KEYBOARD
// ======================================================

keyboardLayout.forEach(function (row) {

    const rowDiv = document.createElement("div");

    rowDiv.classList.add("keyboard-row");


    row.forEach(function (keyName) {

        const key = document.createElement("div");

        key.classList.add("key");


        // Store key name
        key.dataset.key = keyName.toLowerCase();


        // Show key name
        key.textContent = keyName;


        rowDiv.appendChild(key);

    });


    keyboard.appendChild(rowDiv);

});


// ======================================================
// KEYBOARD GLOW - KEYDOWN
// ======================================================

document.addEventListener("keydown", function (event) {

    let keyName = event.key.toLowerCase();


    // Special keys

    if (event.key === " ") {
        keyName = "space";
    }

    if (event.key === "Backspace") {
        keyName = "bs";
    }

    if (event.key === "Control") {
        keyName = "ctrl";
    }

    if (event.key === "CapsLock") {
        keyName = "caps";
    }

    if (event.key === "Tab") {
        keyName = "tab";
    }

    if (event.key === "Enter") {
        keyName = "enter";
    }


    const key = document.querySelector(
        `[data-key="${keyName}"]`
    );


    if (key) {

        key.classList.add("active");

    }

});


// ======================================================
// KEYBOARD GLOW - KEYUP
// ======================================================

document.addEventListener("keyup", function (event) {

    let keyName = event.key.toLowerCase();


    // Special keys

    if (event.key === " ") {
        keyName = "space";
    }

    if (event.key === "Backspace") {
        keyName = "bs";
    }

    if (event.key === "Control") {
        keyName = "ctrl";
    }

    if (event.key === "CapsLock") {
        keyName = "caps";
    }

    if (event.key === "Tab") {
        keyName = "tab";
    }

    if (event.key === "Enter") {
        keyName = "enter";
    }


    const key = document.querySelector(
        `[data-key="${keyName}"]`
    );


    if (key) {

        key.classList.remove("active");

    }

});


// ======================================================
// LESSON SYSTEM
// ======================================================

function selectLesson(text) {

    // Put practice sentence above
    lessonText.textContent = text;


    // Clear previous typing
    h.textContent = "";


    // Remove focus from lesson button
    document.activeElement.blur();

}


// ======================================================
// LESSON 1
// ======================================================

function l1() {

    selectLesson("asdf jkl;");

}


// ======================================================
// LESSON 2
// ======================================================

function l2() {

    selectLesson("asdf jkl; asdf jkl;");

}


// ======================================================
// LESSON 3
// ======================================================

function l3() {

    selectLesson("a s d f j k l ;");

}


// ======================================================
// LESSON 4
// ======================================================

function l4() {

    selectLesson("fj fj dk dk sl sl");

}


// ======================================================
// LESSON 5
// ======================================================

function l5() {

    selectLesson("the quick brown fox");

}


// ======================================================
// LESSON 6
// ======================================================

function l6() {

    selectLesson(
        "the quick brown fox jumps over the lazy dog"
    );

}


// ======================================================
// LESSON 7
// ======================================================

function l7() {

    selectLesson(
        "hello world this is typing practice"
    );

}


// ======================================================
// LESSON 8
// ======================================================

function l8() {

    selectLesson(
        "javascript is fun to learn"
    );

}


// ======================================================
// LESSON 9
// ======================================================

function l9() {

    selectLesson(
        "practice makes your typing faster"
    );

}


// ======================================================
// LESSON 10
// ======================================================

function l10() {

    selectLesson(
        "the more you practice the better your typing accuracy becomes"
    );

}