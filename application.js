/* funkcia pre vytvorenie potrebnych html elemntov a ich pridanie do povodneho HTML subpru */

function addRequiredElements(){
/* ziskanie pouzivanych elementov z dokomentu a ich naslende ulozenie do premennych */
  var newSearchBox = document.createElement("div");
  var newBox1 = document.createElement("div");
  var newInputBox = document.createElement("input");
  var newLabel = document.createElement("label");
  var parentElement = document.getElementById("laptop-list");

  parentElement.insertBefore(newSearchBox, parentElement.childNodes[0]);
  newSearchBox.appendChild(newBox1);
  newBox1.appendChild(newLabel);
  newBox1.appendChild(newInputBox);
  
  newLabel.innerHTML = "Search for product:";
  newSearchBox.classList.add("search-box-miap");
  newInputBox.classList.add("search-input-miap");
  newInputBox.placeholder = "Search by name...";
  newBox1.classList.add("wrap-box-miap");

}

/* funkcia pre pridanie stylesheetu suvisiaceho s novovytvorenymi elementami */
function addCss() {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "stylesheet-miap.css";

  head.appendChild(link);
}

addCss();
addRequiredElements("laptop-list");