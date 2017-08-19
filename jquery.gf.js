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
        }
        
    });
});