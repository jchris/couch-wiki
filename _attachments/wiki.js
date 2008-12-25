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
        var db = $.couch.db(db_name);
        // FIXME: _doc is global.
        var doc = {
            _id: _doc._id,
            _rev: _doc._rev,
            body: $.trim($("textarea").val())
        }
        db.saveDoc(doc);
        
        // remove previous ?revs
        form_name = form_name.split("?")[0];
        window.location.assign("/" + db_name + "/_form/" + doc_name + "/view/" + form_name + "?rev=" + doc._rev);
        return false;
    });
})(jQuery);