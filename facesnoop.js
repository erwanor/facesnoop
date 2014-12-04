/*
 * ##################################
 *       By Aaron (aaronwinter)
 *            December 2014
 *    GNU GENERAL PUBLIC LICENSE V3
 * ##################################
 * */

console.log("Init");
chrome.webRequest.onBeforeRequest.addListener(
    function(data) {
        console.log("INTERCEPTED");
        console.log("data.url:::"+data.url);
        if(data.url == "https://www.facebook.com/ajax/mercury/change_read_status.php"){
            console.log("KILLED");
            return {cancel: true};
        }
        else
            return null;//{cancel: true};
    },

    {urls: ["*://*.facebook.com/*"]},
    ["blocking"]);
