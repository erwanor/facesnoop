/*
 * ##################################
 *       By Aaron (aaronwinter)
 *            December 2014
 *    GNU GENERAL PUBLIC LICENSE V3
 * ##################################
 * */
console.log("Init");
var debug = 0;
var filter = {urls : ["*://*.facebook.com/*"]};
var target = "https://www.facebook.com/ajax/mercury/change_read_status.php";

chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    console.log("INTERCEPTED");

    if(debug)
      console.log("data.url:::" + data.url);

    if(data.url == target)
      return {cancel: true};

    else
      return null;
  },

  filter,
  ["blocking"]);
