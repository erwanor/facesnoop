chrome.webRequest.onBeforeRequest.addListener(
    function(data) {
        return {cancel: data.url.indexOf("https://www.facebook.com/ajax/mercury/change_read_status.php*") != -1};
    },
    {urls: ["https://facebook.com/*"]},
    ["blocking"]);

