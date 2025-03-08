
let employees = [];

function addEmployee() {
    

    const name = document.getElementById('name').value;
    const empid = document.getElementById('empid').value;
    const phone = document.getElementById('phone').value;
    const dept = document.getElementById('dept').value;

    
    if (!name || !empid || !phone || !dept) {
        alert("All fields must be filled!");
        return;
    }

    const employee = {
        name: name,
        empid: empid,
        phone: phone,
        dept: dept,
    };

    employees.push(employee);
    displayEmployees();


    document.getElementById('name').value = '';
    document.getElementById('empid').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('dept').value = '';
}

function displayEmployees() {
    const tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';


    employees.forEach((employee) => {
        const row = tableBody.insertRow();

     
        const nameCell = row.insertCell(0);
        const idCell = row.insertCell(1);
        const phoneCell = row.insertCell(2);
        const deptCell = row.insertCell(3);


        nameCell.textContent = employee.name;
        idCell.textContent = employee.empid;
        phoneCell.textContent = employee.phone;
        deptCell.textContent = employee.dept;

    });
}


