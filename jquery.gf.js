$(function () {
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
    }]
    
    $.each(json, function(index, data){
        if(data.text) {
            $(".gf").append("<input type='text' name='"+ data.text + "' class='form-cool'>");
        }else if(data.password){
            $(".gf").append("<input type='password' name='"+ data.password +"' class='form-cool'>");
        }else if(data.email){
            $(".gf").append("<input type='email' name='"+ data.email +"' class='form-cool'>");
        }
        
    });
});