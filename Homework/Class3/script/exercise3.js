let inputTitle = document.querySelector('#title');
let inputPriority = document.querySelector('#priority');
let inputColor = document.querySelector('#color');


let descipt = document.querySelector('#description');

let addBtn = document.querySelector('#add');
let showBtn = document.querySelector('#show');

let table = document.querySelector('tbody');

let alertResult = document.querySelector('table');

// Constructor
function Reminder(title, priority, color, description) {
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;
}

let remindersArr = [];

let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];


addBtn.addEventListener('click', function () {
    let titleInput = inputTitle.value;
    let priorityInput = inputPriority.value;
    let colorInput = inputColor.value;
    let descriptionInput = descipt.value;

    let newReminder = new Reminder(titleInput, priorityInput, colorInput, descriptionInput);

    if (titleInput === '' && priorityInput === '' && colorInput === '' && descriptionInput === '') {
        alertResult.innerHTML = `<h3>Please enter your inputs.</h3>`;
    } else {
        for (const color of colors) {
            if (colorInput.toLowerCase() === color.toLowerCase()) {
                remindersArr.push(newReminder);
                inputTitle.value = '';
                inputPriority.value = '';
                inputColor.value = '';
                descipt.value = '';
                // tuka se pak oti ima return dole za ako e true da se iscistat.
                return;
            } else {
                alertResult.innerHTML = `<h3>Please enter valid color.</h3>`;
            }
        }
    }

    inputTitle.value = '';
    inputPriority.value = '';
    inputColor.value = '';
    descipt.value = '';
})

showBtn.addEventListener('click', function () {
    table.innerHTML = '';
    for (const reminder of remindersArr) {
        table.innerHTML += `<tr>
                                <td style = "color:${reminder.color};">${reminder.title}</td>
                                <td>${reminder.priority}</td>
                                <td>${reminder.description}</td>
                           </tr>`;
    }
})