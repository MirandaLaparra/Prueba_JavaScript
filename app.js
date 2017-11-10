var calculadora = {

	visor: document.getElementById("display"),
valorVisor: "0",
operacion: "",
primerNumero: 0,

init function () {
	calculadora.animacionTeclas;
	calculadora.agregarValores
}

animacionTeclas: function("tecla"){
document.getElementById(tecla).style.transform="scale(0.9)";

setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
}

		agregarValores: function (tecla){
			document.getElementById("0").addEventListener("click", function() {calculadora.Numero("0") this.animacionTeclas;});
			document.getElementById("1").addEventListener("click", function() {calculadora.Numero("1"); this.animacionTeclas});
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
		},



		}

		calculadora.init();
