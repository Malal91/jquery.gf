(function(){
    $.fn.gf = function(options){
        var settings = $.extend({
            options: null,
            getslug: null,
            requestpost: null,
            connexion: null,
            inscription: null,
            newsletter: null,
            passwordGenerate: null,
            order: null,
            post: null,
            action: null,
            method: null
        }, options);
        this.each(function(){
            $(this).append("<div class='gf-body'><form class='gf'></form></div>");
            
            if(settings.connexion && settings.connexion == 'true') {
                if(settings.email){
                    $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(settings.email)+"'>"+ replacedUnderscore(settings.email)+"</label> <input type='email' id='id_"+replacedSpace(settings.email)+"' name='"+ replacedSpace(settings.email)+ "' class='form-gf' placeholder='"+ replacedUnderscore(settings.email)+"' required>");
                    $(".gf").append("<div class='form-group'><label for='id_password'>Mot de passe</label> <input type='password' id='id_password' name='password' class='form-gf' placeholder='Mot de passe' required>");
                    $(".gf").append("<input type='submit' class='btn btn-info' value='Envoyer'/> <input type='reset' class='btn btn-info' value='Reinitialiser'/>");
                    
                }else if(settings.username){
                    $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(settings.username)+"'>"+ replacedUnderscore(settings.username)+"</label> <input type='text' id='id_"+replacedSpace(settings.username)+"' name='"+ replacedSpace(settings.username)+ "' class='form-gf' placeholder='"+ replacedUnderscore(settings.username)+"' required>");
                    $(".gf").append("<div class='form-group'><label for='id_password'>Mot de passe</label> <input type='password' id='id_password' name='password' class='form-gf' placeholder='Mot de passe' required>");
                    $(".gf").append("<input type='submit' class='btn btn-info' value='Se connecter'/>");
                   
                }
                
            }else if(settings.inscription && settings.inscription == 'true'){
                if(settings.passwordGenerate && settings.passwordGenerate == 'true'){
                     $(".gf").append("<div class='form-group'><label for='id_nom'>Nom</label> <input type='text' id='id_nom' name='nom' class='form-gf' placeholder='Nom' required>");
                    $(".gf").append("<div class='form-group'><label for='id_prenom'>Prenom</label> <input type='text' id='id_prenom' name='prenom' class='form-gf' placeholder='Prenom' required>");
                    $(".gf").append("<div class='form-group'><label for='id_email'>Email</label> <input type='text' id='id_email' name='email' class='form-gf' placeholder='Email' required>");                    
                }else{
                     $(".gf").append("<div class='form-group'><label for='id_nom'>Nom</label> <input type='text' id='id_nom' name='nom' class='form-gf' placeholder='Nom' required>");
                    $(".gf").append("<div class='form-group'><label for='id_prenom'>Prenom</label> <input type='text' id='id_prenom' name='prenom' class='form-gf' placeholder='Prenom' required>");
                    $(".gf").append("<div class='form-group'><label for='id_email'>Email</label> <input type='text' id='id_email' name='email' class='form-gf' placeholder='Email' required>");
                    $(".gf").append("<div class='form-group'><label for='id_password'>Mot de passe</label> <input type='password' id='id_password' name='password' class='form-gf' placeholder='Mot de passe' required>");
                     $(".gf").append("<div class='form-group'><label for='id_confirm_password'>Confirmez le mot de passe</label> <input type='password' id='id_confirm_password' name='confirm_password' class='form-gf' placeholder='Confirmez le mot de passe' required>");
                }
            }else if(settings.newsletter && settings.newsletter == 'true'){
                $(".gf").append("<div class='form-group'><label for='id_newsletter'>Newsletter</label> <input type='email' id='id_newsletter' name='newsletter' class='form-gf' placeholder='Votre email' required>");
            }
            if(settings.order && !(settings.connexion && settings.inscription && settings.newsletter)){
                for(var i = 0; i< settings.order.length; i++){
                    var element = settings.order[i];
                    var elements = element.split('.');
                    var optionelement = '';
                    var options = '';
                    if(elements[1] == "select"){
                        if(settings.options){
                             for(var j=0; j<settings.options.length; j++){
                                 optionelement = settings.options[j].split('.');
                                 if(optionelement[1] == elements[0]){
                                     options += "<option value='"+optionelement[0]+"'>"+optionelement[0]+"</option>";
                                 }
                             }
                             $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(elements[0])+"'>"+replacedUnderscore(elements[0])+"</label> <select id='id_"+replacedSpace(elements[0])+"' name='"+replacedSpace(elements[0])+"' class='form-gf' required>"+options+"</select>");
                        }
                        
                        if(settings.post && settings.requestpost){
                            var selection = '', url = '';
                            for(var k=0; k<settings.post.length; k++){
                                selection=settings.post[k].split('/');
                            }
                            
                            for(var l=0; l<settings.requestpost.length; l++){
                                url = settings.requestpost[l].split('/');
                            }
                            
                            if(selection.length == url.length){
                                for(var m = 0; m<selection.length; m++){
                                     if(elements[0] == selection[m]){
                                    
                                        $.post(url[m],
                                               {

                                        },
                                        function(data){
                                            $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(elements[0])+"'>"+replacedUnderscore(elements[0])+"</label> <select id='id_"+replacedSpace(elements[0])+"' name='"+replacedSpace(elements[0])+"' class='form-gf' required>"+data+"</select>");

                                        });
                                    }
                                }
                               
                            }
                        }
                    }else if(elements[0] == 'slug'){
                        $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(elements[0])+"'>"+replacedUnderscore(elements[0])+"</label> <input type='text' id='id_"+replacedSpace(elements[0])+"' name='"+replacedSpace(elements[0])+"' class='form-gf' placeholder='"+replacedUnderscore(elements[0])+"' required>");
                        settings.getslug = elements[1];
                    }else{
                        $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(elements[0])+"'>"+replacedUnderscore(elements[0])+"</label> <input type='"+elements[1]+"' id='id_"+replacedSpace(elements[0])+"' name='"+replacedSpace(elements[0])+"' class='form-gf' placeholder='"+replacedUnderscore(elements[0])+"' required>");
                    }
                }
            }
            
            if(settings.getslug){
                $("#id_"+settings.getslug).keyup(function(e){
                    $("#id_slug").val(regex($("#id_"+settings.getslug).val()));
                });
            }
                                   
            if(settings.action){
                $(".gf").attr("action", settings.action);
            }
            if(settings.method){
                $(".gf").attr("method", settings.method);
            }
            if(settings.newsletter && settings.newsletter == 'true'){
                $(".gf").append("<input type='submit' class='btn btn-info' value='Souscrire'/>");
            }else{
                $(".gf").append("<input type='submit' class='btn btn-info' value=\"Soumettre\"/> <input type='reset' class='btn btn-info' value='Reinitialiser'/>");
            }
            
            return this;
        });
        
        function replacedUnderscore(str){
            var result = str.replace(/_/g, ' ');
            return ucfirst(result);
        }
        
        function replacedSpace(str){
            var result = str.replace(/ /g, '_');
            return result.toLocaleLowerCase();
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
            str = str.replace(regAccentA, 'a');
            str = str.replace(regAccentO, 'o');
            str = str.replace(regAccentE, 'e');
            str = str.replace(regAccentC, 'c');
            str = str.replace(regAccentI, 'i');
            str = str.replace(regAccentU, 'u');
            str = str.replace(regAccentY, 'y');
            str = str.replace(regAccentN, 'n');
            str = str.replace(regSpeciaux, '-');
            return str;
        }
    };
    
}(jQuery));