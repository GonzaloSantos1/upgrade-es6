// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'},
];

let usersName = users.map((o) => o.name);
console.log(usersName);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users2 = [
  {id: 1, name: 'Abel'},
  {id: 2, name: 'Julia'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Amanda'},
];

let updatedUsers = users2.map((o) => {
  if (o.name[0] === 'A') {
    return 'Anacleto';
  } else {
    return o.name;
  }
});

console.log(updatedUsers);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  {isVisited: true, name: 'Tokyo'},
  {isVisited: false, name: 'Madagascar'},
  {isVisited: true, name: 'Amsterdam'},
  {isVisited: false, name: 'Seul'},
];

let visitedCities = cities.map((city) => {
  if (city.isVisited == true) {
    return city.name + ' (Visitado)';
  } else {
    return city.name;
  }
});

console.log(visitedCities);
