let dogs = [{
    name: 'Oto',
    breed: 'Golden Retriever',
    hair: 'Medium',
    size: 'Large',
    age: 1,
    color: 'Golden'
},
{
    name: 'Jack',
    breed: 'Fox terrier',
    hair: 'Short',
    size: 'Medium',
    age: 10,
    color: 'White-brown'
},
{
    name: 'Hector',
    breed: 'Dogo Argentino',
    hair: 'Short',
    size: 'Extra large',
    age: 1,
    color: 'White'
},
{
    name: 'Alfa',
    breed: 'Great Dane',
    hair: 'Short',
    size: 'Extra large',
    age: 5,
    color: 'Gray'
},
{
    name: 'Bono',
    breed: 'French bulldog',
    hair: 'Short',
    size: 'Small',
    age: 6,
    color: 'Black'
}];


let result = document.querySelector('#result');
let butn = document.querySelector('button');

dogStatus = dogs => {
    for (const dog of dogs) {
        let age = dog.age;
        let puppy = age <= 1 ? `Puppy` : age;
         
        result.innerHTML += `<tr>
                                <td>${dog.name}</td>
                                <td>${dog.breed}</td>
                                <td>${dog.hair}</td>
                                <td>${dog.size}</td>
                                <td>${puppy}</td>
                                <td>${dog.color}</td>
                            </tr>`;
    }
}


// https://api.myjson.com/bins/x98ta

butn.addEventListener('click', function() {
    fetch('https://api.myjson.com/bins/x98ta')
    .then((response) => {
        console.log(`Response has arrived.`);
        return response.json();
    })
    .then((newDogs) => {
        console.log(newDogs);
        dogStatus(newDogs);        
    })
    .catch((error) => {
        console.log(`Error!`);
    })
})