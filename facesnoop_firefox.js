console.log("Init");
chrome.webRequest.onBeforeRequest.addListener(
  function(data) {
    console.log("INTERCEPTED");
    console.log("data.url:::" + data.url);

    if(data.url == "https://www.facebook.com/ajax/mercury/change_read_status.php"){
      console.log("KILLED");
      return {cancel: true};
    }

    else
      return null;
  },



  observe : function(aSubject, aTopic, aData) {
  if (TOPIC_MODIFY_REQUEST == aTopic) {
    let url;

    aSubject.QueryInterface(Components.interfaces.nsIHttpChannel);
    url = aSubject.URI.spec;

    if (RE_URL_TO_MODIFY.test(url)) { // RE_URL_TO_MODIFY is a regular expression.
      aSubject.setRequestHeader("Referer", "http://example.com", false);
    } else if (RE_URL_TO_CANCEL.test(url)) { // RE_URL_TO_CANCEL is a regular expression.
      aSubject.cancel(Components.results.NS_BINDING_ABORTED);
    }
  }
}