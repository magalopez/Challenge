const menu = document.querySelector('#main_nav')

function getText (nodes) {
  if(!nodes)
  {
    return false
  }
  if(nodes.hasChildNodes())
  {
    let children = [];
    nodes.childNodes.forEach((node) => {
      children.push(getText(node));
      return { text: node.innerText}
    })
  }
  else
  {
    return false
  }
} 

const tree = getText(menu)
console.log('tree', tree)