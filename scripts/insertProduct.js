import { inventario } from "./products.js";
import { listproducts } from "./listproducts.js";

export const insertProduct = () => {
    const productForm = document.getElementById("productos-tabla")
    productForm.addEventListener("submit", function(event){
    //Le quitamos las propiedades al form
        event.preventDefault()
         
    // Capturar los valores introducidos por el usuario
    const nombreProducto = document.getElementById("nombre-producto").value
    const cantidadProducto = parseInt(document.getElementById("cantidad-producto").value)
    const precioProducto = parseFloat(document.getElementById("precio-producto").value)

    if(nombreProducto && !isNaN(cantidadProducto) && !isNaN(precioProducto)){
    // Crear un nuevo objeto producto
        const newProduct = {
            id: inventario.length + 1,
            nombre: nombreProducto,
            cantidad: cantidadProducto,
            precio: precioProducto
        }

    // Agregar el nuevo producto al inventario
        inventario.push(newProduct)

        const cleanTable = document.getElementById("clear-table")
        cleanTable.innerHTML = "";

    // Limpiar los campos del formulario
        productForm.reset()

        listproducts()

    }


    })
    
}