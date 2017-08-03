(function() {
    'use strict';

    //This creates a page in a space.
    var username = "wangx6@gmail.com";
    var password = "xhgk9qey";
    var jsondata = {
        "type": "page",
        "title": "ajax page",
        "space": { "key": "70 ajax page" },
        "body": { "storage": { "value": "<p>This is a new page</p>", "representation": "storage" } }
    };

    $.ajax({
        type: "POST",
        // url: "https://70kiss.atlassian.net/confluence:80/rest/api/content/",
        url: "https://70kiss.atlassian.net/wiki/rest/api/content/",
        contentType: "text/plain",
        dataType: "json",
        async: false,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        data: JSON.stringify(jsondata),
        success: function() {
            console.log('Page saved!');
        },
        error: function(xhr, errorText) {
            console.log(errorText);
            console.log(xhr);
        }
    });

})();