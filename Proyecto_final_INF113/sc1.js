// Array de 50 libros con títulos, autores, categorías, precios y URLs de portadas (usando placeholders)
const libros = [
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", categoria: "Literatura", precio: 15.99, portada: "https://via.placeholder.com/150" },
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", categoria: "Literatura", precio: 20.50, portada: "https://via.placeholder.com/150" },
    { titulo: "La Odisea", autor: "Homero", categoria: "Literatura", precio: 18.75, portada: "https://via.placeholder.com/150" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", categoria: "Literatura", precio: 22.00, portada: "https://via.placeholder.com/150" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "Literatura", precio: 19.99, portada: "https://via.placeholder.com/150" },
    { titulo: "Introducción a la Lingüística", autor: "Autor 6", categoria: "Lingüística", precio: 25.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Historia del Mundo", autor: "Autor 7", categoria: "Historia", precio: 30.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Biografía de Einstein", autor: "Autor 8", categoria: "Biografía", precio: 18.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Filosofía para Principiantes", autor: "Autor 9", categoria: "Filosofía", precio: 22.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Religiones del Mundo", autor: "Autor 10", categoria: "Religión", precio: 27.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Ciencias Naturales", autor: "Autor 11", categoria: "Ciencias", precio: 35.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Artes Visuales", autor: "Autor 12", categoria: "Artes", precio: 28.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Sociología Básica", autor: "Autor 13", categoria: "Ciencias Sociales", precio: 24.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Lingüística Avanzada", autor: "Autor 14", categoria: "Lingüística", precio: 26.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Literatura Contemporánea", autor: "Autor 15", categoria: "Literatura", precio: 21.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Historia Antigua", autor: "Autor 16", categoria: "Historia", precio: 29.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Biografía de Marie Curie", autor: "Autor 17", categoria: "Biografía", precio: 19.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Filosofía Moderna", autor: "Autor 18", categoria: "Filosofía", precio: 23.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Religión y Sociedad", autor: "Autor 19", categoria: "Religión", precio: 25.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Ciencias Físicas", autor: "Autor 20", categoria: "Ciencias", precio: 32.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Artes Escénicas", autor: "Autor 21", categoria: "Artes", precio: 27.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Psicología Social", autor: "Autor 22", categoria: "Ciencias Sociales", precio: 26.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Gramática Española", autor: "Autor 23", categoria: "Lingüística", precio: 20.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Poesía Moderna", autor: "Autor 24", categoria: "Literatura", precio: 18.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Historia Medieval", autor: "Autor 25", categoria: "Historia", precio: 28.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Biografía de Gandhi", autor: "Autor 26", categoria: "Biografía", precio: 17.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Ética y Moral", autor: "Autor 27", categoria: "Filosofía", precio: 24.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Budismo para Principiantes", autor: "Autor 28", categoria: "Religión", precio: 22.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Biología Celular", autor: "Autor 29", categoria: "Ciencias", precio: 33.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Historia del Arte", autor: "Autor 30", categoria: "Artes", precio: 29.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Antropología Cultural", autor: "Autor 31", categoria: "Ciencias Sociales", precio: 25.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Fonética y Fonología", autor: "Autor 32", categoria: "Lingüística", precio: 23.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Narrativa Latinoamericana", autor: "Autor 33", categoria: "Literatura", precio: 19.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Historia Contemporánea", autor: "Autor 34", categoria: "Historia", precio: 27.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Biografía de Frida Kahlo", autor: "Autor 35", categoria: "Biografía", precio: 18.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Metafísica", autor: "Autor 36", categoria: "Filosofía", precio: 26.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Cristianismo y Cultura", autor: "Autor 37", categoria: "Religión", precio: 24.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Química Orgánica", autor: "Autor 38", categoria: "Ciencias", precio: 34.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Música Clásica", autor: "Autor 39", categoria: "Artes", precio: 28.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Economía Política", autor: "Autor 40", categoria: "Ciencias Sociales", precio: 27.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Semántica", autor: "Autor 41", categoria: "Lingüística", precio: 21.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Teatro Moderno", autor: "Autor 42", categoria: "Literatura", precio: 20.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Historia del Renacimiento", autor: "Autor 43", categoria: "Historia", precio: 30.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Biografía de Nelson Mandela", autor: "Autor 44", categoria: "Biografía", precio: 19.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Lógica Formal", autor: "Autor 45", categoria: "Filosofía", precio: 25.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Islam y Modernidad", autor: "Autor 46", categoria: "Religión", precio: 23.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Física Cuántica", autor: "Autor 47", categoria: "Ciencias", precio: 36.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Cine y Sociedad", autor: "Autor 48", categoria: "Artes", precio: 29.50, portada: "https://via.placeholder.com/150" },
    { titulo: "Derecho Internacional", autor: "Autor 49", categoria: "Ciencias Sociales", precio: 28.00, portada: "https://via.placeholder.com/150" },
    { titulo: "Pragmática", autor: "Autor 50", categoria: "Lingüística", precio: 22.00, portada: "https://via.placeholder.com/150" }
];

// Inicializar el carrito
let carrito = [];

// Función para generar el catálogo de libros
function generarCatalogo() {
    const catalogoLibros = document.getElementById('catalogo-libros');
    if (!catalogoLibros) return; // Si no está en la página del catálogo, no hacer nada

    libros.forEach(libro => {
        const libroElement = document.createElement('div');
        libroElement.classList.add('libro');
        libroElement.innerHTML = `
            <img src="${libro.portada}" alt="${libro.titulo}">
            <h3>${libro.titulo}</h3>
            <p>Autor: ${libro.autor}</p>
            <p>Categoría: ${libro.categoria}</p>
            <p>Precio: $${libro.precio.toFixed(2)}</p>
            <input type="number" min="1" value="1" class="cantidad">
            <button class="agregar-carrito">Agregar al Carrito</button>
        `;
        catalogoLibros.appendChild(libroElement);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const libroElement = e.target.closest('.libro');
        const titulo = libroElement.querySelector('h3').textContent;
        const precio = parseFloat(libroElement.querySelector('p:nth-child(5)').textContent.replace('Precio: $', ''));
        const cantidad = parseInt(libroElement.querySelector('.cantidad').value);
        const libroEnCarrito = { titulo, precio, cantidad };
        carrito.push(libroEnCarrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    if (!listaCarrito) return; // Si no está en la página del catálogo, no hacer nada

    listaCarrito.innerHTML = '';
    let total = 0;
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Libro</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
        </tr>
    `;
    carrito.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.titulo}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>${item.cantidad}</td>
            <td>$${(item.precio * item.cantidad).toFixed(2)}</td>
        `;
        table.appendChild(row);
        total += item.precio * item.cantidad;
    });
    listaCarrito.appendChild(table);
    document.getElementById('total-pagar').textContent = total.toFixed(2);
}

// Cargar el carrito desde localStorage al cargar la página
window.addEventListener('load', function() {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarCarrito();
    }
    generarCatalogo();
});

// Evento para agregar al carrito
document.addEventListener('click', agregarAlCarrito);