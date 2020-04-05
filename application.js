/* funkcia pre vytvorenie potrebnych html elemntov a ich pridanie do povodneho HTML subpru */

function addRequiredElements(){
/* ziskanie pouzivanych elementov z dokomentu a ich naslende ulozenie do premennych */
/*Search podla nazvu */
  var parentElement = document.getElementById("laptop-list");
  var newSearchBox = document.createElement("div");
  var newBox1 = document.createElement("div");
  var newInputBox1 = document.createElement("input");
  var newLabel1 = document.createElement("label");
  var newInputBox2_a = document.createElement("input");
  var newInputBox2_b = document.createElement("input");
  var newLabel2 = document.createElement("label");
  var newBox2 = document.createElement("div");

  parentElement.insertBefore(newSearchBox, parentElement.childNodes[0]);
  newSearchBox.appendChild(newBox1);
  newSearchBox.appendChild(newBox2);
  newBox1.appendChild(newLabel1);
  newBox1.appendChild(newInputBox1);
  newBox2.appendChild(newLabel2);
  newBox2.appendChild(newInputBox2_a);
  newBox2.appendChild(newInputBox2_b);
  
  newLabel1.innerHTML = "Hladat podla nazvu: ";
  newSearchBox.classList.add("search-box-miap");
  newInputBox1.classList.add("search-input-miap");
  newInputBox1.placeholder = "Search by name...";
  newInputBox1.onkeyup = function() {searchWithInputText()};
  newBox1.classList.add("wrap-box1-miap");

  newLabel2.innerHTML = "Filtrovat podla ceny: ";
  newInputBox2_a.classList.add("search-input2-miap");
  newInputBox2_b.classList.add("search-input2-miap");
  newInputBox2_a.placeholder = "Od...";
  newInputBox2_b.placeholder = "Do...";
  newBox2.classList.add("wrap-box2-miap");

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

/* funkcia pre ziskanie vsetkych class names z pre polozky v zozname */
function getClassNamesOfItemInList(){
  const classArray = Array.from(document.querySelectorAll(".item"))

  for (var i = 0; i < classArray.length; i++) {
    console.log(classArray[i])
  }
}

/* funkcia pre vyuzivanie textoveho prehliadania */
function searchWithInputText(){
  var searchBarInput = document.getElementsByClassName('search-input-miap');
  console.log(searchBarInput[0]);
  list = document.getElementById('laptop-list');
  console.log(list);
  var input = searchBarInput[0].value.toLowerCase();
  var shopItems = list.querySelectorAll('.item');
  
  for(i=0; i< shopItems.length; i++){
    let name = shopItems[i].getElementsByClassName('name')[0];
    let processor = shopItems[i].getElementsByClassName('processor')[0];
    console.log('name: ', name.innerHTML, processor.innerHTML);
    if(name.innerHTML.toLowerCase().indexOf(input) > -1){
      shopItems[i].style.display = "";
    }
    else{
      shopItems[i].style.display = 'none';
    }

  }
  
}


addCss();
addRequiredElements("laptop-list");
getClassNamesOfItemInList();
/*searchWithInputText();*/