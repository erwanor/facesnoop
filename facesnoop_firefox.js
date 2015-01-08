Services.obs.addObserver(myobserve, 'http-on-modify-request', false);

var {utils: Cu, classes: Cc, instances: Ci, results: Cr} = Components
Cu.import('resource://gre/modules/Services.jsm');
var myobserve = function(aSubject, aTopic, aData) {
    var httpChannel = aSubject.QueryInterface(Ci.nsIHttpChannel);

    var isXHR;

    try {
        var callbacks = httpChannel.notificationCallbacks;
        var xhr = callbacks ? callbacks.getInterface(Ci.nsIXMLHttpRequest) : null;
        isXHR = !!xhr;
    } catch (e) {
        isXHR = false;
    }

    if (isXHR) {
        //its ajax
        var requestUrl = httpChannel.URI.spec;
        if (requestUrl.indexOf('https://www.facebook.com/ajax/mercury/change_read_status.php') > -1) {
            httpChannel.cancel(Cr.NS_BINDING_ABORTED);
        }
    }
}


Services.obs.removeObserver(myobserve, 'http-on-modify-request', false);