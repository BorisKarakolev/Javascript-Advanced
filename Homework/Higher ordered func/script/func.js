// primarni se string boolean number... tuka moze da menjavame na drugoto bez da bide smeneto prvoto.
// referentni se arrays and objects. sekogas koga pravime manupulacija na edno istoto vazi za dvete.

// 'use strict'; //Always on top, for more rules about some names or how to write them.

// let unsortedNumbers = [2, 5, 8, 1, 10];

// let sortedNumbers = unsortedNumbers.sort((a, b) => a - b);


// let sortedNumbersDesc = [];
// unsortedNumbers.forEach(n => sortedNumbersDesc.push(n));
// sortedNumbersDesc.sort((a, b) => b - a);

// console.log(`unsortNumbers:`, unsortedNumbers);
// console.log(`sortedNumbers:`, sortedNumbers);
// console.log(`sortedNumbersDesc:`, sortedNumbersDesc);


// let a = `Alek`;
// let b = a;

// b += `AAA`;

// console.log(a);
// console.log(b);



// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// // Pure Function


// // This is pure
// let increaseByOne = (numbers) => {
//     let result = [];
//     for (const number of numbers) {
//         result.push(number + 1);
//     }
//     return result;
// }

// // This is inpure func, depending on global variable
// const one = 1;
// let increaseByOne = (numbers) => {
//     let result = [];
//     for (const number of numbers) {
//         result.push(number + one);
//     }
//     return result;
// }

// // Inpure func depending on html id with DOM iteraction. We have to create variable or parameter inside the func to be pure.
// let increaseByOne = (numbers) => {
//     let result = [];
//     for (const number of numbers) {
//         result.push(number + one);
//         document.getElementById('result').innerHTML =+ numbers + 1;
//     }
//     return result;
// }





fetch('https://api.myjson.com/bins/1f70kq')
    .then((response) => response.json())
    .then((students) => {
        // console.table(students);
        // console.table(students.filter(student => student.averageGrade > 3));
        // console.table(students.filter(student => student.gender === 'Female' && student.averageGrade === 5).map(student => student.firstName));
        // console.table(students.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18).map(student => `${student.firstName} ${student.lastName}`));
        // console.table(students.filter(student => student.gender === 'Female' && student.age > 24).map(student => student.averageGrade).reduce((sum, acc) => sum + acc, 0));
        // console.table(students.filter(student => student.gender === 'Male' && student.averageGrade > 2 && student.firstName[0] === 'B').map(student => student.firstName));

        // Homework
        students.forEach(student => {
            let grade = student.averageGrade <= 1 ? `failing` : `passing`;
            console.log(`${student.firstName} ${student.lastName} is comming from ${student.city}, he is ${student.age} years old and he is ${grade} the class.`)
        });
        
        console.table(students.filter(student => student.gender === `Male` && student.city !== `Skopje`));
        console.table(students.filter(student => student.gender === `Female` && student.age >= 18));
        console.log(students.map(student => student.age).reduce((sum, age) => sum + age, 0));
        console.table(students.filter(student => student.gender === 'Female' && student.lastName.slice(-1) === `a`));
    })
    .catch((error) => error)


// console.log('Loaded');
// setTimeout(() => console.log(`Set timeput executed`), 3000);
// console.log('After timeout');