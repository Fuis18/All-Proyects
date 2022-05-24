"strict mode";
// Variables
let form = document.querySelector(".form");
let fragment = document.createDocumentFragment();
let veces = 16;
// Funciones
buildkey = (i) => {
	h3 = `<h3>${buildH3(i)}</h3>`;
	input = `<input type="button" class="input input-${i}" value="${buildH3(i)}"  onclick='javascript:
	if (document.querySelector(".desarrollo__div").hasChildNodes() == false) {
		clickboton${i}();
	} else {
		let a = document.createElement("H2");
		let text = document.createTextNode("Desarrollo del proyecto");
		a.appendChild(text);
		let b = document.createElement("DIV");
		b.classList.add("desarrollo__div");
		document.querySelector(".desarrollo").removeChild(document.querySelector(".desarrollo h2"));
		document.querySelector(".desarrollo").removeChild(document.querySelector(".desarrollo__div"));
		document.querySelector(".desarrollo").appendChild(a);
		document.querySelector(".desarrollo").appendChild(b);
	}'>`
	return [h3, input];
}
buildH3 = (i) => {
	if (i == 1) return "Regla de 3 simple";
	if (i == 2) return "Función Cuadratica";
	if (i == 3) return "Bucle";
	if (i == 4) return "Calculadora";
	if (i == 5) return "Asistencias por 30 días";
	if (i == 6) return "Intervalo de tiempo";
	if (i == 7) return "Cursos";
	if (i == 8) return "Temperatura y Comida";
	if (i == 9) return "Seleccion de tu input";
	if (i == 10) return "Conteo rápido y normal";
	if (i == 11) return "Reloj";
	if (i == 12) return "Idioma";
	if (i == 13) return "Texturizador";
	if (i == 14) return "FileRieder, Drag & Drop, Barra de progreso";
	if (i == 15) return "IndexDB + Drag & Drop";
	if (i == 16) return "Lazy Load";
}
// Ejecucción
for (let i = 1; i <= veces; i++) {
	let div = document.createElement("DIV");
	div.classList.add("form__div");
	let key = buildkey(i);
	div.innerHTML = key[0] + key[1];
	fragment.appendChild(div);
}
form.appendChild(fragment);
// Proyecto 1
clickboton1 = () => {
	let container = document.querySelector(".desarrollo__div");
	let num1 = 1;
	let num2 = 1;
	let num3 = 1;
	container.innerHTML = `
	<div class="div1">
		<div class="container1">
			<input type="number" class="input1-left" placeholder="1">
			<input type="number" class="input1-right" placeholder="1">
			<input type="number" class="input1-down" placeholder="1">
		</div>
		<div class="envio1">
			<button>=</button>
		</div>
		<div class="result1">Resultado: </div>
	</div>`;
	document.querySelector(".envio1 button").addEventListener("click", () => {
		if (document.querySelector(".input1-left").value != '') num1 = document.querySelector(".input1-left").value;
		if (document.querySelector(".input1-right").value != '') num2 = document.querySelector(".input1-right").value;
		if (document.querySelector(".input1-down").value != '') num3 = document.querySelector(".input1-down").value;
		let res = (num1 * num2) / num3;
		document.querySelector(".result1").textContent = "Resultado:" + res;
	})
	// num1 = parseInt(prompt("Ingresa el numero total el 100%"));
	// num2 = parseInt(prompt("Ingresa el numero que quieres el porcentaje"));
	// num4 = ( num3 * num2 ) / num1;
	// alert(num4);
}
// Proyecto 2
clickboton2 = () => {
	let x = 0;
	let a = 0;
	let b = 0;
	let c = 0;
	x = parseInt(prompt("Ingresa la constante"));
	a = parseInt(prompt("Ingresa el primer valor (el que este junto al x^2)"));
	b = parseInt(prompt("Ingresa el segundo valor (el que este junto al x^1)"));
	c = parseInt(prompt("Ingresa el tercer valor (el que este junto al x^0)"));
	res = (a * x*x) + (x * b) + c;
	alert(res);
}
// Proyecto 3
clickboton3 = () => {
	let container = document.querySelector(".desarrollo__div");
	let fragment1 = document.createDocumentFragment();
	let a = parseInt(prompt("Cantidad"));
	let b = prompt("Dato que estable: antes de la iteracion");
	if (a > 500000) {
		alert("Su operación es muy grande para poder ejecutarla")
	} else {
		if (window.confirm("¿Con los numeros?")) {
			let c = prompt("Dato que estable: luego de la iteracion");
			let answer;
			if (window.confirm("¿Con Cero(s) adelante?")) {
				for (let i = 0; i <= a; i++) {
					let div = document.createElement("DIV");
					div.classList.add("div3");
					let i9_i100 = i > 9 && i < 100;
					let i99_i1000 = i > 99 && i < 1000;
					let a99_a1000 = a > 99 && a < 1000;
					let l999_l10000 = a > 999 && a < 10000;
					let a9999_a100000 = a > 9999 && a < 100000;
					let d0 = `<p>${b}0${i}${c}</p>`;
					let d00 = `<p>${b}00${i}${c}</p>`;
					let d000 = `<p>${b}000${i}${c}</p>`;
					// 00 - 99
					if (i < 10 && a < 100) answer = d0;
					// 000 - 999
					else if (i < 10 && a99_a1000) answer = d00;
					else if (i9_i100 && a99_a1000) answer = d0;
					// 0000 - 9999
					else if (i < 10 && l999_l10000) answer = d000;
					else if (i9_i100 && l999_l10000) answer = d00;
					else if (i99_i1000 && l999_l10000) answer = d0;
					// 00000 - 99999
					else if (i < 10 && a9999_a100000) answer = `<p>${b}0000${i}${c}</p>`;
					else if (i9_i100 && a9999_a100000) answer = d000;
					else if (i99_i1000 && a9999_a100000) answer = d00;
					else if (i > 999 && i < 10000 && a9999_a100000) answer = d0;
					// last
					else answer = `<p>${b}${i}${c}</p>`
					div.innerHTML = answer;
					fragment1.appendChild(div);
				}
			} else {
				for (let i = 0; i <= a; i++) {
					let div = document.createElement("DIV");
					div.classList.add("div3");
					answer = `<p>${b}${i}${c}</p>`
					div.innerHTML = answer;
					fragment1.appendChild(div);
				}
			}
		} else {
			for (let i = 0; i <= a; i++) {
				let div = document.createElement("DIV");
				div.classList.add("div3");
				answer = `<p>${b}</p>`
				div.innerHTML = answer;
				fragment1.appendChild(div);
			}
		}
		container.appendChild(fragment1);
	}
}
// Proyecto 4
clickboton4 = () => {
	class Calculator {
		constructor() {}
		plus(num1,num2,num3 = 0,num4 = 0,num5 = 0) {
			return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5);
		}
		subtract(num1,num2,num3 = 0,num4 = 0,num5 = 0) {
			return parseInt(num1) - parseInt(num2) - parseInt(num3) - parseInt(num4) - parseInt(num5);
		}
		multiply(num1,num2,num3 = 1,num4 = 1,num5 = 1) {
			return parseInt(num1) * parseInt(num2) * parseInt(num3) * parseInt(num4) * parseInt(num5);
		}
		divide(num1,num2,num3 = 1,num4 = 1,num5 = 1) {
			return parseInt(num1) / parseInt(num2) / parseInt(num3) / parseInt(num4) / parseInt(num5);
		}
		potenciar(num1,num2) {
			let num3 = parseInt(num1)
			for (let i = 1; i < parseInt(num2); i++) {
				num3 = num3 * num1;
			}
			return num3;
			// return num1**num2;
		}
		raizsquares(num1) {
			return Math.sqrt(num1);
		}
		raizcubicates(num1,num2) {
			return Math.cbrt(num1);
		}
	}
	let arr = [];
	const calculadora = new Calculator();
	let var1, var2;
	// let arr[0], arr[1], arr[2], arr[3], arr[4], parse6, parse7;
	var1 = prompt("¿Qué quieres hacer? ¿Sumar, Multiplicar, Restar, Dividir, Potenciar, Raíz Cuadrada o Raíz Cúbica?");
	all:if (var1 == "suma" || var1 == "sumar" || var1 == "Suma" || var1 == "Sumar") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.plus(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.plus(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.plus(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.plus(...arr);
		alert(var2);break all;
	} else if (var1 == "resta" || var1 == "restar" || var1 == "Resta" || var1 == "Restar") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.subtract(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.subtract(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.subtract(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.subtract(...arr);
		alert(var2);break all;
	} else if (var1 == "multiplica" || var1 == "multiplicar" || var1 == "Multiplica" || var1 == "Multiplicar") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.multiply(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.multiply(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.multiply(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.multiply(...arr);
		alert(var2);break all;
	} else if (var1 == "Dividir" || var1 == "dividir" || var1 == "divide" || var1 == "Divide") {
		arr[0] = prompt("Dime tu primer número");
		arr[1] = prompt("Dime tu siguiente número");
		arr[2] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[2] == "Finalizar" || arr[2] == "finalizar" || arr[2] == "Finaliza" || arr[2] == "finaliza") {
			arr.pop();
			var2 = calculadora.divide(...arr);
			alert(var2);break all;
		}
		arr[3] = prompt("Dime tu siguiente número o Finalizar?");
		if (arr[3] == "Finalizar" || arr[3] == "finalizar" || arr[3] == "Finaliza" || arr[3] == "finaliza") {
			arr.pop();
			var2 = calculadora.divide(...arr);
			alert(var2);break all;
		}
		arr[4] = prompt("Dime tu siguiente número o Finalizar?")
		if (arr[4] == "Finalizar" || arr[4] == "finalizar" || arr[4] == "Finaliza" || arr[4] == "finaliza") {
			arr.pop();
			var2 = calculadora.divide(...arr);
			alert(var2);break all;
		}
		var2 = calculadora.divide(...arr);
		alert(var2);break all;
	} else if (var1 == "Potenciar" || var1 == "potenciar" || var1 == "potencia" || var1 == "Potencia") {
		arr[0] = prompt("Dime el número a potenciar");
		arr[1] = prompt("Dime tu exponente");
		var2 = calculadora.potenciar(...arr);
		alert(var2);break all;
	} else if (var1 == "Raiz Cuadrada" || var1 == "raíz cuadrada" || var1 == "Raíz Cuadrada"
		|| var1 == "raíz cuadrada" || var1 == "Raíz cuadrada" || var1 == "Raiz cuadrada" || var1 == "raiz cuadrada") {
		arr[0] = prompt("Raíz cuadrada de");
		var2 = calculadora.raizsquares(...arr);
		alert(var2);break all;
	} else if (var1 == "Raiz Cubica" || var1 == "raíz cubica" || var1 == "Raíz Cúbica" || var1 == "raíz cúbica"
		|| var1 == "Raíz cúbica" || var1 == "Raiz cubica" || var1 == "raiz cubica") {
		arr[0] = prompt("Raíz cúbica de");
		var2 = calculadora.raizcubicates(...arr);
		alert(var2);break all;
	} else if (var1 == "malo" || var1 == "Malo" || var1 == "MALO") {
		alert("¿Quién es el malo, el quién lo dice a otra persona o el quien hace un programa para ayudar a los demás?");
	} else {
		alert("La opción no es valida");
	}
}
// Proyecto 5
clickboton5 = () => {
	let container = document.querySelector(".desarrollo__div");
	let alumnosTotales = [];
	let fragment1 = document.createDocumentFragment();
	let cantidad = prompt(`¿Cuántos alumnos son?`);

	const asistencia = (nombre,p,e) => {
		let presencia = prompt(nombre + ", Presencia (P/p), Inasistencias (A/a). Día: " + e);
		if (presencia == "p" || presencia == "P" || presencia == "pp") {
			alumnosTotales[p][1]++
		}
	}
	for (let i = 0; i < cantidad; i++) {
		alumnosTotales[i] = [prompt(`Nombre del alumno ${i + 1}`),0];
	}
	for (let i = 0; i < 30; i++) {
		for (alumno in alumnosTotales) {
			asistencia(alumnosTotales[alumno][0],alumno,i);
		}
	}
	for (alumno in alumnosTotales) {
		let div5 = document.createElement('DIV');
		let resultado = `${alumnosTotales[alumno][0]}:<br>
		Presencias:  <b>${alumnosTotales[alumno][1]}</b><br>
		Inasistencias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b><br>`;
		if (30 - alumnosTotales[alumno][1] > 18) {
			resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
		} else {resultado+= "<br><br>"}
		div5.innerHTML = resultado;
		fragment1.appendChild(div5);
	}
	container.appendChild(fragment1);
}
// Proyecto 6
clickboton6 = () => {
	let container = document.querySelector(".desarrollo__div");
	let time = 0;
	let p = document.createElement("P");
	container.appendChild(p);
	const myInterval = setInterval(()=>{
		try {
			time++;
			p.innerHTML = "Tiempo: <b>" + time + ".</b>";
			let a = document.querySelector(".desarrollo__div p b").textContent;
			a.toString(a);
			if (a == '30.') {
				InName = prompt("¿Cómo te llamás?");
				instate = prompt("¡Hola " + InName + " ¿Cómo estás?!");
				time = 0;
				if (instate == "Bien" || instate == "bien") {
					alert("Me alegro, disfruta de la pagina " + InName);	
				} else if (instate == "Mal" || instate == "mal") {
					alert("Oh, ojala que mañana mejoré, disfruta de la pagina " + InName);
				} else {alert("Disfruta de la pagina " + InName);}
			}
		}
		catch (e) {
			clearInterval(myInterval)
		}
	},1000);
}
// Proyecto 7
clickboton7 = () => {
	let container = document.querySelector(".desarrollo__div");
	let fragment1 = document.createDocumentFragment();
	const getInfo = (materia) => {
		materias = {
			fisica: ["Perez","pedro","pepito","cofla","maria"],
			programacion: ["Dalto","pedro","juan","pepito"],
			logica: ["Hernandez","pedro","juan","cofla","maria"],
			quimica: ["Rodriguez","juan","pepito","cofla","maria"]
		}
		if (materias[materia] !== undefined) {
			return [materias[materia],materia,materias];
		} else {
			return materias;
		}
	}
	const showMateria = (materia)=> {
		let info = getInfo(materia);

		if (info !== false) {
			let teacher = info[0][0];
			let alumnos = info[0];
			alumnos.shift();
			let a = alumnos.pop();
			alumnos.push(a + ".");
			return `El profesor de <b>${info[1]}</b> es: <b style="color:red">${teacher}</b><br>
				Los alumnos son: <b style="color:blue">${alumnos.join(", ")}</b><br><br>`;
		}
	}
	const buildDiv = (materia) => {
		let a = showMateria(materia);
		let div = document.createElement('div');
		div.innerHTML = a;
		fragment1.appendChild(div);
		container.appendChild(fragment1);
	}
	const buildClases = (alumno) => {
		let a = cantidadDeClases(alumno);
		let div = document.createElement('div');
		div.innerHTML = a;
		fragment1.appendChild(div);
		container.appendChild(fragment1);
	}
	const cantidadDeClases = (alumno) => {
		let info = getInfo();
		let clasesPresentes = [];
		let cantidadTotal = 0;
		for (data in info) {
			if (info[data].includes(alumno)) {
				cantidadTotal++;
				clasesPresentes.push(" " + data);
			}
		}
		let a = clasesPresentes.pop();
		clasesPresentes.push(a + ".");
		return `Cantidad de materias de <b style="color:blue">${alumno}</b>: <b>${cantidadTotal}</b><br>
		Materias: <b style="color:green">${clasesPresentes}</b><br/><br/>`;
	}
	buildDiv("fisica");
	buildDiv("programacion");
	buildDiv("logica");
	buildDiv("quimica");
	buildClases("cofla");
	buildClases("maria");
	buildClases("pedro");
	buildClases("pepito");
}
// Proyecto 8
clickboton8 = () => {
	// Variables
	// Funciones
	const buildForm = () => {
		let form8 = document.createElement("FORM");
		form8.classList.add("form8");
		let a = `<label>Ingresar Datos</label>`;
		let b = `<div class="from8_display">
			<label>Ingresar Temperatura</label>
			<input type="range" min="1" max="5" id="inTemperatur">
			<div class="form8__div"><p>Congelamiento</p><p>Frio</p><p>Tropical</p><p>calor</p><p>hipertermia</p></div>
		</div>`;
		let c = `<div class="from8_display">
			<label>Ingresar Comida</label>
			<input type="range" min="1" max="5" id="inFood">
			<div class="form8__div"><p>Envenenado</p><p>Crudo</p><p>Optima</p><p>Fita</p><p>Saturada</p></div>
		</div>`;
		let d = `<div class="from8_display"><input type="button" name="detector" class="from8_button"></div>`;
		form8.innerHTML = a + b + c + d;
		document.querySelector(".desarrollo__div").appendChild(form8);
		return [
		document.getElementById("inTemperatur"),
		document.getElementById("inFood"),
		document.querySelector(".from8_button"),
		document.createElement("DIV")]
	}
	const validarForm = () => {
		if (e[0].value == 1 && e[1].value == 1) {
			e[3].innerHTML = "<p>Muerto por congelamiento e Intoxicado</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 2 && e[1].value == 1) {
			e[3].innerHTML = "<p>Muerto por gripe</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 3 && e[1].value == 1) {
			e[3].innerHTML = "<p>Muerto por Envenamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 4 && e[1].value == 1) {
			e[3].innerHTML = "<p>Muerto por Fiebre</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 5 && e[1].value == 1) {
			e[3].innerHTML = "<p>Muerto por calentamiento y Envenenamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 1 && e[1].value == 2) {
			e[3].innerHTML = "<p>Muerto por congelamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 2 && e[1].value == 2) {
			e[3].innerHTML = "<p>Adaptación al frio con fátiga</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 3 && e[1].value == 2) {
			e[3].innerHTML = "<p>Vómitos, diarrea, nauseas</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 4 && e[1].value == 2) {
			e[3].innerHTML = "<p>Adaptación al calor con cansancio</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 5 && e[1].value == 2) {
			e[3].innerHTML = "<p>Muerto por calentamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 1 && e[1].value == 3) {
			e[3].innerHTML = "<p>Muerto por congelamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 2 && e[1].value == 3) {
			e[3].innerHTML = "<p>Adaptación al frio</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 3 && e[1].value == 3) {
			e[3].innerHTML = "<p>Estado optimo</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 4 && e[1].value == 3) {
			e[3].innerHTML = "<p>Adaptación al calor</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 5 && e[1].value == 3) {
			e[3].innerHTML = "<p>Muerto por calentamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 1 && e[1].value == 4) {
			e[3].innerHTML = "<p>Muerto por congelamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 2 && e[1].value == 4) {
			e[3].innerHTML = "<p>Adaptación al frio</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 3 && e[1].value == 4) {
			e[3].innerHTML = "<p>Sedentarismo</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 4 && e[1].value == 4) {
			e[3].innerHTML = "<p>Sedentario</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 5 && e[1].value == 4) {
			e[3].innerHTML = "<p>Muerto por calentamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 1 && e[1].value == 5) {
			e[3].innerHTML = "<p>Muerto por congelamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 2 && e[1].value == 5) {
			e[3].innerHTML = "<p>Adaptación al frio</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 3 && e[1].value == 5) {
			e[3].innerHTML = "<p>Obesidad</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 4 && e[1].value == 5) {
			e[3].innerHTML = "<p>Desidratación</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
		if (e[0].value == 5 && e[1].value == 5) {
			e[3].innerHTML = "<p>Muerto por calentamiento</p>";
			document.querySelector(".desarrollo__div").appendChild(e[3]);
		}
	}
	// Ejecución
	let e = buildForm();
	e[2].addEventListener("click", validarForm);
}
// Proyecto 9
clickboton9 = () => {
	// let fragment1 = document.createDocumentFragment();
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<h2>Dime lo que selecioné</h2>
	<input class="input9" type="text"></input>
	<div class="div9"></div>`
	let input = document.querySelector(".input9")
	let div1 = document.querySelector(".div9")
	input.addEventListener("select",(e)=>{
		let start = e.target.selectionStart;
		let end = e.target.selectionEnd;
		let text = input.value;
		div1.innerHTML = text.substring(start,end)
	});
}
// Proyecto 10
clickboton10 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `<div class="fast"></div>
	<div class="slow"></div>
	<div class="answer"></div>`
	let i = 0;
	let e = 0;
	let min = 60;
	let tf = 320; //320;
	let ts = 1000;//1000;
	let fast = document.querySelector(".fast");
	let slow = document.querySelector(".slow");
	let answer = document.querySelector(".answer");
	const a = setInterval(() => {
		i++;
		fast.innerHTML = ("Con lectura rápida en: " + i + ".");
	},tf)
	const b = setInterval(() => {
		e++;
		slow.innerHTML = ("Con lectura normal en: " + e + ".");
	},ts)
	setTimeout(()=>{
		clearInterval(a);
		clearInterval(b);
		answer.innerHTML = ("<p>Se excede en: " + (i - min) + "</p>")
	},(min * ts))
	// 128 - 125
}
// Proyecto 11
clickboton11 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `<div class="reloj">
		<div class="hora">00</div><div class="min">00</div><div class="seg">00</div>
		<div>|</div>
		<div class="dia">00</div><div class="mes">00</div><div class="year">00</div>
		<div>|</div>
		<button class="button11">Stop</button>
	</div>`
	const addZeros = n => {
		if (n.toString().length < 2) return "0".concat(n);
		return n;
	}
	const actualizarHora = () => {
		if (document.querySelector(".reloj")) {
			const time = new Date();
			document.querySelector(".hora").textContent = addZeros(time.getHours());
			document.querySelector(".min").textContent = addZeros(time.getMinutes());
			document.querySelector(".seg").textContent = addZeros(time.getSeconds());
			document.querySelector(".dia").textContent = addZeros(time.getDate());
			document.querySelector(".mes").textContent = addZeros(time.getMonth());
			document.querySelector(".year").textContent = addZeros(time.getYear()) + 1900;
		}
	}
	const a = setInterval(actualizarHora,1000);
	actualizarHora();
	document.querySelector(".button11").addEventListener("click",()=>{clearInterval(a)})
}
// Proyecto 12
clickboton12 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="modal-overlay">
		<div class="modal">
			<h2>¿En que idioma quieres visualizar la página?</h2>
			<button class="en">Ingles</button>
			<button class="es">Español</button>
		</div>
	</div>
	<button class="remove">Eliminar</button>`
	const modal = document.querySelector(".modal-overlay");
	const remove = document.querySelector(".remove");
	const definirIdioma = () => {
		document.querySelector(".en").addEventListener("click", ()=>{
			localStorage.setItem("idioma","en");
			cerrarModal();
		})
		document.querySelector(".es").addEventListener("click", ()=>{
			localStorage.setItem("idioma","es");
			cerrarModal();
		})
	}
	remove.addEventListener("click", ()=>{
		eliminar();
		abrirModal();
	})
	const cerrarModal = () => {
		modal.style.animation = "desaparecer 1s forwards";
		modal.style.display = "none";
		remove.style.display = "initial";
	}
	const abrirModal = () => {
		modal.style.animation = "aparecer 1s forwards";
		modal.style.display = "initial"
	}
	const eliminar = () => {
		localStorage.removeItem("idioma");
		remove.style.display = "none";
	}
	idioma = localStorage.getItem("idioma")
	if (idioma === null) {
		abrirModal();
		definirIdioma();
	}
	else {
		console.log(`Idioma: ${idioma}`);
		cerrarModal()

	}
}
// Proyecto 13
clickboton13 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="textures">
		<div class="texture0"></div>
		<div class="texture1"></div>
		<div class="texture2"></div>
		<div class="texture3"></div>
	</div>
	<div class="zone"></div>`;
	const zone = document.querySelector(".zone");
	zone.addEventListener("dragover", (e)=>{
		e.preventDefault();
	})
	zone.addEventListener("drop", (e)=>{
		let n = e.dataTransfer.getData("texture")
		zone.style.background = `url("textura${n}.png")`;
	})
	const textures = document.querySelector(".textures");
	for (let i = 0; i < textures.children.length; i++) {
		document.querySelector(`.texture${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e));
	}
	const transferirTextura = (n,e) => {
		e.dataTransfer.setData("texture", n);
	}
}
// Poryecto 14
clickboton14 = () => {
	let container = document.querySelector(".desarrollo__div");
	const desarrollo = type => {
		document.querySelector(".pregunta14").removeChild(document.querySelector(".select14"));
		document.querySelector(".pregunta14").removeChild(document.querySelector(".button14"));
		if (type == "text") {
			document.querySelector(".desarrollo14").innerHTML = `
			<div class="loading-bar14"></div>
			<div class="container14">Arrastre y Suelte un Archivo de texto</div>
			<div class="result14"></div>`
		} else if (type == "img") {
			document.querySelector(".desarrollo14").innerHTML = `
			<div class="loading-bar14"></div>
			<div class="container14">Arrastre y Suelte una imagen</div>
			<div class="result14"></div>`
		} else if (type == "video") {
			document.querySelector(".desarrollo14").innerHTML = `
			<div class="loading-bar14"></div>
			<div class="container14">Arrastre y Suelte un video</div>
			<div class="result14"></div>`
		}
		const zona = document.querySelector(".container14");
		const resultado = document.querySelector(".result14");
		const loadingBar = document.querySelector(".loading-bar14")
		zona.addEventListener("dragover", e => {
			e.preventDefault();
			changeStyle(e.srcElement, "#444");
		})
		zona.addEventListener("dragleave", e => {
			e.preventDefault();
			changeStyle(e.srcElement, "#888");
		})
		const changeStyle = (obj, color) => {
			obj.style.color = color;
			obj.style.border = `4px dashed ${color}`
		}
		if (type == "text") {
			zona.addEventListener("drop", e => {
				console.log(e);
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				zona.style.border = "4px solid #888";
				const reader = new FileReader();
				reader.readAsText(e.dataTransfer.files[0]);
				reader.addEventListener("load", e => {
					resultado.textContent = e.currentTarget.result;
				})
			})
		} else if (type == "img") {
			zona.addEventListener("drop", e => {
				let file = e.dataTransfer.files[0]
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.addEventListener("load", () => {
					let url = URL.createObjectURL(file)
					let img = document.createElement("IMG");
					img.setAttribute("src", url);
					img.classList.add("img14");
					resultado.appendChild(img);
				})
				zona.style.border = "4px solid #888";
			})
		} else if (type == "video") {
			zona.addEventListener("drop", e => {
				let file = e.dataTransfer.files[0];
				e.preventDefault();
				changeStyle(e.srcElement, "#888");
				const reader = new FileReader();
				reader.readAsArrayBuffer(file);
				reader.addEventListener("progress", e => {
					let carga = Math.round(e.loaded / file.size * 100);
					zona.textContent = `${carga}%`;
					loadingBar.style.padding = "75px 20px";
					if (document.querySelector("main").style.width <= "810px" && document.querySelector("main").style.width >= "500px") {
						loadingBar.style.width = `${carga/1.20}%`; //hasta el 83.2%;
					} else if (document.querySelector("main").style.width <= "500px" && document.querySelector("main").style.width >= "400px") {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 79.6%%;
					} else if (
						document.querySelector("main").style.width <= "400px"
						&& document.querySelector("main").style.width >= "350px"
						|| document.querySelector("main").style.width <= "400px"
						&& document.querySelector("main").style.width >= "350px"
						) {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 74.2%;
					} else if (
						document.querySelector("main").style.width <= "350px" 
						&& document.querySelector("main").style.width >= "300px" 
						|| document.querySelector("main").style.width <= "809px" 
						&& document.querySelector("main").style.width >= "755px"
						) {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 70.3%;
					} else if (document.querySelector("main").style.width >= "298px") {
						loadingBar.style.width = `${carga/1.0}%`; //hasta el 64.8%;
						loadingBar.style.height = `170px`;
					} else {
						loadingBar.style.width = `${carga/1.61}%`; //hasta el 62%;
					}
				})
				reader.addEventListener("loadend", e => {
					changeStyle(zona, "#2e7");
					zona.style.borderStyle = "solid";
					loadingBar.style.background = "#2e7";
					setTimeout(() => {
						zona.style.color = "#222";
						zona.style.animation = "aparecer 1s forwards";
						zona.textContent = "!Carga Completa!"
					},500)
				})
				reader.addEventListener("load", e => {
					let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'})
					let url = URL.createObjectURL(video);
					let img = document.createElement("VIDEO");
					img.setAttribute("src", url);
					img.setAttribute("controls", true);
					img.classList.add("img14")
					resultado.appendChild(img);
					img.style.width = "calc(100vw - 145px)";
				})
				zona.style.border = "4px solid #888";
			})
		}
	}
	container.innerHTML = `
	<div class="pregunta14">
		<select class="select14">
			<option value="text">Texto</option>
			<option value="img">Imagenes</option>
			<option value="video">Videos</option>
		</select>
		<button class="button14">Aceptar</button>
	</div>
	<div class="desarrollo14"></div>`;
	let confirmar = document.querySelector(".button14")
	confirmar.addEventListener("click", e => {
		let type = document.querySelector(".select14").value;
		desarrollo(type);
	})
}
// Poryecto 15
clickboton15 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `
	<div class="add-names"><input type="text" id="name" placeholder="Introduce un nombre"><button id="add">Añadir</button></div>
	<div class="names"></div>`;
	const IDBRequest = indexedDB.open("daltobase",1);
	IDBRequest.addEventListener("upgradeneeded",()=> IDBRequest.result.createObjectStore("name",{autoIncrement: true}))
	IDBRequest.addEventListener("success",() => readObject())
	IDBRequest.addEventListener("error",() => console.log("ocurrio un error al abrir la base de datos"))
	document.getElementById("add").addEventListener("click",()=> {
		let name = document.getElementById("name").value;
		if (name.length > 0) {
			if (document.querySelector(".possibly") != undefined) {
				if (confirm("Hay Elementos sin guardar: ¿Quiéres continuar?")) {
					addObject({name});
					document.getElementById("name").value = "";
					readObject();
				}
				else {
					addObject({name});
					document.getElementById("name").value = "";
					readObject();
				}
			}
			else {
				addObject({name});
				document.getElementById("name").value = "";
				readObject();
			}
		}
	})
	const addObject = object => {
		const IDBData = transactionOperation("readwrite","Objeto agregado correctamente");
		IDBData.add(object);
	}
	const readObject = () => {
		const IDBData = transactionOperation("readonly");
		const cursor = IDBData.openCursor();
		const fragment = document.createDocumentFragment();
		document.querySelector(".names").innerHTML = "";
		cursor.addEventListener("success",()=>{
			if (cursor.result) {
				let element = nameHTML(cursor.result.key,cursor.result.value);
				fragment.appendChild(element);
				cursor.result.continue();
				document.querySelector(".names").appendChild(fragment);
			}
		})
	}
	const modificarObject = (key, object) => {
		const IDBData = transactionOperation("readwrite","Objeto modificado correctamente");
		IDBData.put(object, key);
	}
	const eliminarObject = key => {
		const IDBData = transactionOperation("readwrite","Objeto eliminado correctamente");
		IDBData.delete(key);
	}
	const transactionOperation = (mode,msg) => {
		const IDBTransaction = IDBRequest.result.transaction("name",mode);
		const objectStore = IDBTransaction.objectStore("name");
		IDBTransaction.addEventListener("complete",()=>{
			if (msg) console.log(msg)
		})
		return objectStore;
	}
	const nameHTML = (id, result) => {
		const container = document.createElement("DIV");
		const h2 = document.createElement("h2");
		const options = document.createElement("DIV");
		const saveButton = document.createElement("button");
		const deleteButton = document.createElement("button");
		container.classList.add("name");
		options.classList.add("options");
		saveButton.classList.add("impossible");
		deleteButton.classList.add("delete");
		saveButton.textContent = "Guardar";
		deleteButton.textContent = "Eliminar";
		h2.textContent = result.name;
		h2.setAttribute("contenteditable","true");
		h2.setAttribute("spellcheck","false");
		options.appendChild(saveButton);
		options.appendChild(deleteButton);
		container.appendChild(h2);
		container.appendChild(options);
		h2.addEventListener("keyup",()=>{
			saveButton.classList.replace("impossible","possibly");
		})
		saveButton.addEventListener("click",()=>{
			if (saveButton.className == "possibly") {
				modificarObject(id,{name: h2.textContent})
				saveButton.classList.replace("possibly","impossible")
			}
		})
		deleteButton.addEventListener("click",()=>{
			eliminarObject(id);
			document.querySelector(".names").removeChild(container);
		})
		return container;
	}
}
// Poryecto 16
clickboton16 = () => {
	let container = document.querySelector(".desarrollo__div");
	container.innerHTML = `<div class="publicaciones"></div>`;
	const publicaciones = document.querySelector(".publicaciones");
	let contador = 0;
	const filetxt = {
			"content": [
				{
					"nombre": "Lucas Dalto",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Rancio Dalto",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Luis Román",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Cofla Cofla",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Fuis18 Larc",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Dalto Nico",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Ai Román",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Roberto Sanchez",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "José Carlos",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Alfonso Pedrosky",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Esto está de Rúcula",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Bruja Asquerosa",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Buenovich",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Hormigas Esteban",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Darin Coder",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Lupa Pincel",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Elver Gon",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Kariño",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "MaVeNi",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Juan Pijalvaso",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Absolutamente",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Tritocode",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "La Larcpedia de esto",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Tettatech",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Adiós Mundo",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "RanaulMasters",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "RubioProfe",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Rojo",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Deucht",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Masters",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Gamers",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Music",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Capi Sama",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "España Crew",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Delasama Gamer",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Lara Amely Violeta Perea",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Runier",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Chris",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Latinogato",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Jared Manuel",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Clave de Sol",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Miyu",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Diana",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Fan de Eric Wiserman",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Ramo",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Shido y Bianca",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				},
				{
					"nombre": "Eres Tu Danilo Montero",
					"contenido": "Declaralo esta noche así. Jesús tu eres el amigo que me ama, Jesús tu eres la esperanza de mi vida, Eer."
				},
				{
					"nombre": "Te veo",
					"contenido": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."
				}
			]
		}
	const createPublicationCode = (name,content) => {
		const container = document.createElement("DIV");
		const comentarios = document.createElement("DIV");
		const nombre = document.createElement("H3");
		const contenido = document.createElement("P");
		const btnComentario = document.createElement("INPUT");
		const btnEnviar = document.createElement("INPUT");

		container.classList.add("publicacion");
		comentarios.classList.add("comentarios");
		btnComentario.setAttribute("placeholder","Introduce tu comentario");
		nombre.textContent = name;
		contenido.textContent = content;
		btnComentario.setAttribute("type","text");
		btnEnviar.setAttribute("type","submit");

		comentarios.appendChild(btnComentario);
		comentarios.appendChild(btnEnviar);
		container.appendChild(nombre);
		container.appendChild(contenido);
		container.appendChild(comentarios);

		return container;
	}
	const cargarMasPublicaciones = entry => {
		if (entry[0].isIntersecting) cargarPublicaciones(5)
	}
	const observer = new IntersectionObserver(cargarMasPublicaciones)
	const cargarPublicaciones = /*async*/ num => {
		// const request = await fetch(filetxt);
		// const content = await request.json();
		const content = filetxt;
		const arr = content.content;
		const documentFragment = document.createDocumentFragment();
		for (let i = 0; i < num; i++) {
			if (arr[contador] != undefined) {
				const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].contenido);
				documentFragment.appendChild(newPublicacion);
				contador++;
				if (i == num-1) observer.observe(newPublicacion)
			} else if (document.getElementById("noMore") == undefined) {
				let noMore = document.createElement("H3");
				noMore.id = "noMore";
				noMore.textContent = "No hay más publicaciones";
				documentFragment.appendChild(noMore);
				publicaciones.appendChild(documentFragment);
			}
			else break;
		}
		publicaciones.appendChild(documentFragment);
	}
	cargarPublicaciones(10);
}
// Poryecto 17
clickboton17 = () => {
	container.innerHTML = ``;
}
