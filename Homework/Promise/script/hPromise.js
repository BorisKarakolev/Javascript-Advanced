let testNumb = num => {
    return new Promise((resolve, reject) => {
        num > 10 ? reject(`Please try again`) : setTimeout(() => { resolve(`Succesful`), 3000 })
    })
}
// testNumb(15)
//     .then(success => {
//         console.log(success);
//     }).catch(err => console.log(err)).finally(() => console.log(`Homework part1 is done.`));



// Homework Part2
let changeAllToCaps = arr => {
    return new Promise((resolve, reject) => {
        for (const string of arr) {
            if (typeof (string) !== `string`) {
                reject(`Sorry all have to be strings.`)
            }
            setTimeout(() => { resolve(arr.map(str => str.toString().toUpperCase())) }, 3000)
        }
    });
}

let sortArr = arr => {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b))
    return new Promise((resolve, reject) => {
        if (sortedArr.length <= 1) {
            reject(`There are not enough words to be sorted.`)
        }
        setTimeout(() => { resolve(sortedArr) }, 3000)
    })
}


// changeAllToCaps([`boris`, `oto`, `boka`, `seavus`, `love`])
//     .then(success => {
//         console.log(`Succesful caps!`, success)
//         return sortArr([`seavus`, `education`, `boris`, `oto`, `boka`, `angele`])
//     }).then(succ => console.log(`Successfuly sorted!`, succ))
//     .catch(err => console.log(`Error!!`, err))
//     .finally(() => console.log(`Homework part2 is done.`))


// Homework bonus
async function bonus() {
    let startTime = new Date().getTime();
    let firstP = await changeAllToCaps([`boris`, `oto`, `boka`, `seavus`, `love`]);
    console.log(firstP);
    let secondP = await sortArr([`seavus`, `education`, `boris`, `oto`, `boka`, `angele`]);
    console.log(secondP);
    setTimeout(() => { console.log(`Done on: ${(new Date().getTime() - startTime) / 1000}s`); }, 500);
}
bonus()