// Create reference to video element
var vid = document.getElementsByTagName('video')[0];

// Create Menu Divs
var lCtrl = document.createElement("div");
lCtrl.setAttribute("class", "menu-div");
lCtrl.setAttribute("id", "left-ctrl");
var rCtrl = document.createElement("div");
rCtrl.setAttribute("class", "menu-div");
rCtrl.setAttribute("id", "right-ctrl");

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
rCtrl.appendChild(ffBtn1);
rCtrl.appendChild(ffBtn2);

// Add menu to body
// var body = document.body;
var body = document.getElementsByTagName("body")[0];
body.insertBefore(rCtrl, body.firstChild);
body.insertBefore(lCtrl, body.firstChild);

/*
    Functions and Constants
*/ 
// Factory function to make menu buttons  
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
