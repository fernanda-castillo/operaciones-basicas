const autos = [
  {
    marca: "Toyota",
    año: 2020,
    mecanicosAutorizados: ["Juan Pérez", "María López", "Carlos Sánchez"]
  },
  {
    marca: "Ford",
    año: 2018,
    mecanicosAutorizados: ["Ana Martínez", "Pedro Gómez", "Luis Torres"]
  },
  {
    marca: "Honda",
    año: 2022,
    mecanicosAutorizados: ["Sara Díaz", "Javier Cruz", "Marta Fernández"]
  },
  {
    marca: "Chevrolet",
    año: 2019,
    mecanicosAutorizados: ["Diego Ramírez", "Lucía Ortega", "Mario Álvarez"]
  },
  {
    marca: "BMW",
    año: 2021,
    mecanicosAutorizados: ["Fernando Castillo", "Carolina Ruiz", "Sofía Herrera"]
  },
  {
    marca: "Mercedes-Benz",
    año: 2023,
    mecanicosAutorizados: ["Antonio Vargas", "Rosa Estrada", "Tomás Jiménez"]
  },
  {
    marca: "Nissan",
    año: 2017,
    mecanicosAutorizados: ["Gabriela Silva", "Héctor López", "Laura Mendoza"]
  },
  {
    marca: "Hyundai",
    año: 2020,
    mecanicosAutorizados: ["Pablo Castro", "Verónica Peña", "Andrés Romero"]
  },
  {
    marca: "Mazda",
    año: 2021,
    mecanicosAutorizados: ["Carmen Villanueva", "Manuel Rojas", "Natalia Pérez"]
  },
  {
    marca: "Kia",
    año: 2019,
    mecanicosAutorizados: ["Ricardo Moreno", "Elena Castillo", "Álvaro Reyes"]
  }
];

for (let i = 0; i < autos.length; i++) {
  console.log(autos[i].año);
  console.log(autos[i].marca);
  console.log(autos[i].mecanicosAutorizados);
}
for (let i = 0; i < autos.length; i++) {
  for (let j = 0; j < autos[i].mecanicosAutorizados.length; j++) { 
    // En la línea de arriba la condición es grande porque se accede a la longitud (length) de un arreglo (mecanicosAutorizados) 
    // de un objeto (autos[i]) de un arreglo (autos)
    console.log(autos[i].mecanicosAutorizados[j])
  }
}