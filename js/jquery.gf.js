$(function () {
    var maximum, mininum, saut, result, slug=false, idFrom;
    var regAccentA = new RegExp('[ÀÁÂÃÄÅàáâãäå]', 'gi');
    var regAccentO = new RegExp('[ÒÓÔÕÖØòóôõöø]', 'gi');
    var regAccentE = new RegExp('[ÈÉÊËèéêë]', 'gi');
    var regAccentC = new RegExp('[Çç]', 'gi');
    var regAccentI = new RegExp('[ÌÍÎÏìíîï]', 'gi');
    var regAccentU = new RegExp('[ÙÚÛÜùúûü]', 'gi');
    var regAccentY = new RegExp('[ÿ]', 'gi');
    var regAccentN = new RegExp('[Ññ]', 'gi');
    var regSpeciaux = new RegExp('[?,!@#%&*;§$£()=+ {}\:._\'\\/"|²~`^^@]', 'gi');
    var json = [{
        "text": "username",
        "placeholder": "Votre nom utilisateur"
    },
    {
        "password": "mot_de_passe"
    },
    {
        "email": "email"
    },
    {
        "url": "votre_URL"
    },
                {
                    "text": "titre"
                },
    {
        "tel": "Numero_de_telephone"
    },
                {
                    "slug": "slug",
                    "from": "titre"
                },
    {
        "number": "nombre",
        "min" : "4",
        "max" : "10",
        "step" : "2"
    },
    {
        "number": "chiffre",
        "min" : "3",
        "max" : "9",
        "step" : "3"
    },
    {
        "range": "curseur",
         "min" : "50",
        "max" : "100",
        "step" : "10"
    },
    {
        "color": "couleur"
    },
               {
                   "date": "date"
               },
               {
                   "time": "temps"
               },
               {
                   "week": "semaine" 
               },
               {
                   "month": "mois"
               },
               {
                   "datetime": "datetime"
               },
               {
                   "search": "recherche"
               },
               {
                   "checkbox": "choix"
               },
               {
                   "radio": "age"
               },
                {
                    "textarea": "votre_texte"
                },
               {
                   "select": "pays",
                   "options": ["ginée", "france", "allemagne", "usa"],
                   "selected": "allemagne"
               }/*,
               {
                   "select": "pays",
                   "type": "1",
                   "group": ["Afrique", "Europe", "Amerique"],
                   "Afrique": ["Guinée", "Senegal"],
                   "Europe": ["Allemagne", "Hollande"],
                   "Amerique": ["USA", "Brazil"]
               }*/]
    
    $.each(json, function(index, data){
        if(data.text) {
            if(result = replaced(data.text)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.text+"'>"+ result +"</label> <input type='text' id='id_"+data.text+"' name='"+ data.text + "' class='form-control' placeholder='"+ result +"' required>");
            }else{
                 $(".gf").append("<div class='form-group'><label for='id_"+data.text+"'>"+ ucfirst(data.text) +"</label> <input type='text' id='id_"+data.text+"' name='"+ data.text + "' class='form-control' placeholder='"+ ucfirst(data.text) +"' required>");
            }
           
        }else if(data.password){
            if(result = replaced(data.password)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.password+"'>"+ result +"</label><input type='password' id='id_"+data.password+"' name='"+ data.password +"' class='form-control' placeholder='"+ result +"' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.password+"'>"+ ucfirst(data.password) +"</label><input type='password' id='id_"+data.password+"' name='"+ data.password +"' class='form-control' placeholder='"+ ucfirst(data.password) +"' required>");
            }
            
        }else if(data.email){
            if(result = replaced(data.email)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.email+"'>"+ result +"</label><input type='email' id='id_"+data.email+"' name='"+ data.email +"' class='form-control' placeholder='"+ result +"' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.email+"'>"+ ucfirst(data.email) +"</label><input type='email' id='id_"+data.email+"' name='"+ data.email +"' class='form-control' placeholder='"+ ucfirst(data.email) +"' required>");
            }
            
        }else if(data.url){
            if(result = replaced(data.url)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.url+"'>"+ result +"</label><input type='url' id='id_"+data.url+"' name='"+ data.url +"' class='form-control' placeholder='"+ result +"' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.url+"'>"+ ucfirst(data.url) +"</label><input type='url' id='id_"+data.url+"' name='"+ data.url +"' class='form-control' placeholder='"+ ucfirst(data.url) +"' required>");
            }
            
        }else if(data.tel){
            if(result = replaced(data.tel)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.tel+"'>"+ result +"</label><input type='tel' id='id_"+data.tel+"' name='"+ data.tel +"' class='form-control' placeholder='"+ result +"' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.tel+"'>"+ ucfirst(data.tel) +"</label><input type='tel' id='id_"+data.tel+"' name='"+ data.tel +"' class='form-control' placeholder='"+ ucfirst(data.tel) +"' required>");
            }
            
        }else if(data.number){
            if(result = replaced(data.number)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.number+"'>"+ result +"</label><input type='number' id='id_"+data.number+"' min='' max='' step='' name='"+ data.number +"' class='form-control' placeholder='"+ result +"' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.number+"'>"+ ucfirst(data.number) +"</label><input type='number' id='id_"+data.number+"' min='' max='' step='' name='"+ data.number +"' class='form-control' placeholder='"+ ucfirst(data.number) +"' required>");
            }
            
            if(data.max){
               $("#id_"+data.number).attr('max', data.max);
            }
            
            if(data.min){
                $("#id_"+data.number).attr('min', data.min);
            }
            
            if(data.step){
                $("#id_"+data.number).attr('step', data.step);
            }
            
        }else if(data.range){
            if(result = replaced(data.range)){
                 $(".gf").append("<div class='form-group'><label for='id_"+data.range+"'>"+ result +"</label><input type='range' id='id_"+data.range+"' min='' max='' step='' name='"+ data.range +"' class='form-control'  required>");
            }else{
                 $(".gf").append("<div class='form-group'><label for='id_"+data.range+"'>"+ ucfirst(data.range) +"</label><input type='range' id='id_"+data.range+"' min='' max='' step='' name='"+ data.range +"' class='form-control' required>");
            }
                        
            if(data.max){
               $("#id_"+data.range).attr('max', data.max);
            }
            
            if(data.min){
                $("#id_"+data.range).attr('min', data.min);
            }
            
            if(data.step){
                $("#id_"+data.range).attr('step', data.step);
            }
        }else if(data.color){
            if(result = replaced(data.color)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.color+"'>"+ result +"</label><input type='color' id='id_"+data.color+"' name='"+ data.color +"' class='form-control' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.color+"'>"+ ucfirst(data.color) +"</label><input type='color' id='id_"+data.color+"' name='"+ data.color +"' class='form-control' required>");
            }
             
        }else if(data.textarea){
            if(result = replaced(data.textarea)){
                 $(".gf").append("<div class='form-group'><label for='id_"+data.textarea+"'>"+ result +"</label><textarea id='id_"+data.textarea+"' rows='8' name='"+ data.textarea +"' class='form-control' placeholder='"+ result +"' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.textarea+"'>"+ ucfirst(data.textarea) +"</label><textarea id='id_"+data.textarea+"' rows='8' name='"+ data.textarea +"' class='form-control' placeholder='"+ ucfirst(data.textarea) +"' required>");
            }
        }else if(data.date){
            if(result = replaced(data.date)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.date+"'>"+ result +"</label><input type='date' id='id_"+data.date+"' name='"+ data.date +"' class='form-control' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.date+"'>"+ ucfirst(data.date) +"</label><input type='date' id='id_"+data.date+"' name='"+ data.date +"' class='form-control' required>");
            }
             
        }else if(data.time){
            if(result = replaced(data.time)){
                $(".gf").append("<div class='form-group'><label for='id_"+data.time+"'>"+ result +"</label><input type='time' id='id_"+data.time+"' name='"+ data.time +"' class='form-control' required>");
            }else{
                $(".gf").append("<div class='form-group'><label for='id_"+data.time+"'>"+ ucfirst(data.time) +"</label><input type='time' id='id_"+data.time+"' name='"+ data.time +"' class='form-control' required>");
            }
            
        }else if(data.week){
            if(result = replaced(data.week)){
                 $(".gf").append("<div class='form-group'><label for='id_"+data.week+"'>"+ result +"</label><input type='week' id='id_"+data.week+"' name='"+ data.week +"' class='form-control' required>");
            }else{
                 $(".gf").append("<div class='form-group'><label for='id_"+data.week+"'>"+ ucfirst(data.week) +"</label><input type='week' id='id_"+data.week+"' name='"+ data.week +"' class='form-control' required>");
            }
           
        }else if(data.month){
            if(result = replaced(data.month)){
                 $(".gf").append("<div class='form-group'><label for='id_"+data.month+"'>"+ result +"</label><input type='month' id='id_"+data.month+"' name='"+ data.month +"' class='form-control' required>");
            }else{
                 $(".gf").append("<div class='form-group'><label for='id_"+data.month+"'>"+ ucfirst(data.month) +"</label><input type='month' id='id_"+data.month+"' name='"+ data.month +"' class='form-control' required>");
            }
           
        }else if(data.datetime){
            if(result = replaced(data.datetime)){
                 $(".gf").append("<div class='form-group'><label for='id_"+data.datetime+"'>"+ result +"</label><input type='datetime' id='id_"+data.datetime+"' name='"+ data.datetime +"' class='form-control'>");
            }else{
                 $(".gf").append("<div class='form-group'><label for='id_"+data.datetime+"'>"+ ucfirst(data.datetime) +"</label><input type='datetime' id='id_"+data.datetime+"' name='"+ data.datetime +"' class='form-control'>");
            }
           
        }else if(data.search){
            if(result = replaced(data.search)){
                 $(".gf").append("<div class='form-group'><label for='id_"+data.search+"'>"+ result +"</label><input type='search' id='id_"+data.search+"' name='"+ data.search +"' class='form-control' placeholder='"+ result +"' required>");
            }else{
                 $(".gf").append("<div class='form-group'><label id='id_"+data.search+"'>"+ ucfirst(data.search) +"</label><input type='search' id='id_"+data.search+"' name='"+ data.search +"' class='form-control' placeholder='"+ ucfirst(data.search) +"' required>");
            }
           
        }else if(data.checkbox){
            if(result = replaced(data.checkbox)){
                 $(".gf").append("<div class='form-group'><div class='checkbox'><label for='id_"+data.checkbox+"'><input type='checkbox' id='id_"+data.checkbox+"' name='"+ data.checkbox +"'>"+result);
            }else{
                 $(".gf").append("<div class='form-group'><div class='checkbox'><label for='id_"+data.checkbox+"'><input type='checkbox' id='id_"+data.checkbox+"' name='"+ data.checkbox +"'>"+ucfirst(data.checkbox));
            }
           
        }else if(data.radio){
            if(result = replaced(data.radio)){
                 $(".gf").append("<div class='form-group'><div class='radio'><label for='id_"+data.radio+"'><input type='radio' id='id_"+data.radio+"' name='"+ data.radio +"'>"+result);
            }else{
                 $(".gf").append("<div class='form-group'><div class='radio'><label for='id_"+data.radio+"'><input type='radio' id='id_"+data.radio+"' name='"+ data.radio +"'>"+ucfirst(data.radio));
            }
        }else if(data.select){
            if(data.type){
                /*if(data.type == "1"){
                    //var options;
                    var debut = "<select name='"+ data.select +"' id='id_"+ data.select+ "'>";
                    if(data.group){
                        var j=1;
                        for (var i=0; i<data.group.length; i++){
                            debut += "<optgroup label='"+ data.group[i] +"'>";
                            for(var k=0; k<data.group[i].length; k++){
                                debut += "<option value='"+data.group[i][k]+"'>"+data.group[i][k];
                            }
                        }
                        $(".gf").append(debut);
                    }else{
                        console.log("veillez choisir les options du <select>");
                    }
                }*/
            }else{
                var options;
                var debut = "<div class='form-group'><label for='id_"+data.select+"'>"+ ucfirst(data.select) +"</label><select name='"+ data.select +"' id='id_"+ data.select+ "' class='form-control' required>";
                if(data.options){
                    var j=1;
                    for (var i=0; i<data.options.length; i++){
                        if(j==1){
                            if(data.selected && data.selected==data.options[i]){
                                 options = "<option value='"+data.options[i]+"' selected>"+data.options[i]+"</option>";
                            }else{
                                 options = "<option value='"+data.options[i]+"'>"+data.options[i]+"</option>";
                                j++;
                            }
                        }else{
                            if(data.selected && data.selected==data.options[i]){
                                options += "<option value='"+data.options[i]+"' selected>"+data.options[i]+"</option>";
                            }else{
                                 options += "<option value='"+data.options[i]+"'>"+data.options[i]+"</option>";
                            }
                        }
                    }
                    var app = debut + options;
                    $(".gf").append(app);
                }else{
                    console.log("vous devez choisir les éléments du select");
                }

            }
        }else if(data.slug){
            $(".gf").append("<div class='form-group'><label for='id_"+data.slug+"'>"+ ucfirst(data.slug) +"</label><input type='text' id='id_"+data.slug+"' name='"+ data.slug +"' class='form-control' placeholder='"+ ucfirst(data.slug) +"' required>");
            slug = true;
            idFrom = data.from;
        }
        
    });
    
    function replaced(str){
        var result = str.replace(/_/g, ' ');
        return ucfirst(result);
    }
    
    function ucfirst(str){
        return result = str.replace(/^\w/, function($0){
            return $0.toUpperCase();
        });
    }
    
    $("#id_"+idFrom).keyup(function(e){
        var from = $("#id_"+idFrom).val();
        from = from.replace(regAccentA, 'a');
        from = from.replace(regAccentO, 'o');
        from = from.replace(regAccentE, 'e');
        from = from.replace(regAccentC, 'c');
        from = from.replace(regAccentI, 'i');
        from = from.replace(regAccentU, 'u');
        from = from.replace(regAccentY, 'y');
        from = from.replace(regAccentN, 'n');
        from = from.replace(regSpeciaux, '-');
        $("#id_slug").val(from);
    });
    
    $(".gf").append("<input type='submit' class='btn btn-info' value='Envoyer'/> <input type='reset' class='btn btn-info' value='Reinitialiser'/>");
});