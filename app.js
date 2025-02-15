// Crear variables para listas de amigos
let personas = [];

// Función para sortear amigo
function sortearAmigo() {
    if (personas.length < 3) {
        alert('Por favor, ingresa al menos 3 nombres.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * personas.length);
        let amigoSorteado = personas[indiceAleatorio];

        // Limpiar la lista y mostrar el resultado en la pantalla
        document.getElementById("listaAmigos").innerHTML = "";
        personas = []; // Vaciar el array después del sorteo
        
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<p>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</p>`;
    }
}

// Función para agregar amigos
function agregarAmigo() {
    let cajaTexto = document.getElementById("amigo");
    let nuevoAmigo = cajaTexto.value.trim();

    if (nuevoAmigo) {
        personas.push(nuevoAmigo);
        cajaTexto.value = ""; // Limpiar el input después de agregar
        listarAmigos();
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

// Función para listar amigos en la pantalla
function listarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    personas.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
