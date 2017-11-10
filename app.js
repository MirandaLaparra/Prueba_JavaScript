var calculadora = {

	visor: document.getElementById("display"),
valorVisor: "0",
operacion: "",
primerValor: 0,
segundoValor: 0,
ultimoValor: 0,
resultado: 0,
auxTeclaIgual: false,

init: function() {
	calculadora.animacionTeclas;
	calculadora.agregarValores;
}

animacionTeclas: function ("tecla"){
document.getElementById("tecla").style.transform="scale(0.9)";

setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
}

		agregarValores: function (tecla){
			document.getElementById("0").addEventListener("click", function() {calculadora.Numero("0") ;});
			document.getElementById("1").addEventListener("click", function() {calculadora.Numero("1");});
			document.getElementById("2").addEventListener("click", function() {calculadora.Numero("2");});
			document.getElementById("3").addEventListener("click", function() {calculadora.Numero("3");});
			document.getElementById("4").addEventListener("click", function() {calculadora.Numero("4");});
			document.getElementById("5").addEventListener("click", function() {calculadora.Numero("5");});
			document.getElementById("6").addEventListener("click", function() {calculadora.Numero("6");});
			document.getElementById("7").addEventListener("click", function() {calculadora.Numero("7");});
			document.getElementById("8").addEventListener("click", function() {calculadora.Numero("8");});
			document.getElementById("9").addEventListener("click", function() {calculadora.Numero("9");});
			document.getElementById("on").addEventListener("click", function() {calculadora.borrar();});
			document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
			document.getElementById("punto").addEventListener("click", function() {calculadora.puntoDecimal();});
			document.getElementById("igual").addEventListener("click", function() {calculadora.Resultado();});
			document.getElementById("dividido").addEventListener("click", function() {calculadora.Operacion("/");});
			document.getElementById("por").addEventListener("click", function() {calculadora.Operacion("*");});
			document.getElementById("menos").addEventListener("click", function() {calculadora.Operacion("-");});
			document.getElementById("mas").addEventListener("click", function() {calculadora.Operacion("+");});
			this.animacionTeclas;
		},

//6
		borrarVisor: function(){
			this.valorVisor = "0";
			this.operacion = "";
			this.primerValor = 0;
			this.segundoValor = 0;
			this.resultado = 0;
			this.Operación = "";
			this.auxTeclaIgual = false;
			this.ultimoValor = 0;
			this.updateVisor();
		},

//7
		ingresoDecimal: function(){
			if (this.valorVisor.indexOf(".")== -1) {
				if (this.valorVisor == ""){
					this.valorVisor = this.valorVisor + "0.";
				} else {
					this.valorVisor = this.valorVisor + ".";
				}
				this.updateVisor();
			}
		},

//8
		cambiarSigno: function(){
			if (this.valorVisor !="0") {
				var aux;
				if (this.valorVisor.charAt(0)=="-") {
					aux = this.valorVisor.slice(1);
				}	else {
					aux = "-" + this.valorVisor;
				}
			this.valorVisor = "";
			this.valorVisor = aux;
			this.updateVisor();
			}
		},



		ingresoNumero: function(valor){
			if (this.valorVisor.length < 8) {

				if (this.valorVisor=="0") {
					this.valorVisor = "";
					this.valorVisor = this.valorVisor + valor;
				} else {
					this.valorVisor = this.valorVisor + valor;
				}
			this.updateVisor();
			}
		},

		ingresoOperacion: function(oper){
			this.primerValor = parseFloat(this.valorVisor);
			this.valorVisor = "";
			this.operacion = oper;
			this.auxTeclaIgual = false;
			this.updateVisor();
		},

		verResultado: function(){

			if(!this.auxTeclaIgual){
				this.segundoValor = parseFloat(this.valorVisor);
				this.ultimoValor = this.segundoValor;

				this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);

			} else {
			this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
			}

			this.primerValor = this.resultado;

			this.valorVisor = "";


			if (this.resultado.toString().length < 9){
				this.valorVisor = this.resultado.toString();
			} else {
				this.valorVisor = this.resultado.toString().slice(0,8) + "...";
			}


			this.auxTeclaIgual = true;
			this.updateVisor();

		},

		realizarOperacion: function(primerValor, segundoValor, operacion){
			switch(operacion){
				case "+":
					this.resultado = eval(primerValor + segundoValor);
				break;
				case "-":
					this.resultado = eval(primerValor - segundoValor);
				break;
				case "*":
					this.resultado = eval(primerValor * segundoValor);
				break;
				case "/":
					this.resultado = eval(primerValor / segundoValor);
				break;
			}
		},

		}

		calculadora.init();
