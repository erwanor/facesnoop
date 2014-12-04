var frame = document.createElement("frame");
ifram.src  = chrome.extension.getURL("addremove.html");
var div    = document.getElementById("endFlyoutContent");
div.appendChild(frame);
