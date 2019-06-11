$(document).ready(function(){
    $("#botaologin").click(function(){
        window.location = $(this).attr('url_index');
        });

        $("#botaologincomcampos").click(function(){
            if($('#usuario').val()=='admin' && $('#senha').val() == '123456' ){
                alert('');
                window.location = $(this).attr('url_index');
            }
            
            });
            $('#cadastra_cliente').click(function(){
                if(validaCPF($('#inputCpf').val())){
                    alert('cpf valido');
                }else{
                    alert('cpf invalido');
                }
            });
            $('#cadastra_func').click(function(){
                if( validaCPF($('#inputCpf').val())){
                    alert('cpf invalido');
                }else{
                    alert('cpf invalido');
                }
            });
        
  
});
function enterform(e){
    if(e.keyCode === 13){
       alert('oi');
    }
}
function validaCPF(cpf)
	  	{
		    var numeros, digitos, soma, i, resultado, digitos_iguais;
		    digitos_iguais = 1;
		    if (cpf.length < 11)
		          return false;
		    for (i = 0; i < cpf.length - 1; i++)
		          if (cpf.charAt(i) != cpf.charAt(i + 1))
		                {
		                digitos_iguais = 0;
		                break;
		                }
		    if (!digitos_iguais)
		          {
		          numeros = cpf.substring(0,9);
		          digitos = cpf.substring(9);
		          soma = 0;
		          for (i = 10; i > 1; i--)
		                soma += numeros.charAt(10 - i) * i;
		          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		          if (resultado != digitos.charAt(0))
		                return false;
		          numeros = cpf.substring(0,10);
		          soma = 0;
		          for (i = 11; i > 1; i--)
		                soma += numeros.charAt(11 - i) * i;
		          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		          if (resultado != digitos.charAt(1))
		                return false;
		          return true;
		          }
		    else
		        return false;
	  	}
