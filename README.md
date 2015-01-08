facesnoop
=========

## Link: 

https://chrome.google.com/webstore/detail/facesnoop/kebmejpcciehlicgipgfinbgdbedeoag


### What is Facesnoop?

An extension working on both Chrome and Firefox that enables you to read your Facebook message without notifying your friends. We have a lot of very cool features in development. Contrary to other "similar" extensions available we do not store data about you or your behavior and are very respectful of your privacy.

**Code guidelines:**
We follow Google's code guideline for Javascript, before making a pull request please read: https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml

**ToDo:**

  * General:
    * Improve description of chrome extension store
    * Add high-quality screenshots

  * Software development:
    * Whitelist support: Enable the user to add friends to a "whitelist" (Note: the XHR Post request's header made to facebook.com/ajax/mercury/change_read_status.php contains all the information we need).
    * Artificial list of "seen message" see issue #1

  * Design:
    * Design a real icon for the extension (current one is copylefted)
    * Video of software in use

* Marketing:
    * Establish a deployment strategy
    * Add a "viral component" to the product

**Structure**

The branch *prod* is the production branch and *master* is the main development branch. 
License and "meta" improvements are made on *meta* and new features/bug fixes have their own branches. Once they have proven to work in "most" cases they can be merged to *master* where they will receive more tests to eventually be used in *prod*.


Feedback and ideas greatly appreciated: aaron@rely.io

Authors:
Aaron - University of Waterloo
