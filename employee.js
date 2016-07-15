var employees = [
    {
    "Name": "Ajay",
    "Salary": 4125
    }, 
    {
    "Name": "Seena",
    "Salary": 1356
    },
    {
    "Name": "Meena",
    "Salary": 19056
    },
     {
    "Name": "Robert",
    "Salary": 12356
    }, 
    {
    "Name": "Wade",
    "Salary": 22356
    }, 
    {
    "Name": "Messi",
    "Salary": 5456
    },
    {
    "Name": "Ann",
    "Salary": 44210
    }
];
function start() {
    populateTable('initial');
}
function populateTable(conduct) {
    var name = document.getElementById('ename').value;
        name = name.toLowerCase();
    var col = [];
    for (var i = 0; i < employees.length; i++) {
        for (var key in employees[i]) {
            if (col.indexOf(key) == -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");
    table.setAttribute('id', 'demo')
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    if (conduct == "sort"){
        var employeeList =[];
        var sortTable = document.getElementById("demo");
        for ( var c = 1; c < sortTable.rows.length-1; c++ ) {
            employeeList.push({
                Name:sortTable.rows[c].cells[0].innerHTML,
                Salary:sortTable.rows[c].cells[1].innerHTML
            });
        }
        employeeList.sort(function(a, b) {
            var nameA = a.Name.toLowerCase();
            var nameB = b.Name.toLowerCase();
            return (nameA < nameB) ? -1 : ((nameA > nameB) ? 1 : 0); 
        })
        for (var k = 0; k < employeeList.length; k++){
            var newname = employeeList[k].Name;
                newname = newname.toLowerCase();
                tr = sortTable.insertRow(-1);
            for (var l=0; l < col.length; l++) {
                var newTabCell = tr.insertCell(-1);
                newTabCell.innerHTML = employeeList[k][col[l]];
            } 
        }
    }
    else {
            employeeList = employees;
    }        
    var sum = 0;
    for (var i = 0; i < employeeList.length; i++) {
        var empName = employeeList[i].Name,
            empName = empName.toLowerCase();
        if ((conduct == "filter" && empName.search(name) > -1) || conduct== "initial" || conduct== "sort" ) { 
            tr = table.insertRow(-1);
            sum = sum + parseFloat(employeeList[i].Salary);
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = employeeList[i][col[j]];
            }
        }
    }
    var buildTable = document.getElementById("showData");
    buildTable.innerHTML = "";
    buildTable.appendChild(table);
    var tr = table.insertRow(-1);
    var tablCell = tr.insertCell(-1);
    tablCell.innerHTML = "TOTAL";
    var cellNext = tr.insertCell(-1);
    cellNext.innerHTML = "$" + sum;
    document.querySelector('th').addEventListener('click',  populateTable('sort'));
}