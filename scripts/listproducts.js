import { inventario } from "./products.js";

export const listproducts = () => {

    const table = document.getElementById("inventario-tabla")

    inventario.forEach(item => {

        const row = table.insertCell()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)

        cell1.innerHTML = item.nombre
        cell2.innerHTML = item.cantidad
        cell3.innerHTML = item.precio

        const deleteButton = document.createElement("button")
        deleteButton.innerText = "BORRAR"
        deleteButton.addEventListener("click", () => {

        })

        cell4.appendChild(deleteButton)

        const editButton = document.createElement("button")
        editButton.innerText = "EDITAR"
        editButton.addEventListener("click", () => {

        })

        cell4.appendChild(editButton)
        
    });
}