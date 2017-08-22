(function(){
    $.fn.gf = function(options){
        var settings = $.extend({
            connexion: null,
            email: "votre email"
        }, options);
        this.each(function(){
            $(this).append("<div class='gf-body'><form class='gf'></form></div>");
            if(settings.connexion == "active") {
                $(".gf").append("<div class='form-group'><label for='id_"+settings.email+"'>"+ settings.email +"</label> <input type='text' id='id_"+settings.email+"' name='"+ settings.email+ "' class='form-gf' placeholder='"+ settings.email +"' required>");
            }
            return this;
        });
    };
}(jQuery));