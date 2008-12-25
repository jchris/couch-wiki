function(doc, req) {
    var doc_string = '{_id: "' + doc._id + '", _rev: "' + doc._rev + '"}';
    var header = '<!DOCTYPE html><html>  <head>    <title>CouchDB Wiki</title>    <link rel="stylesheet" href="http://127.0.0.1:5984/wiki/_design%2Fcouch-wiki/screen.css" type="text/css">  </head>  <body>    <div id="page">';
    var footer = ' </div>   </body>  <script src="/_utils/script/json2.js"></script>  <script src="/_utils/script/jquery.js?1.2.6"></script>  <script src="/_utils/script/jquery.couch.js?0.8.0"></script>  <script src="/wiki/_design%2Fcouch-wiki/showdown.js"></script>  <script src="/wiki/_design%2Fcouch-wiki/wiki.js"></script><script type="text/javascript" charset="utf-8">var _doc = ' + doc_string + '</script></html>';
    var body = "no content here";
    if(doc.body) {
        body = '<form action="#" method="post" accept-charset="utf-8">  <textarea name="page" rows="20" cols="40"> ' + doc.body + '</textarea>  <p><input type="submit" id="save" value="Save &rarr;"></p></form>';
    }
    return {body:header + body + footer};
}

