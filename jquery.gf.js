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
               },
               {
                   "select": "pays",
                   "type": "1",
                   "group": ["Afrique", "Europe", "Amerique"],
                   "Afrique": ["Guinée", "Senegal"],
                   "Europe": ["Allemagne", "Hollande"],
                   "Amerique": ["USA", "Brazil"]
               }]
    
    $.each(json, function(index, data){
        if(data.text) {
            $(".gf").append("<input type='text' name='"+ data.text + "' class='form-cool'>");
        }else if(data.password){
            $(".gf").append("<input type='password' name='"+ data.password +"' class='form-cool'>");
        }else if(data.email){
            $(".gf").append("<input type='email' name='"+ data.email +"' class='form-cool'>");
        }else if(data.url){
            $(".gf").append("<input type='url' name='"+ data.url +"' class='form-cool'>");
        }else if(data.tel){
            $(".gf").append("<input type='tel' name='"+ data.tel +"' class='form-cool'>");
        }else if(data.number){
            $(".gf").append("<input type='number' id='id_"+data.number+"' min='' max='' step='' name='"+ data.number +"' class='form-cool'>");
            
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
             $(".gf").append("<input type='range' id='id_"+data.range+"' min='' max='' step='' name='"+ data.range +"' class='form-cool'>");
            
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
             $(".gf").append("<input type='color' name='"+ data.color +"' class='form-cool'>");
        }else if(data.date){
             $(".gf").append("<input type='date' name='"+ data.date +"' class='form-cool'>");
        }else if(data.time){
            $(".gf").append("<input type='time' name='"+ data.time +"' class='form-cool'>");
        }else if(data.week){
            $(".gf").append("<input type='week' name='"+ data.week +"' class='form-cool'>");
        }else if(data.month){
            $(".gf").append("<input type='month' name='"+ data.month +"' class='form-cool'>");
        }else if(data.datetime){
            $(".gf").append("<input type='datetime' name='"+ data.datetime +"' class='form-cool'>");
        }else if(data.search){
            $(".gf").append("<input type='search' name='"+ data.search +"' class='form-cool'>");
        }else if(data.checkbox){
            $(".gf").append("<input type='checkbox' name='"+ data.checkbox +"' class='form-cool'>");
        }else if(data.radio){
            $(".gf").append("<input type='radio' name='"+ data.radio +"' class='form-cool'>");
        }else if(data.select){
            if(data.type){
                if(data.type == "1"){
                    var options;
                    var debut = "<select name='"+ data.select +"' id='id_"+ data.select+ "'>";
                }
            }else{
                var options;
                var debut = "<select name='"+ data.select +"' id='id_"+ data.select+ "'>";
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
                    alert("vous devez choisir les éléments du select");
                }

            }
        }
        
    });
});