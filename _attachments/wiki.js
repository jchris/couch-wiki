(function($) {
    // set title fromg grepping <h*>
    var potential_titles = $("h1,h2,h3,h4,h5,h6");
    if(potential_titles[0]) {
        var heading_title = $(potential_titles[0]).text();
        $("title").text(heading_title);
    }

    var db_name = document.location.href.split('/')[3];
    var doc_name = unescape(document.location.href).split('/')[5];
    var form_name = unescape(document.location.href).split('/')[7];
    
    $("input#edit").click(function() {
        window.location.href = "/" + db_name + "/_form/" + doc_name + "/edit/" + form_name;
    });

    $("input#save").click(function() {
        var db = new CouchDB(db_name);
        // FIXME: _doc is global.
        var doc = {
            _id: _doc._id,
            _rev: _doc._rev,
            body: $.trim($("textarea").val())
        }
        db.save(doc);
        window.location.assign("/" + db_name + "/_form/" + doc_name + "/view/" + form_name );
        return false;
    });
})(jQuery);