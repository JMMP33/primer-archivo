let opcion;
let opcion2;
while (parseInt(opcion) != 4) {
    opcion = prompt(`Elige una opción
        1 - Mostrar numeros de Trabajos
        2 - Ordenar todos los trabajos
        3 - Buscar numero de trabajo
        4 - Salir`);
    if (![1,2,3,4,5].includes(parseInt(opcion))) {
        alert('Opción inválida');
    }
    if (opcion == 1) {
      while (parseInt(opcion2) != 4) {
        opcion2 = prompt(`Elige una opción
            1 - Mostrar numeros de Trabajos
            2 - Ordenar todos los trabajos
            3 - Buscar numero de trabajo
            4 - Salir`);
        if (![1,2,3,4,5].includes(parseInt(opcion2))) {
            alert('Opción inválida');
        }
      }
        if (opcion2 == 1){}

    }else if (opcion == 2) {
        
    }else if (opcion == 3) {
        
    }else if (opcion == 4) {
        alert('Haz salido del sistema');
    }
}
