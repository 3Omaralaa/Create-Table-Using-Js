let the_input1 = document.getElementById("rows");
let the_input2 = document.getElementById("columns");
let the_button = document.querySelector(".btn");

the_button.addEventListener("click", function () {
  let body = document.querySelector("body");
  let table = document.createElement("table");
  body.appendChild(table);
  for (i = 0; i < Number(the_input1.value) ; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (j = 0; j < +the_input2.value; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
      let text = document.createTextNode("test");
      td.appendChild(text);
      td.style.border = "1px solid #333"
    }
    
  }
  table.style.border = "1px solid #333"
  table.style.marginTop = "10px"
});
