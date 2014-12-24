/*
 * ##################################
 *       By Aaron (aaronwinter)
 *            December 2014
 *    GNU GENERAL PUBLIC LICENSE V3
 * ##################################
 * */
console.log("Init");
var debug = 0;
var runIf = 1;

chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    var xmlhttp;
    
    console.log("INTERCEPTED");
    
    if(debug)
      console.log("data.url:::" + data.url);
      
    if(data.url == "https://www.facebook.com/ajax/mercury/send_messages.php") {//if you send messages, then it shows as seen 
        runIf = 0;                            //runIf zero so if statement to cancel isn't run                         
        xmlhttp.open("POST","change_read_status.php",true);                     //because new AJAX call is sent
        xmlhttp.send();                                               
    }
    if(data.url == "https://www.facebook.com/ajax/mercury/change_read_status.php") {
      if (runIf)                              //checks if call is from send_messages or just change_read_status
        runIf = 1;                            //reset variable
        return {cancel: true};
    }

    else
      runIf = 1;                           //reset variable
      return null;
  },

  {urls : ["*://*.facebook.com/*"]},
  ["blocking"]);
