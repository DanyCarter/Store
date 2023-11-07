import { inventario } from "./products.js";

export const listproducts = (products) => {
    const cleanTable = document.getElementById("clear-table");
    cleanTable.innerHTML = "";

    const productsToDisplay = products || inventario;

    productsToDisplay.forEach((item) => {
        const row = cleanTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = item.nombre;
        cell2.innerHTML = item.cantidad;
        cell3.innerHTML = item.precio;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "BORRAR";
        deleteButton.addEventListener("click", () => {
            const confirmed = window.confirm("¿Quieres borrar este producto?");
            if (confirmed) {
                const index = productsToDisplay.findIndex(product => product.id === item.id);
                if (index !== -1) {
                    productsToDisplay.splice(index, 1);
                    row.remove();
                }
            }
        });
        cell4.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.innerText = "EDITAR";
        editButton.addEventListener("click", () => {
            editButton.style.display = "none"; // Ocultar el botón EDITAR
            const cantidadInput = document.createElement("input");
            cantidadInput.className = "tableInput";
            cantidadInput.value = item.cantidad;

            const nombreInput = document.createElement("input");
            nombreInput.className = "tableInput";
            nombreInput.value = item.nombre;

            const precioInput = document.createElement("input");
            precioInput.className = "tableInput";
            precioInput.value = item.precio;

            // Replace the cell content with input fields
            cell1.innerHTML = "";
            cell1.appendChild(nombreInput);

            cell2.innerHTML = "";
            cell2.appendChild(cantidadInput);

            cell3.innerHTML = "";
            cell3.appendChild(precioInput);

            // Add a confirm button
            const confirmButton = document.createElement("button");
            confirmButton.innerText = "CONFIRMAR";
            cell4.appendChild(confirmButton);

            confirmButton.addEventListener("click", () => {
                // Update the quantity and price values with the new values from the input fields
                item.nombre = nombreInput.value
                item.cantidad = cantidadInput.value;
                item.precio = precioInput.value;

                // Update the cell content
                cell1.innerHTML = item.nombre;
                cell2.innerHTML = item.cantidad;
                cell3.innerHTML = item.precio;

                // Mostrar nuevamente el botón EDITAR
                editButton.style.display = "inline";

                // Remove the confirm button
                cell4.removeChild(confirmButton);
            });
        });

        cell4.appendChild(editButton);
    });
};
