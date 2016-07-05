var employees = [
	{
	    "name": "ajay",
	    "salary": "12000"
	}, 
	{
	    "name": "seena",
	    "salary": "20000"
	}, 
	{
	    "name": "ann",
	    "salary": "25000"
	}, 
	{
	    "name": "ravi",
	    "salary": "45625"
	}, 
	{
	    "name": "sooraj",
	    "salary": "12456"
	}, 
	{
	    "name": "hemand",
	    "salary": "88888"
	}, 
	{
	    "name": "sasi",
	    "salary": "12323"
	}, 
	{
	    "name": "thomas",
	    "salary": "55648"
	}, 
	{
	    "name": "alva",
	    "salary": "20032"
	}, 
	{
	    "name": "edison",
	    "salary": "4526"
	}, 
	{
	    "name": "anand",
	    "salary": "78758"
	}, 
	{
	    "name": "beena",
	    "salary": "79474"
	}, 
	{
	    "name": "xavier",
	    "salary": "45456"
	}, ],
	tablearr;
for(var i = 0, i<employees.length; i++) {
    var temp = '<tr><td>' + data[i].id + '</td>';
    temp+= '<td>' + data[i].name+ '</td>';
    temp+= '<td>' + data[i].category + '</td>';
    temp+= '<td>' + data[i].color + '</td></tr>';
    tablearr.push(temp);
}

$('table tbody').append(tablearr.join(''));