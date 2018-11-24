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
let defaultRowCount = 50; // No of rows
let defaultColCount = 100; // No of cols

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
    // th.innerHTML = i === 0 ? `` : `Col ${i}`;
    // if (i !== 0) {
    //   const span = document.createElement("span");
    //   span.contentEditable = true;
    //   span.innerHTML = `${(i+9).toString(36).toUpperCase()}`;
    //   span.setAttribute("class", "column-header-span");
    //   // const dropDownDiv = document.createElement("div");
    //   // dropDownDiv.setAttribute("class", "dropdown");
    //   // dropDownDiv.innerHTML = `<button class="dropbtn" id="col-dropbtn-${i}">+</button>
    //   //   <div id="col-dropdown-${i}" class="dropdown-content">
    //   //     <p class="col-insert-left">Insert 1 column left</p>
    //   //     <p class="col-insert-right">Insert 1 column right</p>
    //   //     <p class="col-delete">Delete column</p>
    //   //   </div>`;
    //   th.appendChild(span);
    //   // th.appendChild(dropDownDiv);
    // }
    if (i !== 0 && i<=26 ) {
      const span = document.createElement("span");
      span.contentEditable = true;
      span.innerHTML = `${(i+9).toString(36).toUpperCase()}`;
      span.setAttribute("class", "column-header-span");
      // const dropDownDiv = document.createElement("div");
      // dropDownDiv.setAttribute("class", "dropdown");
      // dropDownDiv.innerHTML = `<button class="dropbtn" id="col-dropbtn-${i}">+</button>
      //   <div id="col-dropdown-${i}" class="dropdown-content">
      //     <p class="col-insert-left">Insert 1 column left</p>
      //     <p class="col-insert-right">Insert 1 column right</p>
      //     <p class="col-delete">Delete column</p>
      //   </div>`;
      th.appendChild(span);
      // th.appendChild(dropDownDiv);
    } else if(i !== 0 && i>26 && i<=52 ) {
      const span = document.createElement("span");
      span.contentEditable = true;
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
    } else if(i !== 0 && i>52 && i<=78){
      const span = document.createElement("span");
      span.contentEditable = true;
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
    } else if(i !== 0 && i>78){
      const span = document.createElement("span");
      span.contentEditable = true;
      span.innerHTML = `C${(i-69).toString(36).toUpperCase()}`;
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
      const dropDownDiv = document.createElement("div");
      span.innerHTML = rowNum;
      // dropDownDiv.setAttribute("class", "dropdown");
      // dropDownDiv.innerHTML = `<button class="dropbtn" id="row-dropbtn-${rowNum}">+</button>
      //   <div id="row-dropdown-${rowNum}" class="dropdown-content">
      //     <p class="row-insert-top">Insert 1 row above</p>
      //     <p class="row-insert-bottom">Insert 1 row below</p>
      //     <p class="row-delete">Delete row</p>
      //   </div>`;
      cell.appendChild(span);
      cell.appendChild(dropDownDiv);
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
      cell.innerHTML = data[i][j];
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
sortColumn = currentCol => {
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

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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

var CapsNum;

window.onload = function() {
  //var CapsNum = localStorage.getItem("CapsNum");

  if (CapsNum == null) {
    CapsNum = "0";
  } else {
    document.getElementById("caps").value = CapsNum;
  }
}
window.onbeforeunload = function() {
  localStorage.setItem("CapsNum", document.getElementById("caps").value);
}

function PlusCaps() {
  var nextValue = parseInt(document.getElementById("caps").value) + 1;
  setNextValue(nextValue);
}

function MinusCaps() {
  var nextValue = parseInt(document.getElementById("caps").value) - 1;
  setNextValue(nextValue);
}

function setNextValue(nextValue) {
  //localStorage.setItem("CapsNum", nextValue);
  document.getElementById("caps").value = nextValue;
}

 // var theInput = document.getElementById("favcolor");
 //      var theColor = theInput.value;
      
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
               var retVal = prompt("Enter your name : ", "your name here");
               localStorage.setItem("project",retVal)
               // document.getElementById("demo").innerHTML = retVal;
               CreateTable(); 
               showtable();
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
  var cantThinkOfAName = document.getElementById("rightclicked");
  cantThinkOfAName.style.display = "block";
  cantThinkOfAName.style.left = e.clientX + "px";
  cantThinkOfAName.style.top = e.clientY + "px";
}

var tbl = document.getElementById("table-main");

        if (tbl != null) {

            for (var i = 0; i < tbl.rows.length; i++) {

                for (var j = 0; j < tbl.rows[i].cells.length; j++)

                    tbl.rows[i].cells[j].onmousedown = function (event) { 
                      if (event.which == 3){

                      getval(this); 
                      }
                    };

            }

        }

        function getval(cel) {
            console.log("test",cel.id)
            localStorage.setItem("cell",cel.id);
            // document.getElementById("demo").innerHTML = cel.id;
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
  // var row = document.getElementById("r-8-1");
    var x = row.insertCell(res_id);
    var button = document.createElement('input');
    button.setAttribute('placeholder',' ');
    button.setAttribute('class','form-control');
    button.setAttribute('type','text');
    button.setAttribute('onfocus',"(this.type='date')");
    button.setAttribute('onblur',"(this.type='text')")
    button.setAttribute('id', 'date');
     // button.setAttribute('data-placeholder',' ');
     // button.setAttribute('aria-required','true')
     // button.setAttribute('value', 'raj')
     x.appendChild(button);
}
  
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
    var x = row.insertCell(res_id);
    var button = document.createElement('input');
       button.setAttribute('placeholder',' ');
    button.setAttribute('class','form-control');
    button.setAttribute('type','text');
    button.setAttribute('onfocus',"(this.type='date')");
    button.setAttribute('onblur',"(this.type='text')")
     button.setAttribute('id', 'date');
     // button.setAttribute('value', 'raj')
     x.appendChild(button);
   }
  for (let m = 0; m< defaultColCount.length; m++){
    console.log("count",count)
    if(document.getElementById(`h-0-${m}`).innerHTML=="To"){
      count= count+1;
      console.log("count",count)
    }

  }
  el.innerHTML = "To"
}