/*
 * ##################################
 *       By Aaron (aaronwinter)
 *            December 2014
 *    GNU GENERAL PUBLIC LICENSE V3
 * ##################################
 * */

console.log("###...> Starting");
var DEBUG = false; // Allow reconfiguration from dev console
var STATUS_REGEX = new RegExp("https\:\/\/www\.facebook\.com\/ajax\/mercury\/change_read_status\.php\?[a-z-0-9-\=\_\%]*");
var SEEN_REGEX   = new RegExp("https\:\/\/www\.facebook\.com\/ajax\/mercury\/mark_seen\.php\?[a-z-0-9-\=\_\%]*");
chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    console.log("INTERCEPTED");
    console.log("data.url:::" + data.url);

    }

    else
      return null;
  },

  {urls : ["*://*.facebook.com/*"]},
  ["blocking"]);
