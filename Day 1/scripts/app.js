/**
 * Created by user on 6/23/2016.
 */

function Employee(firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];

function viewEmployee(i) {
    alert("Firstname: " + employeesList[i].firstName + "\nLastName: " + employeesList[i].lastName + "\nSalary: " + employeesList[i].salary + "\nPhone Number: " + employeesList[i].phone + "\n");
}

function deleteEmployee(i) {
    employeesList.splice(i,1);
    showList();
}

function mostFrequentFirstName() {
    var occ = {};
    for (var emp in employeesList) {
        if (!(employeesList[emp].firstName in occ)) {
            occ[employeesList[emp].firstName] = 1;
        }
        else
            occ[employeesList[emp].firstName] ++;
    }
    var maxOcc = -1;
    var maxName;
    for (var ap in occ) {
        if(occ[ap] > maxOcc) {
            maxOcc = occ[ap];
            maxName = ap;
        }
    }
    return maxName;
}

function numberOfUniqueLastNames() {
    var occ = {};
    for (var emp in employeesList) {
        if (!(employeesList[emp].lastName in occ)) {
            occ[employeesList[emp].lastName] = 1;
        }
        else
            occ[employeesList[emp].lastName] ++;
    }
    var nrUniqueLastNames = 0;
    for (var ap in occ) {
        nrUniqueLastNames++;
    }
    return nrUniqueLastNames;
}

function showList() {
    var myTable = '<table class="table table-bordered" border="1"><><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>View</th><th>Delete</th></tr>';

    for (var i in employeesList) {
        myTable += '<><td>' + employeesList[i].firstName + '</td><td>'
            + employeesList[i].lastName + '</td><td>'
            + employeesList[i].phone + '</td><td>'
            + employeesList[i].salary + '</td><td>'
            + '<button onclick="viewEmployee(' + i + ')"> View </button> </td> <td>'
            + '<button onclick="deleteEmployee(' + i + ')"> Delete </button> </td> </tr>';
    }

    myTable += '<th>MostFrequentFirstName = ' + mostFrequentFirstName() + '</th>';
    myTable += '<th>NrOfUniqueLastNames = ' + numberOfUniqueLastNames() + '</th>';

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function showSalaryTotal() {
    var sum = 0;
    for (var i in employeesList) {
        sum = sum + employeesList[i].salary;
    }
    var container = document.getElementById('salary-total');
    var sumLabel = '<p> Sum of Salary = ' + sum + '</p>';
    container.innerHTML = sumLabel;
}

function deleteLastEmployee() {
    employeesList.pop();
    showList();
}