var employees = 
[
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
function populateTable(filter) {
    var name = document.getElementById('ename').value,
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
    var sum = 0;
    for (var i = 0; i < employees.length; i++) {
        var empName = employees[i].Name,
            empName = empName.toLowerCase();

        if ((filter && empName.search(name) > -1) || !filter) {
            tr = table.insertRow(-1);
            sum = sum + employees[i].Salary;
            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = employees[i][col[j]];
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
}