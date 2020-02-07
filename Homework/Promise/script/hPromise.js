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

let arr = [`boris`, `bojana`, `oto`, `Javascript`, `great`, `language`, `angele`, `martin`];

let changeAllToCaps = () => {
    return new Promise((resolve, reject) => {
        for (const index of arr) {
            if (typeof (index) !== `string`) {
                reject(`All have to be strings.`);
            }
            setTimeout(() => {
                let caps = arr.map(index => index.toUpperCase())
                resolve(`You succesfuly make them all caps. ${caps}`)
            }, 3000);
        }

    })
}

let srt = () => {
    return new Promise((resolve, reject) => {
        if (arr.length <= 2) {
            reject(`Not enough.`);
        }
        setTimeout(() => {
            let sorted = arr.sort((a, b) => a.localeCompare(b));
            resolve(`Your alphabet is succesful: ${sorted}`)
        })
    })
}

// changeAllToCaps()
//     .then(success => {
//         console.log(success);
//         return srt()
//     }).then(res => { console.log(res) })
//     .catch(err => { console.log(err) }).finally(console.log(`Homework part two is done.`))


// Homework bonus
let showErr = () => {
    for (const index of arr) {
        if (typeof (index) !== 'string') {
            throw new Error(`Problem with your array, all have to be strings.`);
        }
    }
    let caps = arr.map(index => index.toUpperCase())
    console.log(`You succesfuly make them all caps. ${caps}`)
}

let showErr2 = () => {
    if (arr.length <= 2) {
        throw new Error(`Not enough strings on your array.`);
    }
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    console.log(`Your alphabet is succesful: ${sorted}`);
}


async function showArrays() {
    let startTime = new Date().getTime();
    let firstFunc = await changeAllToCaps();
    showErr(firstFunc);
    let secondFunc = await srt();
    showErr2(secondFunc);
    console.log(`Done for: ${(new Date().getTime() - startTime) / 1000}s`)
}
showArrays();

// moe mislenje, deka so async await nisto ne se krati samo moze da se koristi vo nekoi situacii.