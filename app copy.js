var categorias = [
  {id_cat:"1",nombre_cat:"Consumo personal"},
  {id_cat:"2",nombre_cat:"Consumo industrial"}
]
var productos = [
  {id_pro:"1",id_cat_pro:"1",nombre_pro:"Harina de maiz"},
  {id_pro:"3",id_cat_pro:"1",nombre_pro:"Harina de trigo"},
  {id_pro:"2",id_cat_pro:"2",nombre_pro:"Harina de maiz"},
  {id_pro:"4",id_cat_pro:"1",nombre_pro:"Polenta"},
  {id_pro:"5",id_cat_pro:"2",nombre_pro:"Hojuelas"},
  {id_pro:"8",id_cat_pro:"1",nombre_pro:"Cereal azucarado"},
  {id_pro:"7",id_cat_pro:"1",nombre_pro:"Crema de chocolate"},
  {id_pro:"6",id_cat_pro:"1",nombre_pro:"Mantequilla de maní"},
  {id_pro:"9",id_cat_pro:"2",nombre_pro:"Maní en concha"},
]
var presentaciones = [
  {id_pre:"1",id_pro_pre:"9",nombre_pre:"Saco de 20 kg"},
  {id_pre:"2",id_pro_pre:"9",nombre_pre:"Saco de 45 kg"},
  {id_pre:"3",id_pro_pre:"9",nombre_pre:"Saco de 20 kg"},
  {id_pre:"4",id_pro_pre:"1",nombre_pre:"Bolsa 1 kg"},
  {id_pre:"5",id_pro_pre:"1",nombre_pre:"Bolsa 500 g"},
  {id_pre:"6",id_pro_pre:"3",nombre_pre:"Bolsa 900 g"},
  {id_pre:"7",id_pro_pre:"2",nombre_pre:"Saco de 25 kg"},
  {id_pre:"8",id_pro_pre:"2",nombre_pre:"Saco de 50 kg"},
  {id_pre:"9",id_pro_pre:"7",nombre_pre:"Envase 400 g"},
  {id_pre:"10",id_pro_pre:"7",nombre_pre:"Envase 1800 g"},
  {id_pre:"11",id_pro_pre:"4",nombre_pre:"Envase 800 g"},
  {id_pre:"14",id_pro_pre:"5",nombre_pre:"Saco de 19 kg"},
  {id_pre:"12",id_pro_pre:"8",nombre_pre:"Bolsa 500 g"},
]

const resultado = {
    categorias:{
      "Consumo industrial": {
        id: 2,
        productos:[]
    },
      "Consumo personal":{
        id: 1,
        productos: []
      },
    }
}

for (let i = 0; i < productos.length; i++) {   
  if (categorias.id_cat == productos.id_cat_pro) {
    resultado.push(
      {
        "id": productos[i].id_pro,
        "id_pro": productos[i].id_cat_pro,
        "nombre": productos[i].nombre_pro,
        "presents":[],
      }
    )
    
  }
  for (let j = 0; j < presentaciones.length; j++) {
    if (productos.id_pro == presentaciones.id_pro_pre) {
      resultado[i].presents.push({
        "id": presentaciones[j].id_pre,
        "id_pro": presentaciones[j].id_pro_pre,
        "nombre": presentaciones[j].nombre_pre,
      })
    }
  }
}
 console.log(resultado[0])