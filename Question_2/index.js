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

console.log(productList);

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const number1 = getRandomArbitrary(0, 4)
const number2 = getRandomArbitrary(0, 4)
const number3 = getRandomArbitrary(0, 4)

console.log('nums', number1, number2, number3)


function sendProducts(array, opc1, opc2) {

  const productImpression = [];
  array.map((Element) => {

  })

}





const button = document.getElementById("send_print");

button.addEventListener('click', function () {
  sendProducts(productList);
})