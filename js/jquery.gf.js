(function(){
    $.fn.gf = function(options){
        var settings = $.extend({
            select: null,
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
                        if(settings.select){
                             for(var j=0; j<settings.select.length; j++){
                                 optionelement = settings.select[j].split('.');
                                 if(optionelement[1] == elements[0]){
                                     options += "<option>"+optionelement[0]+"</option>";
                                 }
                             }
                             $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(elements[0])+"'>"+replacedUnderscore(elements[0])+"</label> <select id='id_"+replacedSpace(elements[0])+"' name='"+replacedSpace(elements[0])+"' class='form-gf' required>"+options+"</select>");
                        }
                        
                        if(settings.post){
                            var selection='', url='';
                            if(elements[0] == settings.post[0]){
                                selection = settings.post[0];
                                url = settings.post[1];
                            
                                $.post(url,
                                       {

                                },
                                function(data){
                                    $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(elements[0])+"'>"+replacedUnderscore(elements[0])+"</label> <select id='id_"+replacedSpace(elements[0])+"' name='"+replacedSpace(elements[0])+"' class='form-gf' required>"+options+"</select>");

                                });
                            }
                        }
                    }else{
                        $(".gf").append("<div class='form-group'><label for='id_"+replacedSpace(elements[0])+"'>"+replacedUnderscore(elements[0])+"</label> <input type='"+elements[1]+"' id='id_"+replacedSpace(elements[0])+"' name='"+replacedSpace(elements[0])+"' class='form-gf' placeholder='"+replacedUnderscore(elements[0])+"' required>");
                    }
                }
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
                $(".gf").append("<input type='submit' class='btn btn-info' value=\"S'inscrire\"/> <input type='reset' class='btn btn-info' value='Reinitialiser'/>");
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
        }
    };
    
}(jQuery));