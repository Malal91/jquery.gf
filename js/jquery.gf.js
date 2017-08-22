(function(){
    $.fn.gf = function(options){
        var settings = $.extend({
            connexion: null,
            email: null
        }, options);
        this.each(function(){
            $(this).append("<div class='gf-body'><form class='gf'></form></div>");
            if(settings.connexion){
                
            }
                        
            if(settings.connexion) {
                if(settings.email){
                    $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(settings.email)+"'>"+ replacedUnderscore(settings.email)+"</label> <input type='email' id='id_"+replacedSpace(settings.email)+"' name='"+ replacedSpace(settings.email)+ "' class='form-gf' placeholder='"+ replacedUnderscore(settings.email)+"' required>");
                    $(".gf").append("<div class='form-group'><label for='id_password'>Password</label> <input type='password' id='id_password' name='password' class='form-gf' placeholder='Password' required>");
                    $(".gf").append("<input type='submit' class='btn btn-info' value='Envoyer'/> <input type='reset' class='btn btn-info' value='Reinitialiser'/>");
                }
                
            }
            return this;
        });
        
        function replacedUnderscore(str){
            var result = str.replace(/_/g, ' ');
            return ucfirst(result);
        }
        
        function replacedSpace(str){
            var result = str.replace(/ /g, '_');
            return result;
        }

        function ucfirst(str){
            return result = str.replace(/^\w/, function($0){
                return $0.toUpperCase();
            });
        }
        
        function regex(str){
            var regAccentA = new RegExp('[ÀÁÂÃÄÅàáâãäå]', 'gi');
            var regAccentO = new RegExp('[ÒÓÔÕÖØòóôõöø]', 'gi');
            var regAccentE = new RegExp('[ÈÉÊËèéêë]', 'gi');
            var regAccentC = new RegExp('[Çç]', 'gi');
            var regAccentI = new RegExp('[ÌÍÎÏìíîï]', 'gi');
            var regAccentU = new RegExp('[ÙÚÛÜùúûü]', 'gi');
            var regAccentY = new RegExp('[ÿ]', 'gi');
            var regAccentN = new RegExp('[Ññ]', 'gi');
            var regSpeciaux = new RegExp('[?,!@#%&*;§$£()=+ {}\:._\'\\/"|²~`^^@]', 'gi');
        }
    };
    
    
}(jQuery));