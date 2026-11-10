// ============================================
// JAVASCRIPT MOUSE EVENTS
// ============================================

// 1. SELECT ELEMENTS
const myBtn = document.querySelector("#myBtn");
const dblBtn = document.querySelector("#dblBtn");
const clickMessage = document.querySelector("#clickMessage");

const box = document.querySelector("#box");
const trackerArea = document.querySelector("#trackerArea");
const coords = document.querySelector("#coords");

const rightClickBox = document.querySelector("#rightClickBox");
const rightClickMsg = document.querySelector("#rightClickMsg");


// ============================================
// 1. CLICK EVENT ('click')
// Triggers when user clicks once
// ============================================
myBtn.addEventListener("click", function() {
    clickMessage.textContent = "Status: Single click detected!";
    clickMessage.style.color = "blue";
});


// ============================================
// 2. DOUBLE CLICK EVENT ('dblclick')
// Triggers when user double-clicks rapidly
// ============================================
dblBtn.addEventListener("dblclick", function() {
    clickMessage.textContent = "Status: Double click detected!";
    clickMessage.style.color = "green";
});


// ============================================
// 3. MOUSE ENTER & LEAVE ('mouseenter', 'mouseleave')
// Triggers when cursor enters or leaves the boundary
// ============================================
box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "#2ecc71"; // green
    box.style.color = "white";
    box.textContent = "Mouse entered the box!";
});

box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "#ecf0f1"; // grey
    box.style.color = "#333";
    box.textContent = "Mouse left the box!";
});


// ============================================
// 4. MOUSE DOWN & UP ('mousedown', 'mouseup')
// 'mousedown' = key/button is pushed down
// 'mouseup'   = key/button is released
// ============================================
box.addEventListener("mousedown", function() {
    box.style.backgroundColor = "#e74c3c"; // red
    box.textContent = "Mouse button held DOWN!";
});

box.addEventListener("mouseup", function() {
    box.style.backgroundColor = "#f39c12"; // orange
    box.textContent = "Mouse button RELEASED!";
});


// ============================================
// 5. MOUSE MOVE EVENT ('mousemove')
// Triggers continuously as the mouse moves
// ============================================
trackerArea.addEventListener("mousemove", function(event) {
    // offsetX & offsetY: coordinates relative to the tracker box
    const x = event.offsetX;
    const y = event.offsetY;

    coords.textContent = `Coordinates inside box: X: ${x} | Y: ${y}`;
});


// ============================================
// 6. CONTEXT MENU EVENT ('contextmenu' -> Right Click)
// Use event.preventDefault() to override default browser menu
// ============================================
rightClickBox.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Stop default browser right-click menu
    rightClickMsg.textContent = "Custom Right-Click triggered at " + new Date().toLocaleTimeString();
    rightClickMsg.style.color = "#8e44ad";
});