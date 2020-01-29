$(document).ready(function () {
     document.querySelector('button').addEventListener('click', function(){
        $.ajax({
            url: `https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g1/Class04-AJAX/students.json`,
            success: function(response) {
                console.log(response, 'Success!')
                console.log(response.academy);

                let academyResult = document.querySelector('#result');
                academyResult.innerText = response.academy;

                let listResult = document.querySelector('#resultList');
                listResult.innerHTML = ``
                for (const student of response.students) {
                    listResult.innerHTML += `<li>${student.name}</li>`
                }

               
            },
            error: function(response) {
                alert(response, `Error`);
            }

        })
     })
})