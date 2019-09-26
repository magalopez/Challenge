// Escriba una función en javascript que le permita 
// capturar los textos del menú :
// (Ejemplo: Home, Sample Page, Products Page, etc).

const menu = document.querySelector('#main_nav')
const test = document.querySelector('#main_div')
console.log('menu', menu)
console.log('test',test)

const nodeTree = getNodeText(menu)
console.log('tree', nodeTree.text);

function getNodeText (nodes) {
  if (nodes.hasChildNodes()) //determina nodos hijos 
  {
    let children = []
    for (let i=0; i< nodes.childNodes.length; i++)
    {
      children.push(getNodeText(nodes.childNodes[i])); //recursion
    }
   return {text : nodes.innerText}
  } 
  else 
  {
    return false 
  }
} 

function showText (obj) {
  let string = obj.text
  let array = string.match(/[^\r\n]+/g); 
  let text = '';
  
  array.forEach(element => {
    text += `<p>${element}</p>`
  });
  return text
}

const button = document.getElementById("print_tree");

button.addEventListener("click", function() {
  document.getElementById("root").innerHTML = showText(nodeTree);
  });
  