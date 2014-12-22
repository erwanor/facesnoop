/*
 * ##################################
 *       By Aaron (aaronwinter)
 *            December 2014
 *    GNU GENERAL PUBLIC LICENSE V3
 * ##################################
 * */
console.log("Init");
var debug = 0;

chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    console.log("INTERCEPTED");

    if(debug)
      console.log("data.url:::" + data.url);
      
    if(data.url == "https://www.facebook.com/ajax/mercury/send_messages.php")
      return {cancel: false};

    if(data.url == "https://www.facebook.com/ajax/mercury/change_read_status.php")
      return {cancel: true};

    else
      return null;
  },

  {urls : ["*://*.facebook.com/*"]},
  ["blocking"]);
