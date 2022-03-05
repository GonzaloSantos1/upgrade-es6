// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList1 = [32, 54, 21, 64, 75, 43];

let pointListCopy = [...pointsList1];
console.log(pointListCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let toy1Copy = {...toy1};
console.log(toy1Copy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const pointsListTotal = [...pointsList, ...pointsList2];
console.log(pointsListTotal);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const TotalToys = {...toy, ...toyUpdate};
console.log(TotalToys);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operators.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsUpdate = [...colors];
colorsUpdate.splice(2, 1);
console.log(colorsUpdate);
