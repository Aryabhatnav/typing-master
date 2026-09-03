let h = document.querySelector(".ds");

window.addEventListener('keydown', function(dets){

    if(dets.key === "Backspace"){
        h.textContent = h.textContent.slice(0,-1);
    }
    else if(dets.key===" "){
        h.textContent += " "
    }
    else{
        h.textContent += dets.key;
    }
})
 


const keyboardLayout = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BS"],
    
    ["TAB", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    
    ["CAPS", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "ENTER"],
    
    ["SHIFT", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT"],
    
    ["CTRL", "ALT", "SPACE", "ALT", "CTRL"]
];

const keyboard = document.querySelector(".keyboard");

keyboardLayout.forEach(function(row) {

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("keyboard-row");

    row.forEach(function(keyName) {

        const key = document.createElement("div");

        key.classList.add("key");

        key.dataset.key = keyName.toLowerCase();

        key.textContent = keyName;

        rowDiv.appendChild(key);
    });

    keyboard.appendChild(rowDiv);
});

document.addEventListener("keydown", function(event) {

    const key = document.querySelector(
        `[data-key="${event.key.toLowerCase()}"]`
    );

    if (key) {
        key.classList.add("active");
    }

});

document.addEventListener("keyup",function(event){

    const key2 = document.querySelector(
        `[data-key="${event.key.toLowerCase()}"]`
    );

    if(key2){
        key2.classList.remove("active")
    }
});

const up = document.querySelector(".upper .ds2")

function l1(){
    console.log("function chalu hai");

    up.classList.toggle("hhhh")
    // up.classList.toggle("ds2")

    document.activeElement.blur();
}
