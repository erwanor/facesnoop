facesnoop
=========

The first first and most advanced open-source chrome extension that let you read
your messages on Facebook without letting your friends know.

What is it?
Facesnoop is the first and most advanced chrome extension that enables
you to read your facebook messages without letting your friends know!

How do it works?
-> Technical explanation:
We intercept and cancel all the XHR Post request to change_status.php using chrome.webRequest.

-> Layman terms:
Everytime you open a message on facebook, your browser send a "signal" to facebook saying "User have opened the message #252. What we do is that we intercept this signal and cancel it so Facebook does not know whether you have red the message or not and if they do not know they can't tell your friend.

Do we read your messages?
No, we are very concerned about your privacy and we do not read or store
any data about you. Everything is done in real-time and you can find our
source-code here: github.com/aaronwinter/facesnoop

How to support us?
This chrome extension will stay free but is made by Aaron, a student at
the University of Waterloo. If you appreciate his work 

Contributors:
Aaron - University of Waterloo
