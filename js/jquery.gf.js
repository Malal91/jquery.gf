$(function () {
    var maximum, mininum, saut;
    var json = [{
        "text": "username",
        "placeholder": "Votre nom utilisateur"
    },
    {
        "password": "password"
    },
    {
        "email": "email"
    },
    {
        "url": "Votre URL"
    },
    {
        "tel": "Numero de telephone"
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
            $(".gf").append("<div class='form-group'><input type='text' name='"+ data.text + "' class='form-control'>");
        }else if(data.password){
            $(".gf").append("<div class='form-group'><input type='password' name='"+ data.password +"' class='form-control'>");
        }else if(data.email){
            $(".gf").append("<div class='form-group'><input type='email' name='"+ data.email +"' class='form-control'>");
        }else if(data.url){
            $(".gf").append("<div class='form-group'><input type='url' name='"+ data.url +"' class='form-control'>");
        }else if(data.tel){
            $(".gf").append("<div class='form-group'><input type='tel' name='"+ data.tel +"' class='form-control'>");
        }else if(data.number){
            $(".gf").append("<div class='form-group'><input type='number' id='id_"+data.number+"' min='' max='' step='' name='"+ data.number +"' class='form-control'>");
            
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
             $(".gf").append("<div class='form-group'><input type='range' id='id_"+data.range+"' min='' max='' step='' name='"+ data.range +"' class='form-control'>");
            
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
             $(".gf").append("<div class='form-group'><input type='color' name='"+ data.color +"' class='form-control'>");
        }else if(data.date){
             $(".gf").append("<div class='form-group'><input type='date' name='"+ data.date +"' class='form-control'>");
        }else if(data.time){
            $(".gf").append("<div class='form-group'><input type='time' name='"+ data.time +"' class='form-control'>");
        }else if(data.week){
            $(".gf").append("<div class='form-group'><input type='week' name='"+ data.week +"' class='form-control'>");
        }else if(data.month){
            $(".gf").append("<div class='form-group'><input type='month' name='"+ data.month +"' class='form-control'>");
        }else if(data.datetime){
            $(".gf").append("<div class='form-group'><input type='datetime' name='"+ data.datetime +"' class='form-control'>");
        }else if(data.search){
            $(".gf").append("<div class='form-group'><input type='search' name='"+ data.search +"' class='form-control'>");
        }else if(data.checkbox){
            $(".gf").append("<div class='form-group'><input type='checkbox' name='"+ data.checkbox +"' class='form-control'>");
        }else if(data.radio){
            $(".gf").append("<div class='form-group'><input type='radio' name='"+ data.radio +"' class='form-control'>");
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
                var debut = "<div class='form-group'><select name='"+ data.select +"' id='id_"+ data.select+ "'>";
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
        }
        
    });
    $(".gf").append("<input type='submit' class='btn btn-info' value='Envoyer'/><input type='reset' class='btn btn-info' value='Reinitialiser'/>");
});