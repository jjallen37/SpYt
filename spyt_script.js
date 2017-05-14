// Create reference to video element
var vid = document.getElementsByTagName('video')[0];
// Create Menu Div
var lCtrl = document.createElement("div");
lCtrl.setAttribute("id", "control-bar");
var rCtrl = document.createElement("div");
rCtrl.setAttribute("id", "control-bar");

// Create menu buttons
var rwBtn1 = createMenuButton('RW 1', function(e){
    vid.currentTime = vid.currentTime - INTERVAL_SMALL;
});
var rwBtn2 = createMenuButton('RW 2', function(e){
    vid.currentTime = vid.currentTime - INTERVAL_BIG;
});
var ffBtn1 = createMenuButton('FF 1', function(e){
    vid.currentTime = vid.currentTime + INTERVAL_SMALL;
});
var ffBtn2 = createMenuButton('FF 2', function(e){
    vid.currentTime = vid.currentTime + INTERVAL_SMALL;
});

// Add buttons to menu
lCtrl.appendChild(rwBtn1);
lCtrl.appendChild(rwBtn2);
lCtrl.appendChild(ffBtn1);
lCtrl.appendChild(ffBtn2);

// Add menu to body
// var body = document.body;
var body = document.getElementsByTagName("body")[0];
body.insertBefore(lCtrl, body.firstChild);

function createMenuButton(btnText, func) {
    var menuBtn = document.createElement('button');
    menuBtn.setAttribute('type', 'button');
    menuBtn.setAttribute('class', 'menu-btn');
    menuBtn.appendChild(document.createTextNode(btnText));
    menuBtn.addEventListener('click', func);
    return menuBtn;
}

//// Constants
var INTERVAL_SMALL = 5;
var INTERVAL_BIG = 10;
