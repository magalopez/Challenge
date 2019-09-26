// Escriba una función en javascript que permita trasladar 
// el contenido del arreglo productList al arreglo productImpression.

// Condición: Cada envío debe tener 2 productos, 
// y los productos no deben repetirse en cada envío.

const productList = [{
    name: "Ford",
    model: "Fiesta",
    price: '12,500'
  },
  {
    name: "BMW",
    model: "320",
    price: '15,000'
  },
  {
    name: "Fiat",
    model: "panda",
    price: '10,000'
  },
  {
    name: "Volvo",
    model: "80",
    price: '20,000'
  },
]

// console.log(productList);

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let productImpression = []

function sendProducts(array) {
  if (productImpression.length === 4) {
    console.log('Ya se agregaron todo los productos');
  } else {
    let number1 = getRandomArbitrary(0, 4);
    let number2 = getRandomArbitrary(0, 4);
   
    if (number1 !== number2) {
      let opt1 = array[number1];
      let opt2 = array[number2];
      
      if(productImpression.includes(opt1, opt2))
      {
        console.log('No se puede hacer el envio')
      }
      else
      {
        productImpression.push(opt1,opt2);
      }
    sendProducts(array);
  }
}
console.log('productImpression',productImpression);
}
sendProducts(productList);