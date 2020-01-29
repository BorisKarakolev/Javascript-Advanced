$(document).ready(function() {
    document.querySelector('button').addEventListener('click', function() {
        $.ajax({
            url: `https://swapi.co/api/people/1`,
            success: function(response) {
                console.log(response, `Success!`);

                let pName = document.querySelector('#resultOne');
                pName.innerHTML = `<h1>${response.name}</h1>`;

                let table = document.querySelector('#resultTable');
                table.innerHTML = '';
                table.innerHTML = `<tr>
                                        <td>${response.height}</td>
                                        <td>${response.mass}</td>
                                        <td>${response.eye_color}</td>
                                        <td>${response.hair_color}</td>
                                </tr>`
            },
            error: function(response){
                alert(response, `Error`);
            }
        })
    })
})