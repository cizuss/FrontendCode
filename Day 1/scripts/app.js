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
        salary: 4500,
        shown: true
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 2200,
        shown: true
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 6677,
        shown: true
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 5555,
        shown: true
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '99121423534',
        salary: 1000,
        shown: true
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
        if (!employeesList[i].shown)
            continue;
        myTable += '<><td>' + employeesList[i].firstName + '</td><td>'
            + employeesList[i].lastName + '</td><td>'
            + employeesList[i].phone + '</td><td>'
            + employeesList[i].salary + '</td><td>'
            + '<button onclick="viewEmployee(' + i + ')"> View </button> </td> <td>'
            + '<button onclick="deleteEmployee(' + i + ')"> Delete </button> </td> </tr>';
    }

    myTable += '<th>MostFrequentFirstName = ' + mostFrequentFirstName() + '</th>';
    myTable += '<th>NrOfUniqueLastNames = ' + numberOfUniqueLastNames() + '</th>';

    var poz = mostFrequentDigits();

    myTable += '<th>Most Frequent 5 Digits = ' + poz[0] + ', ' + poz[1] + ', ' + poz[2] + ', ' + poz[3] + ', ' + poz[4] + '</th>';
    myTable += '<th>Average Salary = ' + averageSalary() + '</th>';

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary, true));
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

function mostFrequentDigits() {
    var occ = [0,0,0,0,0,0,0,0,0,0];
    for (var i in employeesList) {
        var phone = employeesList[i].phone;
        for (var digit = 0; digit < phone.length; digit++)
            occ[parseInt(phone.charAt(digit))]++;
    }
    var poz=[0,1,2,3,4,5,6,7,8,9];
    for (var i=0; i<=8; i++)
        for (var j=i+1; j<=9; j++)
            if (occ[i] < occ[j]) {
                var aux = occ[i];
                occ[i] = occ[j];
                occ[j] = aux;
                aux = poz[i];
                poz[i] = poz[j];
                poz[j] = aux;
            }
    return poz;
}

function averageSalary() {
    var sum = 0;
    for (var i in employeesList) {
        sum += parseInt(employeesList[i].salary);
    }
    return sum / employeesList.length;
}

function sortTable() {
    var sortType = document.getElementById("sortType").value;
    employeesList.sort(function(e1, e2) {
        switch (sortType) {
            case '1':
            {
                if(e1.firstName < e2.firstName)
                    return -1;
                if (e1.firstName > e2.firstName)
                    return 1;
                return 0;
            }
            case '2':
            {
                if(e1.lastName < e2.lastName)
                    return -1;
                if (e1.lastName > e2.lastName)
                    return 1;
                return 0;
            }
            case '3':
            {
                if (e1.phone < e2.phone)
                    return -1;
                if (e1.phone > e2.phone)
                    return 1;
                return 0;
            }
            default:
                return parseInt(e1.salary) - parseInt(e2.salary);
        }
    });
    showList();
}

function filterTable() {
    var filterWord = document.getElementById("filterText").value;
    if (filterWord == "")
        for (var i in employeesList)
            employeesList[i].shown = true;
    for (var i in employeesList) {
        var emp = employeesList[i];
        if (emp.firstName == filterWord || emp.lastName == filterWord || emp.phone == filterWord || (emp.salary).toString() == filterWord)
            emp.shown = true;
        else
            emp.shown = false;
    }
}