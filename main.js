const botao  = document.querySelectorAll(".digitos li");
const valores = document.querySelector(".valores");
const operacao  = document.querySelectorAll(".operacao");


for(var i = 0; i < botao.length; i++){
	

	document.onkeyup = function(event){
		var key = event.keyCode; 

		switch (key){
			case 8:	
				backSpace(valores);
				break;
		};		
	};
		

	document.onkeypress = function(event){
		var key = event.keyCode; 
		
		switch (key){
			case 49:
				valores.innerHTML += "1";
				break;
			case 50:
				valores.innerHTML += "2";	
				break;
			case 51:
				valores.innerHTML += "3";
				break;
			case 52:
				valores.innerHTML += "4";
				break;
			case 53:
				valores.innerHTML += "5";
				break;
			case 54:
				valores.innerHTML += "6";
				break;
			case 55:
				valores.innerHTML += "7";
				break;
			case 56:
				valor.innerHTML += "8";
				break;
			case 57:
				valores.innerHTML += "9";
				break;
			case 48:
				valores.innerHTML += "0";
				break;	
			case 42:;
				valores.innerHTML += "*";
				break;
			case 43:
				valores.innerHTML += "+";
				break;
			case 45:
				valores.innerHTML += "-";
				break;
			case 46:
				valores.innerHTML += ".";
				break;
			case 47:
				valores.innerHTML += "/";
				break;
			case 13:
				var calculo = valores.innerHTML;
				if(calculo){
                    valores.innerHTML = eval(calculo); 
                }else{
                    alert('Erro na expressão')
                }
				break;
			case 67:
			case 99:
				valores.innerHTML = "";
				break;						
			default:
				break;
		}
	};

	botao[i].addEventListener('click',function(){
		var botaoValido = this.innerHTML,
			valorValido = valores.innerHTML;

		switch (botaoValido){
			case "C":
				valores.innerHTML = "";
				break;
			case "=":
				var calculo = valorValido;
				
				if(calculo){
                    valores.innerHTML = eval(calculo); 
                }else {
                    alert('Erro na expressão');
                }
				break;
			case '⇦':
				backSpace(valores);
				break;	
			default:
				valores.innerHTML += botaoValido;
				break;	
		}

	});
}

function backSpace(valores) {
	const number = valores.innerHTML; 

	const apaga = number.length -1;

	const newNumber = number.substring( 0, apaga );

	valores.innerHTML = newNumber;

}

