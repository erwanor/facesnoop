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
var URL_PATTERNS = { urls : ["*://*.facebook.com/*",
                             "*://facebook.com/*"] };
var mode = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    if (DEBUG)
      console.log("Intercepted data.url ::: " + data.url);

    if (STATUS_REGEX.exec(data.url) || SEEN_REGEX.exec(data.url)) {
      if (DEBUG)
        console.log("Killed request.");
      return { cancel: true };
    }
  }, URL_PATTERNS, mode);
