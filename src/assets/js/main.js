// 'use strict';

// function defaultRowCountController(){
//   let foo = 10;
// }

// function defaultColCountController(){
//   let foo = 12;
// }

// defaultRowCount Controller(){
//   let foo = 10;
// }
// deafultColCount Controller(){
//   let foo = 12;
// }

// SPREADSHEET_DB Controller(){
//   const foo = spreadsheet_db;
// }

// function SPREADSHEETController(){
//   const foo = spreadsheet_db;
// }
  
  //const SPREADSHEET_DB = "spreadsheet_db";
  // const SPREADSHEET_DB  ='spreadsheet_db';
  //let SPREADSHEET_DB ="";

$(document).ready(function(){
   $("#home").click(function(){
     $("#middle").toggle();
 });
});

let defaultRowCount = 10; // No of rows
let defaultColCount = 10; // No of cols
let st_row=0;
let end_row=0;
let st_col=0;
let end_col=0;
let color = "";
let cell_clr = false;
let cell_sum =false;


initializeData = () => {
  // console.log("initializeData");

  const data = [];
  for (let i = 0; i <= defaultRowCount; i++) {
    const child = [];
    for (let j = 0; j <= defaultColCount; j++) {
      child.push("");
    }
    data.push(child);
  }
  return data;
};

getData = () => {
  // SPREADSHEET_DB = "spreadsheet_db";
  let data = localStorage.getItem('spreadsheet_db');
  if (data === undefined || data === null) {
    return initializeData();
  }
  return JSON.parse(data);
};

saveData = data => {
  localStorage.setItem('spreadsheet_db', JSON.stringify(data));
};

resetData = data => {
  localStorage.removeItem('spreadsheet_db');
  this.createSpreadsheet();
};

