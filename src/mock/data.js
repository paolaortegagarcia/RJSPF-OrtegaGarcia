const lista = [
  {
    key: "01",
    category: "Textil",
    name: "Scrunchie",
    price: 200,
    description: "Scrunchies de algodón, tamaño grande y variedad de colores",
    img: "../img/textil-scrunchies.jpg",
    stock: 20
  },
  {
    key: "02",
    category: "Accesorios",
    name: "Llavero Leather",
    price: 300,
    description: "Llavero de cuero sintético, color negro",
    img: "../img/accesorios-llavero.jpg",
    stock: 10
  },
  {
    key: "03",
    category: "Joyeria",
    name: "Aros Miniatura",
    price: 500,
    description: "Aros de acero blanco, variedad de diseños",
    img: "../img/joyeria-arosminiatura.jpg",
    stock: 50
  }
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("no hay datos")
      } else {
        resolve(lista)
      }
    }, 1000)
  })
}

export const getItem= (key) => {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(lista.find((item)=> item.key === key))
    }, 1000);
  })
}

