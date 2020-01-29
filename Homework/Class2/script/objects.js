// Objects

// Constructor
function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    }

    this.getInfo = function () {
        return `This student ${this.firstName} ${this.lastName} from the academy ${this.academy}.`
    }

    this.getGradesAverage = function () {
        let counter = 0;
        for (let i = 0; i < this.grades.length; i++) {
            counter += this.grades[i];
        }
        return counter / this.grades.length;
    }
}

let listOfStudents = [];



// Object form constructor.
let studentB = new Student('Boris', 'Karakolev', 1998, 'SEDC', [7, 8, 9, 10, 6]);
listOfStudents.push(studentB);
console.log(studentB);

console.log(studentB.getInfo());
console.log(studentB.getAge());
console.log(studentB.getGradesAverage());

let stojan = new Student('Stojan', 'Stojkovski', 1903, 'VMRO', [1, 2, 3, 5, 7, 8, 9, 3]);
listOfStudents.push(stojan);
console.log(stojan);

console.log(stojan.getInfo());
console.log(stojan.getAge());
console.log(stojan.getGradesAverage());


// Selectors
let fName = document.querySelector('#fName');
let lName = document.querySelector('#lName');
let bYear = document.querySelector('#birthYear');
let academyy = document.querySelector('#academy');
let gradess = document.querySelector('#grades');


let button = document.querySelector('#register');
let result = document.querySelector('#result');
let table = document.querySelector('tbody');


checkInputs = studentNew => {
    if (studentNew.firstName !== '' && studentNew.lastName !== '' && studentNew.birthYear !== '' 
    && studentNew.academy !== '' && grades !== []) {
      return true;
    }
    result.innerHTML = '<h3>Please enter your inputs.</h3>';
    return false;   
}

checkStudents = studentNew => {
    for (const student of listOfStudents) {
        if (studentNew.firstName.toLowerCase() !== student.firstName.toLowerCase() && studentNew.lastName.toLowerCase() !== student.lastName.toLowerCase()
            || studentNew.birthYear !== student.birthYear) {
                 // OPTION 1
                 listOfStudents.push(studentNew);
                 table.innerHTML += `<tr>
                 <td>${student.firstName}</td>
                 <td>${student.lastName}</td>
                 <td>${student.birthYear}</td>
                 <td>${student.getAge()}</td>
                 <td>${student.academy}</td>
                 <td>${student.grades}</td>
                 <td>${student.getGradesAverage()}</td>
                </tr>`;
                // OPTION 2
                // let tr = document.createElement('tr');
                // let td1 = document.createElement('td');
                // let td2 = document.createElement('td');
                // let td3 = document.createElement('td');
                // let td4 = document.createElement('td');
                // let td5 = document.createElement('td');
                
                // td1.innerText = student.firstName;
                // td2.innerText = student.lastName;
                // td3.innerText = student.student.birthYear;
                // td4.innerText = student.academy;
                // td5.innerText = student.grades;
                
                // tr.appendChild(td1);
                // tr.appendChild(td2);
                // tr.appendChild(td3);
                // tr.appendChild(td4);
                // tr.appendChild(td5);
                
                // table.appendChild(tr);
        }
    }
    result.innerHTML = '<h3>This student exist.</h3>';
}



// Event
button.addEventListener('click', function () {

    table.innerHTML = '';

    let firstName = fName.value;
    let lastName = lName.value;
    let birthYear = bYear.value;
    let academy = academyy.value;
    let grades = gradess.value.split(",");


    let studentNew = new Student(firstName, lastName, birthYear, academy, grades);

    // kako da gi spojam i iskoristam funkciite?

    


    fName.value = '';
    lName.value = '';
    bYear.value = '';
    academyy.value = '';
    gradess.value = '';
})