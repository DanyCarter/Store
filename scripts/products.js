export { inventario };

const getRandomQuantity = () => {
    return ((Math.random() * 30) + 1).toFixed(0);
}


const inventario = [
    { id: 1, nombre: "Bruja", cantidad: getRandomQuantity(), precio: 79.95 },
    { id: 2, nombre: "Spider-Man", cantidad: getRandomQuantity(), precio: 69.99 },
    { id: 3, nombre: "Dinosaurio", cantidad: getRandomQuantity(), precio: 59.81 },
    { id: 4, nombre: "Stranger Things", cantidad: getRandomQuantity(), precio: 44.99 },
    { id: 5, nombre: "Hada", cantidad: getRandomQuantity(), precio: 44.83 },
    { id: 6, nombre: "Pirata", cantidad: getRandomQuantity(), precio: 39.99 },
    { id: 7, nombre: "Conejita", cantidad: getRandomQuantity(), precio: 125 },
    { id: 8, nombre: "Cheerleader", cantidad: getRandomQuantity(), precio: 15.99 },
    { id: 9, nombre: "Vaquero", cantidad: getRandomQuantity(), precio: 59.99 },
    { id: 10, nombre: "Harley Quinn", cantidad: getRandomQuantity(), precio: 54.99 },
    { id: 11, nombre: "Payaso", cantidad: getRandomQuantity(), precio: 44.99 },
    { id: 12, nombre: "Vampiro", cantidad: getRandomQuantity(), precio: 49.99 },
    { id: 13, nombre: "Los años 80", cantidad: getRandomQuantity(), precio: 46.99 },
    { id: 14, nombre: "Hocus Pocus", cantidad: getRandomQuantity(), precio: 49.99 },
    { id: 15, nombre: "Calabaza", cantidad: getRandomQuantity(), precio: 51.95 },
    { id: 16, nombre: "Chucky", cantidad: getRandomQuantity(), precio: 59.99 },
    { id: 17, nombre: "Muñeca", cantidad: getRandomQuantity(), precio: 29.99 },
    { id: 18, nombre: "Ángel", cantidad: getRandomQuantity(), precio: 25.32 },
    { id: 19, nombre: "Batman", cantidad: getRandomQuantity(), precio: 59.99 },
    { id: 20, nombre: "Oso", cantidad: getRandomQuantity(), precio: 32.99 },
    { id: 21, nombre: "Zombi", cantidad: getRandomQuantity(), precio: 56.39 },
    { id: 22, nombre: "Ninja", cantidad: getRandomQuantity(), precio: 44.99 },
    { id: 23, nombre: "Superhéroe", cantidad: getRandomQuantity(), precio: 57.46 },
    { id: 24, nombre: "Toy Story", cantidad: getRandomQuantity(), precio: 39.99 },
    { id: 25, nombre: "Fantasma", cantidad: getRandomQuantity(), precio: 99.99 },
];