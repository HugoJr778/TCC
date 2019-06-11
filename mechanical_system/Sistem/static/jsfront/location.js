$(document).ready(function(){
    $("#botaologin").click(function(){
        window.location = $(this).attr('url_index');
        });

        $("#botaologincomcampos").click(function(){
            if($('#usuario').val()=='admin' && $('#senha').val() == '123456' ){
            
                window.location = $(this).attr('url_index');
            }else{
				$('#modal_error').modal();
				setTimeout(function(){
					$("#modal_error").modal('hide');
				}, 2000);
			}
            
            });
            $('#cadastra_cliente').click(function(){
                if((!validaCPF($('#inputCpf').val())) && ($('#inputCpf').val() != '')){
					$("#inputCpf").addClass('error');
					$("#errorcpf").css('display','block');
					$("#errorcpf").css('color','red');
					}else{
					$("#inputCpf").removeClass('error');
					$("#errorcpf").css('display','none');
					}
					let cep = $("#inputCEP").val();
					if(cep != ''){
					$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
						console.log(dados);
						if (!("erro" in dados)) {
							//Atualiza os campos com os valores da consulta.
							$("#endereco2").val(dados.logradouro+'-'+dados.bairro+'-'+dados.localidade+'-'+dados.uf);
						} //end if.
						else {
							//CEP pesquisado não foi encontrado.
							limpa_formulário_cep();
							alert("CEP não encontrado.");
						}
					});
				}
            });
            $('#cadastra_func').click(function(){
				console.log($('#inputCpffun2').val());
                if((!validaCPF($('#inputCpffun2').val())) && ($('#inputCpffun2').val() !='')){
				$("#inputCpffun2").addClass('error');
				$("#error").css('display','block');
				$("#error").css('color','red');
                }else{
                $("#inputCpffun2").removeClass('error');
				$("#error").css('display','none');
				}
				let cep = $("#inputcepfunc").val();
				if(cep != ''){
				$.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    console.log(dados);
					if (!("erro" in dados)) {
						//Atualiza os campos com os valores da consulta.
						$("#endereco").val(dados.logradouro+'-'+dados.bairro+'-'+dados.localidade+'-'+dados.uf);
					} //end if.
					else {
						//CEP pesquisado não foi encontrado.
						limpa_formulário_cep();
						alert("CEP não encontrado.");
					}
				});
			}
            });
            // $('#cadastra_cliente').click(function(){
            //     if(!validaCPF($('#inputCpf').val())){
			// 	$("#inputCpf").addClass('error');
			// 	$("#errorcpf").css('display','')
            //     }else{
            //     $("#inputCpf").removeClass('error');
			// 	$("#errorcpf").css('display','none')
            //     }
            // });
  
});
function form_key(e,tag){
    if(e.keyCode === 13){
		$(tag).click();
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