let table = document.getElementById("myTable");

function createTable() {
  //Write your code here
  let rows = Number(prompt("Input number of rows"));
  let cols = Number(prompt("Input number of columns"));
  

  for (let i = 0; i < rows; i++) {
    let tableRows = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      let tableData = document.createElement("td");
      tableData.innerHTML = `Row-${i} Column-${j}`
      tableRows.appendChild(tableData);
    }
    table.appendChild(tableRows);
  }
}