createHeaderRow = () => {
  const tr = document.createElement("tr");
  tr.setAttribute("id", "h-0");
  for (let i = 0; i <= defaultColCount; i++) {
    const th = document.createElement("th");
    th.setAttribute("id", `h-0-${i}`);
    th.setAttribute("class", `${i === 0 ? "" : "column-header"}`);
    
    if (i !== 0 && i<=26 ) {
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `${(i+9).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
     
      th.appendChild(span);
    } else if(i !== 0 && i>26 && i<=52 ) {
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `A${(i-17).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      // dropDownDiv.setAttribute("class", "dropdown");
      // dropDownDiv.innerHTML = `<button class="dropbtn" id="col-dropbtn-${i}">+</button>
      //   <div id="col-dropdown-${i}" class="dropdown-content">
      //     <p class="col-insert-left">Insert 1 column left</p>
      //     <p class="col-insert-right">Insert 1 column right</p>
      //     <p class="col-delete">Delete column</p>
      //   </div>`;
      th.appendChild(span);
      // th.appendChild(dropDownDiv);
    }  else if(i !== 0 && i>52 && i<=78){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `B${(i-43).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      // dropDownDiv.setAttribute("class", "dropdown");
      // dropDownDiv.innerHTML = `<button class="dropbtn" id="col-dropbtn-${i}">+</button>
      //   <div id="col-dropdown-${i}" class="dropdown-content">
      //     <p class="col-insert-left">Insert 1 column left</p>
      //     <p class="col-insert-right">Insert 1 column right</p>
      //     <p class="col-delete">Delete column</p>
      //   </div>`;
      th.appendChild(span);
      // th.appendChild(dropDownDiv);
    } else if(i !== 0 && i>78 && i<=104){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `C${(i-69).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);
      // th.appendChild(dropDownDiv);

    } else if(i !== 0 && i>104 && i<=130){

      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `D${(i-95).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if (i !== 0 && i>130 && i<=156) {
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `E${(i-121).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>156 && i<=182){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `F${(i-147).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>182 && i<=208){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `G${(i-173).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>208 && i<=234){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `H${(i-199).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>234 && i<=260){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `I${(i-225).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if (i !== 0 && i>260 && i<=286) {
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `J${(i-251).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>286 && i<=312){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `K${(i-277).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>312 && i<=338){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `L${(i-303).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>338 && i<=364){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `M${(i-329).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>364 && i<=390){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `N${(i-355).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>390 && i<=416){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `O${(i-381).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>416 && i<=442){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `P${(i-407).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>442 && i<=468){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `Q${(i-433).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }else if(i !== 0 && i>468 && i<=494){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `R${(i-459).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    } else if(i !== 0 && i>494){
      const span = document.createElement("span");
      span.contentEditable = false;
      span.innerHTML = `S${(i-485).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      const dropDownDiv = document.createElement("div");
      th.appendChild(span);

    }
    tr.appendChild(th);
  }
  return tr;
    
    
};

// createHeaderRow = () => {
//   const tr = document.createElement("tr");
//   tr.setAttribute("id", "h-0");
//   for (let i = 0; i <= defaultColCount; i++) {
//     const th = document.createElement("th");
//     th.setAttribute("id", `h-0-${i}`);
//     th.setAttribute("class", `${i === 0 ? "" : "column-header"}`);
//     // th.innerHTML = i === 0 ? `` : `Col ${i}`;
//     if (i !== 0) {
//       const span = document.createElement("span");
//       span.contentEditable = true;
//       span.innerHTML = `A`;
//       span.setAttribute("class", "column-header-span");
//       const dropDownDiv = document.createElement("div");
//       dropDownDiv.setAttribute("class", "dropdown");
//       dropDownDiv.innerHTML = `<button class="dropbtn" id="col-dropbtn-${i}">+</button>
//         <div id="col-dropdown-${i}" class="dropdown-content">
//           <p class="col-insert-left">Insert 1 column left</p>
//           <p class="col-insert-right">Insert 1 column right</p>
//           <p class="col-delete">Delete column</p>
//         </div>`;
//       th.appendChild(span);
//       th.appendChild(dropDownDiv);
//     }
//     tr.appendChild(th);
//   }
//   return tr;
// };

createTableBodyRow = rowNum => {
  const tr = document.createElement("tr");
  tr.setAttribute("id", `r-${rowNum}`);
  for (let i = 0; i <= defaultColCount; i++) {
    const cell = document.createElement(`${i === 0 ? "th" : "td"}`);
    if (i === 0) {
      cell.contentEditable = false;

      const span = document.createElement("span");
      // var img = document.createElement("img");
 
      // img.src = "assets/img/attachment.svg";
      // img.width = "12";
      // img.height = "12";
      // img.setAttribute('onclick', 'alert(test()')
      // span.appendChild(img);
      // cell.appendChild(span);
      const s = document.createElement("span");
      s.innerHTML = rowNum;
      cell.appendChild(s)

      // cell.appendChild(dropDownDiv);
      cell.setAttribute("class", "row-header");
    } else {
      cell.contentEditable = true;
    }
    cell.setAttribute("id", `r-${rowNum}-${i}`);
    // cell.id = `${rowNum}-${i}`;
    tr.appendChild(cell);
  }
  return tr;
};

createTableBody = tableBody => {
  for (let rowNum = 1; rowNum <= defaultRowCount; rowNum++) {
    tableBody.appendChild(this.createTableBodyRow(rowNum));
  }
};

// Fill Data in created table from localstorage
populateTable = () => {
  const data = this.getData();
  if (data === undefined || data === null) return;

  for (let i = 1; i < data.length; i++) {
    for (let j = 1; j < data[i].length; j++) {
      const cell = document.getElementById(`r-${i}-${j}`);
      if(cell){
        cell.innerHTML = data[i][j];
      }
    }
  }
};

//bold
$(document).ready(function() {
  $('#jBold').click(function() {
    document.execCommand('bold');
  });
});

// Utility function to add row
addRow = (currentRow, direction) => {
  let data = this.getData();
  const colCount = data[0].length;
  const newRow = new Array(colCount).fill("");
  if (direction === "top") {
    data.splice(currentRow, 0, newRow);
  } else if (direction === "bottom") {
    data.splice(currentRow + 1, 0, newRow);
  }
  defaultRowCount++;
  saveData(data);
  this.createSpreadsheet();
};

// Utility function to delete row
deleteRow = currentRow => {
  let data = this.getData();
  data.splice(currentRow, 1);
  defaultRowCount++;
  saveData(data);
  this.createSpreadsheet();
};

// Utility function to add columns
addColumn = (currentCol, direction) => {
  let data = this.getData();
  for (let i = 0; i <= defaultRowCount; i++) {
    if (direction === "left") {
      data[i].splice(currentCol, 0, "");
    } else if (direction === "right") {
      data[i].splice(currentCol + 1, 0, "");
    }
  }
  defaultColCount++;
  saveData(data);
  this.createSpreadsheet();
};

// Utility function to delete column
deleteColumn = currentCol => {
  let data = this.getData();
  for (let i = 0; i <= defaultRowCount; i++) {
    data[i].splice(currentCol, 1);
  }
  defaultColCount++;
  saveData(data);
  this.createSpreadsheet();
};

// Map for storing the sorting history of every column;
const sortingHistory = new Map();

// Utility function to sort columns
sortColumn = () => {
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  currentCol = res_id;
  let spreadSheetData = this.getData();
  let data = spreadSheetData.slice(1);
  if (!data.some(a => a[currentCol] !== "")) return;
  if (sortingHistory.has(currentCol)) {
    const sortOrder = sortingHistory.get(currentCol);
    switch (sortOrder) {
      case "desc":
        data.sort(ascSort.bind(this, currentCol));
        sortingHistory.set(currentCol, "asc");
        break;
      case "asc":
        data.sort(dscSort.bind(this, currentCol));
        sortingHistory.set(currentCol, "desc");
        break;
    }
  } else {
    data.sort(ascSort.bind(this, currentCol));
    sortingHistory.set(currentCol, "asc");
  }
  data.splice(0, 0, new Array(data[0].length).fill(""));
  saveData(data);
  this.createSpreadsheet();
  addEvents();
};

// Compare Functions for sorting - ascending
const ascSort = (currentCol, a, b) => {
  let _a = a[currentCol];
  let _b = b[currentCol];
  if (_a === "") return 1;
  if (_b === "") return -1;

  // Check for strings and numbers
  if (isNaN(_a) || isNaN(_b)) {
    _a = _a.toUpperCase();
    _b = _b.toUpperCase();
    if (_a < _b) return -1;
    if (_a > _b) return 1;
    return 0;
  }
  return _a - _b;
};

// Descending compare function
const dscSort = (currentCol, a, b) => {
  let _a = a[currentCol];
  let _b = b[currentCol];
  if (_a === "") return 1;
  if (_b === "") return -1;

  // Check for strings and numbers
  if (isNaN(_a) || isNaN(_b)) {
    _a = _a.toUpperCase();
    _b = _b.toUpperCase();
    if (_a < _b) return 1;
    if (_a > _b) return -1;
    return 0;
  }
  return _b - _a;
};

createSpreadsheet = () => {
  const spreadsheetData = this.getData();
  defaultRowCount = spreadsheetData.length - 1 || defaultRowCount;
  defaultColCount = spreadsheetData[0].length - 1 || defaultColCount;

  const tableHeaderElement = document.getElementById("table-headers");
  const tableBodyElement = document.getElementById("table-body");

  const tableBody = tableBodyElement.cloneNode(true);
  tableBodyElement.parentNode.replaceChild(tableBody, tableBodyElement);
  const tableHeaders = tableHeaderElement.cloneNode(true);
  tableHeaderElement.parentNode.replaceChild(tableHeaders, tableHeaderElement);

  tableHeaders.innerHTML = "";
  tableBody.innerHTML = "";

  tableHeaders.appendChild(createHeaderRow(defaultColCount));
  createTableBody(tableBody, defaultRowCount, defaultColCount);

  populateTable();

  // attach focusout event listener to whole table body container
  tableBody.addEventListener("focusout", function(e) {
    if (e.target && e.target.nodeName === "TD") {
      let item = e.target;
      const indices = item.id.split("-");
      let spreadsheetData = getData();
      spreadsheetData[indices[1]][indices[2]] = item.innerHTML;
      saveData(spreadsheetData);
    }
  });

  // Attach click event listener to table body
  tableBody.addEventListener("click", function(e) {
    if (e.target) {
      if (e.target.className === "dropbtn") {
        const idArr = e.target.id.split("-");
        document
          .getElementById(`row-dropdown-${idArr[2]}`)
          .classList.toggle("show");
      }
      if (e.target.className === "row-insert-top") {
        const indices = e.target.parentNode.id.split("-");
        addRow(parseInt(indices[2]), "top");
      }
      if (e.target.className === "row-insert-bottom") {
        const indices = e.target.parentNode.id.split("-");
        addRow(parseInt(indices[2]), "bottom");
      }
      if (e.target.className === "row-delete") {
        const indices = e.target.parentNode.id.split("-");
        deleteRow(parseInt(indices[2]));
      }
    }
  });

  // Attach click event listener to table headers
  tableHeaders.addEventListener("click", function(e) {
    if (e.target) {
      // if (e.target.className === "column-header-span") {
      //   sortColumn(parseInt(e.target.parentNode.id.split("-")[2]));
      // }
      if (e.target.className === "dropbtn") {
        const idArr = e.target.id.split("-");
        document
          .getElementById(`col-dropdown-${idArr[2]}`)
          .classList.toggle("show");
      }
      if (e.target.className === "col-insert-left") {
        const indices = e.target.parentNode.id.split("-");
        addColumn(parseInt(indices[2]), "left");
      }
      if (e.target.className === "col-insert-right") {
        const indices = e.target.parentNode.id.split("-");
        addColumn(parseInt(indices[2]), "right");
      }
      if (e.target.className === "col-delete") {
        const indices = e.target.parentNode.id.split("-");
        deleteColumn(parseInt(indices[2]));
      }
    }
  });
};

createSpreadsheet();

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function saveit(){
  var myString = localStorage.getItem(SPREADSHEET_DB);
console.log("mystring", myString);
// chrome.downloads.download({
//     url: "data:text/plain," + myString,
//     filename: "data.txt",
//     conflictAction: "uniquify", // or "overwrite" / "prompt"
//     saveAs: false, // true gives save-as dialogue
// }, function(save) {
//     console.log("Downloaded item with ID", downloadId);
// });
 // var elHtml = document.getElementById('demo').innerHTML;
  // document.getElementById("demo").innerHTML = myString;
  //   var elHtml = document.getElementById('demo').innerHTML;
  //   var a = document.createElement('a');
  //   a.href     = 'data:attachment/csv,';
  //   a.target   ='_blank';
  //   a.download = 'myFile.csv,' + encodeURIComponent(elHtml); ;
  //   a.click();

   // var res = 'Coordinates: {""name"":""rect"",""all_points_x"":[121,643,655,121],""all_points_y"":[127,121,452,471]}","{}"';
   //  document.getElementById("demo").innerHTML = myString;
    // var elHtml = document.getElementById('demo').innerHTML;
    var link = document.createElement('a');
    var mimeType = 'text/plain';

    link.setAttribute('download', 'Download.txt');
    link.setAttribute('href', 'data:' + mimeType  +  ';charset=utf-8,' + encodeURIComponent(myString));
    link.click();

}


// document.getElementById("reset").addEventListener("click", e => {
//   if (
//     confirm("This will erase all data and set default configs. Are you sure?")
//   ) {
//     this.resetData();
//   }
// });



function openAttachment() {
  document.getElementById('attachment').click();
}

function fileSelected(input){
  document.getElementById('btnAttachment').value = "File: " + input.files[0].name
}


// function getValue(){
//                var retVal = prompt("Enter your name : ", "your name here");
//                document.getElementById("demo1").innerHTML = retVal;
//              }

function getValue(){
  var retVal = prompt("Enter the name of the project", "New Project");
  if (retVal == null) {
    console.log("printing");
    document.getElementById("spreadsheethide").style.display = "none";
    Createmptytable();
  } else{
    localStorage.setItem("project",retVal)
    // document.getElementById("demo").innerHTML = retVal;
    CreateTable(); 
    showtable();
  }
}

function myprint() {
    window.print();
}

function changeFont() {
  console.log("changeFont()")
    document.execCommand("fontSize", false, "8");
    var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "8") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "8px";
        }
    }
}

function changeFont1() {
    document.execCommand("fontSize", false, "9");
    var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "9") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "9px";
        }
    }
}

function dropFunction() {
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
    document.getElementById(`myDropdown-${res_id}`).classList.toggle("show");
}

function myFunction2() {
    document.getElementById("my-Dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.drop-btn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dr-btn')) {

    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function changeFont1() {
    document.execCommand("fontSize", false, "9");
    var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "8") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = "9px";
        }
    }
}

$(document).ready(function(){
  
  var fontSize = 16;
  
  $('#minus').click(function(){
    if (fontSize > 6)
      fontSize-=2;
    document.execCommand("fontSize", false, "1");
    resetFont();
  });
  
  $('#plus').click(function(){
    if (fontSize < 64)
      fontSize+=2;
    document.execCommand("fontSize", false, "1");
    resetFont();
  });
  
  function resetFont(){
    $("font[size=1]").removeAttr("size").css("font-size", fontSize + "px");
  }
})



  var theInput = document.getElementById("favcolor");
      var theColor = theInput.value;
      
      function setcolor(){
      // Get Selection
      sel = window.getSelection();
      if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
      }
      // Set design mode to on
      document.designMode = "on";
      if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      // Colorize text
      document.execCommand("ForeColor", false, theInput.value);
      // Set design mode to off
      document.designMode = "off";
    }

$(document).ready(function(){
  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

// function getValue(){
//                var retVal = prompt("Enter your project name : ", "your project name here");
//                localStorage.setItem("project",retVal)
//                document.getElementById("demo").innerHTML = retVal;
//                // document.write("You have entered : " + retVal);
//             }
//          //-->
function getValue(){
  var retVal = prompt("Enter the name of the project", "New Project");
  if (retVal == null) {
    console.log("printing");
    document.getElementById("spreadsheethide").style.display = "none";
    // Createmptytable();
  } else{
    localStorage.setItem("project",retVal)
    // document.getElementById("demo").innerHTML = retVal;
    CreateTable(); 
    showtable();
  }
}

function Createmptytable(){
  var row = document.getElementById("myRow");
  var x = row.insertCell(2);
  x.innerHTML = " ";
}

        
function CreateTable() {
         
        // NOW CREATE AN INPUT BOX TYPE BUTTON USING createElement() METHOD.
        var button = document.createElement('input');

        // SET INPUT ATTRIBUTE 'type' AND 'value'.
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Read Table Data');
        var a = document.getElementById('demo');
        // button.setAttribute('id','demo');
        var b = localStorage.getItem("project")
        button.setAttribute('value', b);

        var row = document.getElementById("myRow");
         var x = row.insertCell(2);
        
         x.innerHTML = b;
         // x.setAttribute(onclick,'showtable();');
    
        // ADD THE BUTTON's 'onclick' EVENT.
        button.setAttribute('onclick', 'GetTableValues()');

        // FINALLY ADD THE NEWLY CREATED TABLE AND BUTTON TO THE BODY.
        // document.body.appendChild(table);
        // a.appendChild(button);
    }

    function showtable(){
      document.getElementById("spreadsheethide").style.display = "block";
    }
    
document.body.addEventListener('click', function() {
  document.getElementById("rightclicked").style.display = "none";
})
document.body.addEventListener('contextmenu', function() {
  document.getElementById("rightclicked").style.display = "none";
})
document.getElementById("spreadsheethide").addEventListener('contextmenu', function(ev) {
  ev.stopPropagation();
  ev.preventDefault();
  rightclick();
  return false;
}, false);

function rightclick() {
  var e = window.event;
  
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id1 = res[1]
  var res_id2 = res[2]
  res_id2 = parseInt(res_id2)
  console.log("res",res[2]);
  // if(res_id2 ==0){
  //   document.getElementById("insert_col").style.display="none";
  //   document.getElementById("del_col").style.display="none";
  //   document.getElementById("insert_cell").style.display="none";
  //   document.getElementById("del_cell").style.display="none";
  // }
  // if(res_id1 ==0 && res_id2 ==0){
  //   var cantThinkOfAName = document.getElementById("rightclicked");
  //   cantThinkOfAName.style.display = "none";
  //   // cantThinkOfAName.style.left = e.clientX + "px";
  //   // cantThinkOfAName.style.top = e.clientY + "px";
  // }
  if(res_id1 ==0 || res_id2 ==0){
    var cantThinkOfAName = document.getElementById("rightclicked");
    cantThinkOfAName.style.display = "none";
  }

  else{
    var cantThinkOfAName = document.getElementById("rightclicked");
    cantThinkOfAName.style.display = "block";
    cantThinkOfAName.style.left = e.clientX + "px";
    cantThinkOfAName.style.top = e.clientY + "px";
  }
}

var tbl = document.getElementById("table-main");

        if (tbl != null) {

            for (var i = 0; i < tbl.rows.length; i++) {

                for (var j = 0; j < tbl.rows[i].cells.length; j++){

                    tbl.rows[i].cells[j].onmousedown = function (event) { 
                      if (event.which == 3){

                      getval(this); 
                      } else if(event.which == 1) {
                          getCellVal(this); 
                      } 
                    };

                    tbl.rows[i].cells[j].onfocusout = function (event) { 
                      
                          addsum(this); 
                      
                    };
                }

            }

        }

function addEvents(){
  var tbl = document.getElementById("table-main");

        if (tbl != null) {

            for (var i = 0; i < tbl.rows.length; i++) {
                console.log("cell lenght",tbl.rows[i].cells.length) 
                for (var j = 0; j < tbl.rows[i].cells.length; j++){

                    tbl.rows[i].cells[j].onmousedown = function (event) {

                      if (event.which == 3){

                      getval(this); 
                      } else if(event.which == 1) {
                          getCellVal(this); 
                      } 
                    };

                    tbl.rows[i].cells[j].onfocusout = function (event) { 
                      
                          addsum(this); 
                      
                    };
                }

            }

        }
}
        function getval(cel) {
            console.log("test",cel.id)
            localStorage.setItem("cell",cel.id);
            if(cell_clr ==true){

            }
            // document.getElementById("demo").innerHTML = cel.id;
        }

        function getCellVal(cel) {
            console.log("getCellVal()",cel.id)
            localStorage.setItem("cell",cel.id);
            if(cell_clr==true){
              console.log("getCellVal() cell_clr",color)
              cell_clr = false;
              document.getElementById(cel.id).style.backgroundColor=color;

            }
            
           
            // document.getElementById("demo").innerHTML = cel.id;
        }

        function addsum(){
          var sum = 0;
          // console.log("addsum")
          if(cell_sum==true){
              var sum_id = localStorage.getItem("sum_cell");
              var sum_value = document.getElementById(sum_id).innerText;
              console.log("summ",sum_value)
              var res = sum_value.split("(");
              console.log("value",res[1])
              var a = res[1];
              a= a.split(")");
              console.log("a",a)
              b= a[0].split(",");
              console.log("spli",b)

              for (i=0;i<b.length;i++){
                console.log("bb",b[i])
                if(b[i] && b[i]!=' ' && b[i]!=null){
                  console.log("bbb",b[i])
                  b[i]= parseInt(b[i])
                  sum += b[i];
                }
                
              }

              // console.log("summ",sum)
              document.getElementById(sum_id).innerText= sum;
              cell_sum=false;
              // res = res[]
              // console.log("valye",res)
            }
        }


function swaptext(){
  // document.getElementById("demo").innerHTML = "Hello World";
let count = 0;
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  console.log("res",res[2]);
  var el = document.getElementById(`h-0-${res_id}`);
  for (let m = 0; m< defaultColCount.length; m++){
    console.log("count",count)
    if(document.getElementById(`h-0-${m}`).innerHTML=="Task"){
      count= count+1;
      console.log("count",count)
    }

  }
  el.innerHTML = "Task"
}

function swaptext2(){
  var tbl = document.getElementById("table-main");
  let count = 0;
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  console.log("res",res[2]);
  var el = document.getElementById(`h-0-${res_id}`);
    for (var j = 1; j  <=defaultRowCount; j++){
      console.log("testloop",i);
      var row = document.getElementById(`r-${j}`);
      var x = document.getElementById(`r-${j}-${res_id}`)
  var div = document.createElement('div');
    div.setAttribute('id','input_container');
     var button = document.createElement('input');
     button.setAttribute('type','text');
     button.setAttribute('class', 'datepicker ');
     var img_tag = document.createElement('img');
     img_tag.src = "https://cdn4.iconfinder.com/data/icons/36-slim-icons/87/calender.png";
     img_tag.setAttribute('id','input_img');

     x.appendChild(div);
     div.appendChild(button);
     div.appendChild(img_tag);
   }

   $(function() {
     $(".datepicker").datepicker();
   });
  
  // }
  for (let m = 0; m< defaultColCount.length; m++){
    console.log("count",count)
    if(document.getElementById(`h-0-${m}`).innerHTML=="From"){
      count= count+1;
      console.log("count",count)
    }
    
    

  }
  el.innerHTML = "From"
}

function swaptext3(){
  let count = 0;
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  console.log("res",res[2]);
  var el = document.getElementById(`h-0-${res_id}`);
   for (var j = 1; j  <=defaultRowCount; j++){
      console.log("testloop",i);
      var row = document.getElementById(`r-${j}`);
  // var row = document.getElementById("r-8-1");
  var x = document.getElementById(`r-${j}-${res_id}`)
    var div = document.createElement('div');
    div.setAttribute('id','input_container');
     var button = document.createElement('input');
     button.setAttribute('type','text');
     button.setAttribute('class', 'datepicker ');
     var img_tag = document.createElement('img');
     img_tag.src = "https://cdn4.iconfinder.com/data/icons/36-slim-icons/87/calender.png";
     img_tag.setAttribute('id','input_img');

     x.appendChild(div);
     div.appendChild(button);
     div.appendChild(img_tag);
   }

   $(function() {
     $(".datepicker").datepicker();
   });
  for (let m = 0; m< defaultColCount.length; m++){
    console.log("count",count)
    if(document.getElementById(`h-0-${m}`).innerHTML=="To"){
      count= count+1;
      console.log("count",count)
    }

  }
  el.innerHTML = "To"
}

function removeSpecial(){
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  console.log("res",res[2]);
  // var el = document.getElementById(`h-0-${res_id}`);
  // el.innerText = `${(res_id+9).toString(36).toUpperCase()}`;
  const data = this.getData();
  if (data === undefined || data === null) {
      console.log("removeSpecial() if")
      for (var j = 1; j  <=defaultRowCount; j++){
      console.log("testloop",i);
      var row = document.getElementById(`r-${j}`);
      console.log("res sds",`r-${j}-${res_id}`);
      var x = document.getElementById(`r-${j}-${res_id}`)
      // var x = document.getElementById(`r-${j}-${res_id}`)
  // var row = document.getElementById("r-8-1");
    // var x = row.insertCell(res_id);
    var element = document.getElementById('date');
    // button.setAttribute('id', 'date');
     // button.setAttribute('data-placeholder',' ');
     // button.setAttribute('aria-required','true')
     // button.setAttribute('value', 'raj')
     if(element){
      x.removeChild(element);
     }
     
  }

  }
  else{
    console.log("removeSpecial() else")
    for (let i = 1; i < data.length; i++) {
      var row = document.getElementById(`r-${j}`);
    for (let j = 1; j < data[i].length; j++) {
      var x = document.getElementById(`r-${j}-${res_id}`)
      var element = document.getElementById('date');
    // button.setAttribute('id', 'date');
     // button.setAttribute('data-placeholder',' ');
     // button.setAttribute('aria-required','true')
     // button.setAttribute('value', 'raj')
     if(element){
      x.removeChild(element);
     }
    }
  }
  }
  

   var el = document.getElementById(`h-0-${res_id}`);
   var el_id = parseInt(res_id);

    if (el_id !== 0 && el_id<=26 ) {
      
      el.innerText = `${(el_id+9).toString(36).toUpperCase()}`;
    } else if(el_id !== 0 && el_id>26 && el_id<=52 ) {
      
      el.innerHTML = `A${(el_id-17).toString(36).toUpperCase()}`;
    
    } else if(el_id !== 0 && el_id>52 && el_id<=78){
    
      el.innerHTML = `B${(el_id-43).toString(36).toUpperCase()}`;
    
    } else if(el_id !== 0 && el_id>78 && el_id<=104){
      
      el.innerHTML = `C${(el_id-69).toString(36).toUpperCase()}`;
      

    } else if(el_id !== 0 && el_id>104 && el_id<=130){

      el.innerHTML = `D${(el_id-95).toString(36).toUpperCase()}`;
    
    }else if (el_id !== 0 && el_id>130 && el_id<=156) {
      
      el.innerHTML = `E${(el_id-121).toString(36).toUpperCase()}`;
    
    }else if(el_id !== 0 && el_id>156 && el_id<=182){
      
      el.innerHTML = `F${(el_id-147).toString(36).toUpperCase()}`;
    
    }else if(el_id !== 0 && el_id>182 && el_id<=208){
      
      el.innerHTML = `G${(el_id-173).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>208 && el_id<=234){
      
      el.innerHTML = `H${(el_id-199).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>234 && el_id<=260){

      el.innerHTML = `I${(el_id-225).toString(36).toUpperCase()}`;

    }else if (el_id !== 0 && el_id>260 && el_id<=286) {
    
      el.innerHTML = `J${(el_id-251).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>286 && el_id<=312){
     
      el.innerHTML = `K${(el_id-277).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>312 && el_id<=338){
    
      el.innerHTML = `L${(el_id-303).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>338 && el_id<=364){
    
      el.innerHTML = `M${(el_id-329).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>364 && el_id<=390){
      
      el.innerHTML = `N${(el_id-355).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>390 && el_id<=416){

      el.innerHTML = `O${(el_id-381).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>416 && el_id<=442){

      el.innerHTML = `P${(el_id-407).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>442 && el_id<=468){
    
      el.innerHTML = `Q${(el_id-433).toString(36).toUpperCase()}`;

    }else if(el_id !== 0 && el_id>468 && el_id<=494){
      
      el.innerHTML = `R${(el_id-459).toString(36).toUpperCase()}`;

    } else if(el_id !== 0 && el_id>494){
      
      el.innerHTML = `S${(el_id-485).toString(36).toUpperCase()}`;
    }
}



function Addcoloms(){
  let count = 0;
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  console.log("res",res[2]);
  var el = document.getElementById(`h-0-${res_id}`);
  let data = this.getData();
  data[0].splice(res_id, 0, "");
  for (var j = 1; j  <=defaultRowCount; j++){
      console.log("testloop",j);
      
      var row = document.getElementById(`r-${j}`);
      var x = row.insertCell(res_id);
      x.contentEditable= true;
      x.setAttribute("id",`r-${j}-${res_id}`)
      addEvents();
      data[j].splice(res_id, 0, "");
      saveData(data)
      // data[j].splice(res_id, 0, "");
      // saveData(data);
      
    // var row = document.getElementById("r-8-1");
     
      // var x = row.insertCell(res_id);
      // const data = this.getData();
      // console.log("data ",data)
      // var button = document.createElement('button');
      // button.setAttribute('class','file');
      // x.contentEditable = true;
      
       // button.setAttribute('value', 'raj')
       // x.appendChild(button);
   }
   defaultColCount++;


    var el_id = '';
    var sp_res = '';
    var sp_res_id ='';
    var el_value = '';
    res_id = parseInt(res_id)
    var next_col = res_id+1;
   // console.log("next_col ",next_col)
   for (var k = next_col; k<=defaultColCount; k++){
    console.log("defaultColCount ",defaultColCount);
    for(var l = 0; l<defaultRowCount; l++){
      if(l ==0){
        if(k==defaultColCount){
          var row = document.getElementById('h-0');
          var x = row.insertCell(k);
          x.setAttribute("id", `h-0-${k}`);
          // let data = this.getData();
          // data[0].splice(defaultColCount, 0, "");
          // saveData(data);
          // x.innerText ="A"
          if (k !== 0 && k<=26 ) {
            x.innerText = `${(k+9).toString(36).toUpperCase()}`;
          } else if(k !== 0 && k>26 && k<=52 ) {
            
            x.innerHTML = `A${(k-17).toString(36).toUpperCase()}`;
          
          } else if(k !== 0 && k>52 && k<=78){
          
            x.innerHTML = `B${(k-43).toString(36).toUpperCase()}`;
          
          } else if(k !== 0 && k>78 && k<=104){
            
            x.innerHTML = `C${(k-69).toString(36).toUpperCase()}`;
            

          } else if(k !== 0 && k>104 && k<=130){

            x.innerHTML = `D${(k-95).toString(36).toUpperCase()}`;
          
          }else if (k !== 0 && k>130 && k<=156) {
            
            el.innerHTML = `E${(k-121).toString(36).toUpperCase()}`;
          
          }else if(k !== 0 && k>156 && k<=182){
            
            el.innerHTML = `F${(k-147).toString(36).toUpperCase()}`;
          
          }else if(k !== 0 && k>182 && k<=208){
            
            x.innerHTML = `G${(k-173).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>208 && k<=234){
            
            x.innerHTML = `H${(k-199).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>234 && k<=260){

            x.innerHTML = `I${(k-225).toString(36).toUpperCase()}`;

          }else if (k !== 0 && k>260 && k<=286) {
          
            x.innerHTML = `J${(k-251).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>286 && k<=312){
           
            x.innerHTML = `K${(k-277).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>312 && k<=338){
          
            x.innerHTML = `L${(k-303).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>338 && k<=364){
          
            x.innerHTML = `M${(k-329).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>364 && k<=390){
            
            x.innerHTML = `N${(k-355).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>390 && k<=416){

            x.innerHTML = `O${(k-381).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>416 && k<=442){

            x.innerHTML = `P${(k-407).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>442 && k<=468){
          
            x.innerHTML = `Q${(k-433).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>468 && k<=494){
            
            x.innerHTML = `R${(k-459).toString(36).toUpperCase()}`;

          } else if(k !== 0 && k>494){
            
            x.innerHTML = `S${(k-485).toString(36).toUpperCase()}`;
          }

          
        }
        else{
          el_id = document.getElementById('table-main').rows[l].cells[k];
          // el_id = document.getElementsByTagName('td')
          el_value = `h-0-${k}`;
          console.log("el_value ",el_value)
          sp_res = el_value.split("-");
          console.log("sp_res ",sp_res)
          sp_res_id = sp_res[2];
          console.log("sp_res_id ",sp_res)
          sp_res_id = parseInt(sp_res_id)
          // sp_res_id = sp_res_id+1;
          console.log("res",sp_res_id);
          el_id.setAttribute("id", `h-0-${sp_res_id}`);
          // el_id.setAttribute("id",`h-0-${sp_res_id}`)
        }
       
      }
      else{
        el_id = document.getElementById('table-main').rows[l].cells[k];
        // el_id = document.getElementsByTagName('tr')
        el_value = `r-${l}-${k}`
        console.log("el_value ",el_value)
        sp_res = el_value.split("-");
        console.log("sp_res ",sp_res)
        sp_res_id = sp_res[2];
        console.log("sp_res_id ",sp_res)
        sp_res_id = parseInt(sp_res_id)
        // sp_res_id = sp_res_id+1;
        console.log("res",sp_res_id);
        el_id.setAttribute("id", `r-${l}-${sp_res_id}`);
        // el_id.setAttribute("id",`r-${l}-${sp_res_id}`);
      }
    }
   }
}

function deleterow(){
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var r_1 = res[1];
  var c_1 = res[2];

  for(let i=0; i<defaultColCount;i++){
    var row = document.getElementById(`r-${r_1}`)
    row.deleteCell(i);

  }

}


function deletecolmn(){
  let count = 0;
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  console.log("res",res[2]);
  var el = document.getElementById(`h-0-${res_id}`);
   for (var j = 0; j  <=defaultRowCount; j++){
      console.log("testloop",i);
      if(j==0){
        var row = document.getElementById('h-0');
        // var row = document.getElementById("r-8-1");
        var x = row.deleteCell(res_id);
      }
      else{
        var row = document.getElementById(`r-${j}`);
        // var row = document.getElementById("r-8-1");
        var x = row.deleteCell(res_id);
      }
      // defaultRowCount--;
      
    // var button = document.createElement('button');
    // button.setAttribute('class','file');
    // button.setAttribute('value','read');
    // x.contentEditable = true;
    
     // button.setAttribute('value', 'raj')
     // x.appendChild(button);
   }
 
  defaultColCount--;


    var el_id = '';
    var sp_res = '';
    var sp_res_id ='';
    var el_value = '';
    res_id = parseInt(res_id)
    var next_col = res_id;
   // console.log("next_col ",next_col)
   for (var k = next_col; k<=defaultColCount; k++){
    console.log("defaultColCount ",defaultColCount);
    for(var l = 1; l<defaultRowCount; l++){
      
       
      
        el_id = document.getElementById('table-main').rows[l].cells[k];
        // el_id = document.getElementsByTagName('tr')
        el_value = `r-${l}-${k}`
        console.log("el_value ",el_value)
        sp_res = el_value.split("-");
        console.log("sp_res ",sp_res)
        sp_res_id = sp_res[2];
        console.log("sp_res_id ",sp_res)
        sp_res_id = parseInt(sp_res_id)
        // sp_res_id = sp_res_id+1;
        console.log("res",sp_res_id);
        el_id.setAttribute("id", `r-${l}-${sp_res_id}`);
        // el_id.setAttribute("id",`r-${l}-${sp_res_id}`);
      
    }
   }

   for (var k = next_col; k<=defaultColCount; k++){
    console.log("defaultColCount ",defaultColCount);
    for(var l = 0; l<defaultRowCount; l++){
      if(l ==0){
       
          var row = document.getElementById('h-0');
          var x =  el_id = document.getElementById('table-main').rows[l].cells[k];
          x.setAttribute("id", `h-0-${k}`);
          // let data = this.getData();
          // data[0].splice(defaultColCount, 0, "");
          // saveData(data);
          // x.innerText ="A"
          if (k !== 0 && k<=26 ) {
            x.innerText = `${(k+9).toString(36).toUpperCase()}`;
          } else if(k !== 0 && k>26 && k<=52 ) {
            
            x.innerHTML = `A${(k-17).toString(36).toUpperCase()}`;
          
          } else if(k !== 0 && k>52 && k<=78){
          
            x.innerHTML = `B${(k-43).toString(36).toUpperCase()}`;
          
          } else if(k !== 0 && k>78 && k<=104){
            
            x.innerHTML = `C${(k-69).toString(36).toUpperCase()}`;
            

          } else if(k !== 0 && k>104 && k<=130){

            x.innerHTML = `D${(k-95).toString(36).toUpperCase()}`;
          
          }else if (k !== 0 && k>130 && k<=156) {
            
            el.innerHTML = `E${(k-121).toString(36).toUpperCase()}`;
          
          }else if(k !== 0 && k>156 && k<=182){
            
            el.innerHTML = `F${(k-147).toString(36).toUpperCase()}`;
          
          }else if(k !== 0 && k>182 && k<=208){
            
            x.innerHTML = `G${(k-173).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>208 && k<=234){
            
            x.innerHTML = `H${(k-199).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>234 && k<=260){

            x.innerHTML = `I${(k-225).toString(36).toUpperCase()}`;

          }else if (k !== 0 && k>260 && k<=286) {
          
            x.innerHTML = `J${(k-251).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>286 && k<=312){
           
            x.innerHTML = `K${(k-277).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>312 && k<=338){
          
            x.innerHTML = `L${(k-303).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>338 && k<=364){
          
            x.innerHTML = `M${(k-329).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>364 && k<=390){
            
            x.innerHTML = `N${(k-355).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>390 && k<=416){

            x.innerHTML = `O${(k-381).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>416 && k<=442){

            x.innerHTML = `P${(k-407).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>442 && k<=468){
          
            x.innerHTML = `Q${(k-433).toString(36).toUpperCase()}`;

          }else if(k !== 0 && k>468 && k<=494){
            
            x.innerHTML = `R${(k-459).toString(36).toUpperCase()}`;

          } else if(k !== 0 && k>494){
            
            x.innerHTML = `S${(k-485).toString(36).toUpperCase()}`;
          }
        }
      }
  }
 }

function Addcell(){
  let count = 0;
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[1];
  var res_id2 = res[2]
  console.log("res",res[2]);
  var el = document.getElementById(`r-${res_id}-${res_id2}`);
  // el.innerHTML = "To"
   // for (var j = 1; j  <=defaultRowCount; j++){
      console.log("testloop",i);
      var row = document.getElementById(`r-${res_id}`);
  // var row = document.getElementById("r-8-1");
    var x = row.insertCell(res_id2);
    // var button = document.createElement('button');
    // button.setAttribute('class','file');
    // button.setAttribute('value','read');
    x.contentEditable = true;
    
     // button.setAttribute('value', 'raj')
     // x.appendChild(button);
   
}

function deleterow () {
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var r_1 = res[1];
  let data = this.getData();
  data.splice(r_1, 1);
  defaultRowCount++;
  saveData(data);
  this.createSpreadsheet();
  addEvents();
};

function shiftDown(){
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var a_val = document.getElementById(a).innerHTML;
  var rows = defaultRowCount;
  console.log("abc",a);
  var res = a.split("-");
  var r_1 = res[1];
  var r_2 = res[2];
  var r = r_1+1
  if(r_1==defaultRowCount){
    let data = this.getData();
    const colCount = data[0].length;
    const newRow = new Array(colCount).fill("");
    newRow.splice(r_2, 0, a_val);
    data.splice( r, 0, newRow);
    data[r_1].splice( r_2, 0, '');
    
    defaultRowCount++;
    saveData(data);
    this.createSpreadsheet();
    addEvents();
  }
  else{
    r_1 = parseInt(r_1)+1;
    var val = document.getElementById(a).innerHTML;
    document.getElementById(`r-${r_1}-${r_2}`).innerHTML=val;
    document.getElementById(a).innerHTML='';
    addEvents();
  }
}


function shiftRight(){
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var r_1 = res[1];
  console.log("r_1",r_1)
  var r_2 = res[2];
  r_2 = parseInt(r_2);
  let data = this.getData();
  if(r_2==defaultColCount){
    
    for (let i = 0; i <= defaultRowCount; i++) {
      console.log("r_1",r_1,"i ",i)
      if(i==r_1){
        var  val = document.getElementById(a).value;
        console.log("val ",val)
        data[i].splice(r_2, 0, "");
        data[i].splice(r_2 + 1, 0, val);
      }
      else{
        data[i].splice(r_2 + 1, 0, "");
      }
    }
    
    
    defaultColCount++;
    saveData(data);
    this.createSpreadsheet();
    addEvents();
  }
  else{
    var val = document.getElementById(a).innerHTML;
    data[r_1].splice(r_2, 0, "");
    data[r_1].splice(r_2 + 1, 0, val);
    saveData(data);
    this.createSpreadsheet();
    addEvents();
  }

}


function deleteRight(){
  let data = this.getData();
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var r_1 = res[1];
  var r_2 = res[2];

  data[r_1].splice(r_2, 1,'');
  // data[r_1].splice(r_2, 1,'');
  // defaultColCount++;
  saveData(data);
  this.createSpreadsheet();
  addEvents();
}

function appendRow() {
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[1];
  var r_id = parseInt(res_id)-1;
    var tbl = document.getElementById('table-main'), // table reference
        row = tbl.insertRow(res_id); 
        row.setAttribute("id",`r-${res_id}`)    // append table row
    // insert table cells to the new row
    
      for(let j=0;j<=defaultColCount; j++){
        console.log("defaultColCount",defaultColCount)
        if(j==0){
          var cell = row.insertCell(j);
          cell.contentEditable = false;

          
          const span = document.createElement("span");
          var img = document.createElement("img");
     
          // img.src = "assets/img/attachment.svg";
          // img.width = "12";
          // img.height = "12";
          // img.setAttribute('onclick', 'alert(test()')
          // span.appendChild(img);
          // cell.appendChild(span);
          const s = document.createElement("span");
          s.innerHTML = res_id;
          cell.appendChild(s)
          cell.setAttribute("class", "row-header");
          cell.setAttribute("id",`r-${res_id}-${j}`)
         
        }
        else{
          var x = row.insertCell(j);
          x.contentEditable =true;
          x.setAttribute("id",`r-${res_id}-${j}`)
        }
    }
    defaultRowCount++;
    console.log("rows ,",defaultRowCount)


    res_id = parseInt(res_id);
    var def_row = res_id+1;
    for (let i=def_row;i<=defaultRowCount;i++){
      for(let j=0;j<defaultColCount; j++){
        var row  = document.getElementById('table-main').rows[i];
        row.setAttribute("id",`r-${i}`)
        if(j==0){
          var cell  = document.getElementById('table-main').rows[i].cells[j];
          cell.innerHTML = '';
          
          // const span = document.createElement("span");
          // var img = document.createElement("img");
     
          // img.src = "assets/img/attachment.svg";
          // img.width = "12";
          // img.height = "12";
          // img.setAttribute('onclick', 'alert(test()')
          // span.appendChild(img);
          // cell.appendChild(span);
          const s = document.createElement("span");
          s.innerHTML = i;
          cell.appendChild(s)
          cell.setAttribute("class", "row-header");
        }
        else{
          var cell  = document.getElementById('table-main').rows[i].cells[j];
          cell.setAttribute("id",`r-${i}-${j}`)
        }
      }
      
    }
    addEvents();
    let data = this.getData();
    const colCount = data[0].length;
    const newRow = new Array(colCount).fill("");
    data.splice(res_id, 0, newRow);
    saveData(data);

}
// create DIV element and append to the table cell
function createCell(cell, text, style) {
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("my-Dropdown").classList.toggle("show");
}

function myFunction3() {
    document.getElementById("my-Dropdown1").classList.toggle("show");
}
function myFunction4() {
    document.getElementById("my-Dropdown2").classList.toggle("show");
}


function paintMatrix() {
for (var i = st_row; i <= end_row; i++) {
      var result = "";
      for (var j = st_col; j <= end_col; j++) {
        console.log("r-",j+1,"-",i);
        var res_id = i+1;
        var res_id2 = j;
        var border = document.getElementById(`r-${res_id}-${res_id2}`);
        // document.getElementById("myDiv").style.borderTop ="thick solid #000000";

        border.style.borderTop ="2px solid #000000";
        // document.getElementById().style.borderTop = "";
      }
      
    }


}

function paintMatrix2() {
for (var i = st_row; i <= end_row; i++) {
      var result = "";
      for (var j = st_col; j <= end_col; j++) {
        console.log("r-",j+1,"-",i);
        var res_id = i+1;
        var res_id2 = j;
        var border = document.getElementById(`r-${res_id}-${res_id2}`);
        border.style.borderBottom ="2px solid #000000";

    
      }
      
    }


}

function paintMatrix3() {
for (var i = st_row; i <= end_row; i++) {
      var result = "";
      for (var j = st_col; j <= end_col; j++) {
        console.log("r-",j+1,"-",i);
        var res_id = i+1;
        var res_id2 = j;
        var border = document.getElementById(`r-${res_id}-${res_id2}`);
        border.style.borderRight ="2px solid #000000";

    
      }
      
    }
}

function paintMatrix4() {
for (var i = st_row; i <= end_row; i++) {
      var result = "";
      for (var j = st_col; j <= end_col; j++) {
        console.log("r-",j+1,"-",i);
        var res_id = i+1;
        var res_id2 = j;
        var border = document.getElementById(`r-${res_id}-${res_id2}`);
        border.style.borderLeft ="2px solid #000000";

    
      }
      
    }
}

function paintMatrix5() {
  for (var i = st_row; i <= end_row; i++) {
    var result = "";
    for (var j = st_col; j <= end_col; j++) {
      console.log("r-",j+1,"-",i);
      var res_id = i+1;
      var res_id2 = j;
      var elem = document.getElementById(`r-${res_id}-${res_id2}`);
      elem.style.border ="2px solid #000000";
    }
  }
}

function paintMatrix6() {
  for (var i = st_row; i <= end_row; i++) {
    var result = "";
    for (var j = st_col; j <= end_col; j++) {
      console.log("paintMatrix6 r-",j+1,"-",i);
      if(i==st_row && j==st_col){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderLeft ="2px solid #000000";
        elem.style.borderTop ="2px solid #000000";
      }
      if(i==st_row && j==end_col){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderRight ="2px solid #000000";
        elem.style.borderTop ="2px solid #000000";
      }
      if(i==end_row && j==st_col){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderLeft ="2px solid #000000";
        elem.style.borderBottom ="2px solid #000000";
      }
      if(i==end_row && j==end_col){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderRight ="2px solid #000000";
        elem.style.borderBottom ="2px solid #000000";
      }
      else if(i==st_row){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderTop ="2px solid #000000";
      }
      else if(j==st_col){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderLeft ="2px solid #000000";
      }
      else if(i==end_row){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderBottom ="2px solid #000000";
      }
      else if(j==end_col){
        var res_id = i+1;
        var res_id2 = j;
        var elem = document.getElementById(`r-${res_id}-${res_id2}`);
        elem.style.borderRight ="2px solid #000000";
      }
      // else if(i==st_row ){
      //   var res_id = j+1;
      //   var res_id2 = i;
      //   var elem = document.getElementById(`r-${res_id}-${res_id2}`);
      //   elem.style.borderTop ="thick solid #000000";
      // }
      
    }
  }
}




function sortNumbers(a, b) {
  return a - b ;
}

let isDragging = false;
let selection = {};

$("#table-main").on("mousedown", "td", function() {
  // Start dragging
  isDragging = true;

  const $this = $(this);
  selection["x"] = [$this.index(), $this.index()];
  selection["y"] = [$this.parent("tr").index(), $this.parent("tr").index()];
  // console.log("chekc mousedown",$this.index(), $this.parent("tr").index());
  st_col=$this.index();
  st_row=  $this.parent("tr").index();
  markSelection(selection);
}).on("mouseover", "td", function() {
  if (isDragging) {
    const $this = $(this);
    selection["x"][1] = $this.index();
    selection["y"][1] = $this.parent("tr").index();
    // console.log("check index",$this.index(),$this.parent("tr").index());
    markSelection(selection);
    end_col=$this.index();
    end_row=  $this.parent("tr").index();
  }
}).on("mouseup", "td", function() {
  // End dragging
  isDragging = false;

  const $this = $(this);
  selection["x"][1] = $this.index();
  selection["y"][1] = $this.parent("tr").index();
  markSelection(selection);
}).on("mouseleave", function() {
  // End dragging
  isDragging = false;
});

function markSelection(selection) {
  // make copies before sorting
  const coords = {
    x: selection["x"].slice().sort(sortNumbers),
    y: selection["y"].slice().sort(sortNumbers)
  }
  // Only get relevant rows within range
  const rows = $("#table-main>tbody tr").slice(coords["y"][0], coords["y"][1]+1 );
  $("#table-main>tbody tr td").removeClass("selected");
  let cells = $();
  // In each relevant row, get the relevant cells
  rows.each(function(i, el) {
    cells = cells.add($(el).children("td").slice(coords["x"][0]-1, coords["x"][1]));

  });
  cells.addClass("selected");
  // console.log("check selected",(coords["x"][0]-1));
  // console.log("check selected",(coords["y"][1]+1));
}

document.getElementById("myInput").style.display = "none";

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#table-main tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

// code for find/search
 // $(document).ready(function(){
 //    $("#filter").click(function(){
 //      $("#myInput").toggle();
 //    });
 // });

function bold(){
          var a = localStorage.getItem("cell");
          // document.getElementById(a).style.fontWeight = "normal ";

           var  ban =document.getElementById(a).style.fontWeight  ;
           console.log("banvalue",ban);
 
         if(ban == 'normal')
            {
                document.getElementById(a).style.fontWeight = 'bold';
            }
         else if(ban == 'bold')
            {
                document.getElementById(a).style.fontWeight = 'normal';
            }
            else 
            {
                document.getElementById(a).style.fontWeight = 'bold';
            }

        }

           function italic(){
          var a = localStorage.getItem("cell");
          // document.getElementById(a).style.fontWeight = "normal ";

           var  ban =document.getElementById(a).style.fontStyle  ;
           console.log("banvalue",ban);
 
         if(ban == 'normal')
            {
                document.getElementById(a).style.fontStyle = 'italic';
            }
         else if(ban == 'italic')
            {
                document.getElementById(a).style.fontStyle = 'normal';
            }
            else 
            {
                document.getElementById(a).style.fontStyle = 'italic';
            }

        }
         // text-decoration: line-through;
          
          function strikethrough(){
          var a = localStorage.getItem("cell");
          // document.getElementById(a).style.fontWeight = "normal ";

           var  ban =document.getElementById(a).style.textDecoration  ;
           console.log("banvalue",ban);
 
         if(ban == 'none')
            {
                document.getElementById(a).style.textDecoration = 'line-through';
            }
         else if(ban == 'line-through')
            {
                document.getElementById(a).style.textDecoration = 'none';
            }
            else 
            {
                document.getElementById(a).style.textDecoration = 'line-through';
            }

        }
           
        function textcolor(){
           var theInput1 = document.getElementById("favcolor");
          var theColor1 = theInput1.value;
          var a = localStorage.getItem("cell");
          var s = document.getElementById(a);
          document.getElementById(a).style.color = theInput1.value;
        }

        
        function Fillcolor() {
          var theInput1 = document.getElementById("favcolor1");
          var theColor1 = theInput1.value;
          var a = localStorage.getItem("cell");
          var s = document.getElementById(a);
          document.getElementById(a).style.backgroundColor = theInput1.value;
        }

        function addborder(){
            var a = localStorage.getItem("cell");
            document.getElementById(a).style.border = "thin solid ";
        }

        function changeSize(n) {
          var a = localStorage.getItem("cell");
        var s = document.getElementById(a);
        s.style.fontSize = n.value + 'px'

        }

        function textwrap(){
          var a = localStorage.getItem("cell");
          // console.log("checktextwrap",textwrap);
          var  ban = document.getElementById(a).style.wordBreak;
          var ban1 = document.getElementById(a).style.whiteSpace;
           console.log("banvalue",ban);
           console.log("ban1value",ban1)
 
         if(ban == 'normal')
            {
                 document.getElementById(a).style.wordBreak= "break-all";
                 // document.getElementById(a).style.maxWidth = "0";
            }
         else if(ban == 'break-all')
            {
                 document.getElementById(a).style.wordBreak= "normal";
                  // document.getElementById(a).style.maxWidth = "20px";
               }
            if(ban1 == 'nowrap')
            {
                 document.getElementById(a).style.whiteSpace="normal";
                 // document.getElementById(a).style.maxWidth = "0";
            }
            else {
              document.getElementById(a).style.wordBreak="break-all";
            }

        }

       
        function overflow(){
          var a = localStorage.getItem("cell");
          // console.log("checktextwrap",textwrap);
          var  ban = document.getElementById(a).style.whiteSpace;
          // var ban1 = document.getElementById(a).style.whiteSpace;
           console.log("banvalue",ban);
 
         if(ban == 'normal')
            {
                 document.getElementById(a).style.whiteSpace = "nowrap";
                 document.getElementById(a).style.overflow = "hidden";
                 document.getElementById(a).style.maxWidth = "0";
                 // document.getElementById(a).style.maxWidth = "0";
            }
         else if(ban == 'nowrap')
            {
                 document.getElementById(a).style.whiteSpace = "normal";
                  // document.getElementById(a).style.maxWidth = "200px";
               }
            else 
            {
                  document.getElementById(a).style.whiteSpace = "nowrap";
                 document.getElementById(a).style.overflow = "hidden";
                 document.getElementById(a).style.maxWidth = "0";
                 // document.getElementById(a).style.maxWidth = "0";
            }
        
        }
        

        $('.spreadsheet__table').keydown(function (e) {
          console.log("testenter");
      if (e.which === 13) {
        let count = 0;
          var a = localStorage.getItem("cell");
          console.log("abc",a);
          var res = a.split("-");
          var res_id = res[1];
          res_id = parseInt(res_id)+1; 
          var res_id2 = res[2];
        //$(this).next('.inputs').focus();
            $(`#r-${res_id}-${res_id2}`).focus()
            localStorage.setItem("cell",`r-${res_id}-${res_id2}`);

      }
     });

function formatPrinter(){
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  color = document.getElementById(a).style.backgroundColor;
  console.log("colorrr ",color);
  cell_clr = true;
  console.log("color ",cell_clr)
}

function add(){
  var a = localStorage.getItem("cell");
  localStorage.setItem('sum_cell',a);
  console.log("abc",a);
  console.log("abc",a);
  // var res = a.split("-");
  // var res_id = res[1];
  // var res_id2 = res[2]
  // var x = document.getElementById(a);
  // var button = document.createElement('input');
  // button.setAttribute('class','form-control');
  // button.setAttribute('type','text');
  // button.setAttribute('value', '=sum(,)');
  document.getElementById(a).innerText= '=sum( , )';
  // document.getElementById(a).addEventListener("focusout", sum());
  // button.setAttribute('id', 'sum');
  // x.appendChild(button);
  cell_sum=true;
}

function sum(){
  if(cell_sum==true){
    console.log("summ");
    var elem = localStorage.getItem('sum_cell');
    var val = document.getElementById('elem').innerText;
    val=val.toString();
    console.log("sumnnmm",val)
    // var res = val.split("=");
    console.log("valye",val)

  }  
}


 function addfilter(){
 
  var a = localStorage.getItem("cell");
  console.log("abc",a);
  var res = a.split("-");
  var res_id = res[2];
  console.log("res",res[2]);
  var el = document.getElementById(`h-0-${res_id}`);
  var el2 = document.getElementById(`r-${res_id}`)
  // var img = document.createElement('img');
  // img.src = 'img/calendar.svg';
  // img.setAttribute('id','filters');

  

   const dropDownDiv1 = document.createElement("div");
      dropDownDiv1.setAttribute("class", "dropdown");
      dropDownDiv1.innerHTML = `<button onclick="dropFunction()" class="dropbtn"><img src="assets/img/filter.svg"></button>
  <div id="myDropdown-${res_id}" class="dropdown-content">
   <button class="sortingclass" id="sorta" onClick="sortColumn(); ">A->Z</button>
   <button id="sortz" onclick="sortColumn(); ">Z->A</button>
   
   <input type="text" placeholder="Search.." id="filterInput" onkeyup="filterFunction()">
 </div>`;
  el.appendChild(dropDownDiv1);
  // document.getElementById('sortz').style.display = 'none';
  
  let no_of_rows= defaultRowCount;
  let values =[];
  for(let i =1; i<= defaultRowCount; i++){
    let count =0;
    var value = document.getElementById(`r-${i}-${res_id}`).innerHTML;
    console.log("value ",value,);
    // for(let j =i; j<= no_of_rows; j++){
    //   var value2 = document.getElementById(`r-${j}-${res_id}`).innerText;
    //   console.log("values ",j, " ",value2);
    //   if(value.length>1 && value2.length>1  && value==value2){
    //     console.log("similar values ",value2," ",value);
    //     count++;
    //     console.log("count",count)
       

    //   }
       
    // }
  
    var div = document.getElementById(`myDropdown-${res_id}`);
    var b = div.getElementsByTagName("a");
    if(b.length==0){
      console.log("b length 0")
      if(value.length>1){
        
        var ele = document.createElement('a');
        var check_box = document.createElement("input");
        check_box.setAttribute("type","checkbox")
        check_box.checked=true;
        check_box.setAttribute("id",`c-${i}-${res_id}`)
        check_box.addEventListener("change", checkboxchange);
        ele.appendChild(check_box)
        var label = document.createElement("label")
        label.innerHTML = value
        label.setAttribute("id",`l-${i}-${res_id}`)
        ele.appendChild(label);

        document.getElementById(`myDropdown-${res_id}`).appendChild(ele);
      }
    }
    else{
      let count=0;
      b = div.getElementsByTagName("a");
      console.log("length ",b.length)
      for (let m = 0; m < b.length; m++) {
        console.log("check loop ", b[m].innerHTML);
        if ( b[m].innerHTML.indexOf(value) > -1) {
            console.log("matched value",b[m].innerHTML, " ",value)
            count++;
        } 
      }
      if(value.length>1 &&  count==0){
            console.log("else ", value);
            var ele = document.createElement('a');
            var check_box = document.createElement("input");
            check_box.setAttribute("type","checkbox")
            check_box.checked=true;
            check_box.setAttribute("id",`c-${i}-${res_id}`)
            check_box.addEventListener("change", checkboxchange);
            ele.appendChild(check_box)
            var label = document.createElement("label")
            label.innerHTML = value
            label.setAttribute("id",`l-${i}-${res_id}`)
            ele.appendChild(label);
            

            document.getElementById(`myDropdown-${res_id}`).appendChild(ele);
        }

    }
        
  }


}

function checkboxchange(){
  console.log("checkboxchange ",this.id);
  var c_id = this.id;
  var res = c_id.split("-");
  var c_id_1 = res[1];
  var c_id_2 = res[2];
  var val = document.getElementById(`l-${c_id_1}-${c_id_2}`).innerHTML;
  console.log("val ",val)
  if(this.checked){
    console.log("checked")
    for(let i=1;i<=defaultRowCount;i++){
      var r_val = document.getElementById(`r-${i}-${c_id_2}`).innerHTML;
      console.log("r_val",r_val,val)
      if(r_val.indexOf(val) >-1 ){
        console.log("r_val , val ",r_val, " ",val)
        document.getElementById(`r-${i}-${c_id_2}`).style.display=""
      }
      
    }
  }
  else{
    console.log("not  checked")
    for(let i=1;i<=defaultRowCount;i++){
      var r_val = document.getElementById(`r-${i}-${c_id_2}`).innerHTML;
      console.log("r_val",r_val, val)
      if(r_val.indexOf(val)>-1){
        console.log("r_val , val ",r_val, " ",val)
        document.getElementById(`r-${i}-${c_id_2}`).style.display="none"
      }
      
    }
  }
}

function filterFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    console.log("filter",filter)
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      console.log("check loop ", a[i].innerHTML.toUpperCase());
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

// function sortingbutton(){
//   document.getElementById("sorta").style.display = 'none';
//   document.getElementById("sortz").style.display = 'block';
// }

// function sortingbutton2(){
//    document.getElementById('sortz').style.display = 'none';
//    document.getElementById('sorta').style.display = 'block';
// }
