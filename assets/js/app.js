
function trello() {
	var container = document.getElementById("container");
	var listBox = document.createElement("div");
	var btn = document.createElement("button");
	var input = document.createElement("input");
	var nodoText = document.createTextNode("Guardar");
	var comDelete = document.createElement("a");
	var ex = document.createElement('i'); 
    
	container.removeChild(document.getElementsByClassName("btn")[0]);

	/*Atributos*/
	listBox.setAttribute("id", "listBox");
	input.setAttribute("id", "valor", "type", "text");
	input.placeholder = "Añadir una lista...";
	btn.setAttribute("id", "greenBtn");
	comDelete.setAttribute("id", "comDelete");
	ex.classList.add('fa', 'fa-times', 'exIcon');

	//Creando nodos
	btn.appendChild(nodoText);
	listBox.appendChild(btn);
	listBox.appendChild(input);
	comDelete.appendChild(ex);
	listBox.appendChild(comDelete);
	container.appendChild(listBox);

	//Eliminar la ventana nueva con la cruz y devolverse al primer botón
	ex.addEventListener('click', function(){
    container.removeChild(listBox);
    var oldBtn = document.createElement("button");
    oldBtn.setAttribute("id", "btn");
    oldBtn.innerHTML = 'Añadir una lista...';
    container.appendChild(oldBtn);
	})

	var contiene = document.getElementById("contiene");

	//Darle funcionalidad al botón "Guardar", generando el nombre y una nueva lista
	btn.addEventListener("click", function(){
		var list = document.getElementById("valor").value;
		document.getElementById("valor").value = "";
		var divTarj = document.createElement("div");
		divTarj.setAttribute("id", "divTarj");
		var parrafo = document.createElement("p");
		parrafo.setAttribute("id", "listName")
		var lista = document.createTextNode(list);

		var agregarTarjeta = document.createElement("a");
		var textoTarjeta = document.createTextNode("Añadir tarjeta...");
		agregarTarjeta.setAttribute("id", "addTarj")
		agregarTarjeta.appendChild(textoTarjeta);

		parrafo.appendChild(lista);
		divTarj.appendChild(parrafo);
		divTarj.appendChild(agregarTarjeta);
		contiene.appendChild(divTarj);

		container.removeChild(listBox);
		agregarTarjeta.setAttribute("href", "#")

		//-----------------------------------------------------------------
		
		var btnBlue = document.createElement("button");
		var btnBlueText = document.createTextNode("Añadir lista...");
		btnBlue.classList.add("btn", "btnBlue");
		btnBlue.style.cssFloat = "right";

		btnBlue.appendChild(btnBlueText);
		contiene.appendChild(btnBlue);

		btnBlue.addEventListener("click", function(){
			contiene.removeChild(btnBlue);

			var listBox2 = document.createElement("div");
			var btn2 = document.createElement("button");
			var input2 = document.createElement("input");
			var nodoText2 = document.createTextNode("Guardar");
			var comDelete2 = document.createElement("a");
			var ex2 = document.createElement('i'); 
	    
			/*Atributos*/
			listBox2.setAttribute("id", "listBox2");
			input2.setAttribute("id", "valor2", "type", "text");
			input2.placeholder = "Añadir una lista...";
			btn2.setAttribute("id", "greenBtn2");
			comDelete2.setAttribute("id", "comDelete2");
			ex2.classList.add('fa', 'fa-times', 'exIcon');

			//Creando nodos
			btn2.appendChild(nodoText2);
			listBox2.appendChild(btn2);
			listBox2.appendChild(input2);
			comDelete2.appendChild(ex2);
			listBox2.appendChild(comDelete2);
			contiene.appendChild(listBox2);

			listBox2.style.cssFloat = "right";
		})

		//Añadir tarjeta al clickear la leyenda "Añadir tarjeta"
		agregarTarjeta.addEventListener("click", function(){
			var divNewTarj = document.createElement("div");
			var textArea = document.createElement("textarea");
			textArea.classList.add("textArea");
			var btnAñadir = document.createElement("button");
			var nodoTextAñadir = document.createTextNode("Añadir");
			var aDelete = document.createElement("a");
			var exDelete = document.createElement('i');

			btnAñadir.setAttribute("id", "greenBtnAñadir");
			aDelete.setAttribute("id", "aDelete");
			exDelete.classList.add('fa', 'fa-times', 'exIcon');
			divNewTarj.setAttribute("id", "divNewTarj")

			btnAñadir.appendChild(nodoTextAñadir);
			divNewTarj.appendChild(btnAñadir);
			divNewTarj.appendChild(textArea);
			aDelete.appendChild(exDelete);
			divNewTarj.appendChild(aDelete);	
			contiene.appendChild(divNewTarj);

		})

		//Añadir tarjeta al clickear "Añadir"
		/*
		document.getElementById("greenBtnAñadir").addEventListener("click", function(){
			var 
		})*/

	}) 
}
