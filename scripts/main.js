import {listproducts} from "./listproducts.js"
import {insertProduct} from "./insertProduct.js"

/**
 * Autor: Alvaro Dromant Ligero(Estudiante)
 * GitHub: 
 */

// Listamos los productos
document.addEventListener("DOMContentLoaded", listproducts)

document.addEventListener("click", () => {
 const btnform = document.getElementById("productos-tabla")

 btnform.addEventListener("click", () => {
    insertProduct()
 })
})