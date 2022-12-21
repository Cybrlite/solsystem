document.getElementById("menuButton").addEventListener("click", clickMenuButton)
document.getElementById("menuIcon").addEventListener("click", clickMenuIcon)

function clickMenuButton(e){
  let node = e.target;
  document.getElementById("menu").style.display = "block"
}

function clickMenuIcon(e){
  let node = e.target;
  document.getElementById("menu").style.display = "none"
}

window.addEventListener("click", function(e) {
  let node = e.target;
  const menuElement = document.getElementById("menu");
  const cssObj = window.getComputedStyle(menuElement, null);
  let arrParents = getParents(node);
  if ((node.id != "menu" && node.id != "menuButton") && (!arrParents.includes("menu") && !arrParents.includes("menuButton")) && cssObj.getPropertyValue("display") != "none") {
    document.getElementById("menu").style.display = "none"
  }
});

function getParents(elem) {
  let parents = [];
  while(elem.parentNode && elem.parentNode.nodeName.toLowerCase() != "body") {
    elem = elem.parentNode;
    parents.push(elem.id);
  }
  return parents;
}