import { listproducts } from "./listproducts.js";
import { insertProduct } from "./insertProduct.js";
import { inventario } from "./products.js";

// List products when the document is loaded
//document.addEventListener("DOMContentLoaded", listproducts);

listproducts()

document.addEventListener("click", () => {
    const btnform = document.getElementById("productos-tabla");

    btnform.addEventListener("click", () => {
        insertProduct();
    });
});

// Handle the search button click
const btnBuscar = document.getElementById("btn-buscar");
btnBuscar.addEventListener("click", () => {
    const searchText = document.getElementById("buscar-producto").value.trim().toLowerCase();

    // Filter products based on the search text
    const filteredProducts = inventario.filter((product) => product.nombre.toLowerCase().includes(searchText));

    // Clear the table
    const cleanTable = document.getElementById("clear-table");
    cleanTable.innerHTML = "";

    // List the filtered products
    listproducts(filteredProducts);
});
