//alert("Oi");

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
    // $("#cep").mask("99.999-999"); Teste mask 
});

function consultaCep(){
    //https://viacep.com.br/ws/18520000/json/

    
    
   // 

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+ cep +"/json/";
    
    console.log(url);

    $.ajax ({
        url: url, 
        type: "GET", 
      
        success: function (response){
            
            //console.log(response);
            $(".barra-progresso").show();
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: "+response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();

            /*alert("Seu cep é: " + response.cep);
            //alert("Seu CEP eh: " + response.cep)

            $("#logradouro").html(response.logradouro);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            
            */
        }
    })
}


