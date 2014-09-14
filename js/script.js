  $(function(){
        $(document).keypress(function(e){
        if ($(e.target).is('input, textarea')) {
            return;
        };
        if (e.which === 97) {
            if(document.getElementById("sp").innerHTML =="lavan") {
                // Show an image
                var new_img = "lavans2.jpg"
                $("#sp").empty();
                var imgtag = $('<img id="spimg">');
                imgtag.attr('src',new_img);
                imgtag.appendTo('#sp');
            } else {
                // Show a word
                new_word = "lavan"
                $("#sp").text(new_word);
            }
        };
    });
});