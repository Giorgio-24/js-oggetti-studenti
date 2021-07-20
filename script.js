const showInPage = document.getElementById('print');

var studentsList = [

    { firstname: "Jonny", lastname: "Bravo", age: 17 },
    { firstname: "Leonard", lastname: "Coler", age: 18 },
    { firstname: "Mike", lastname: "Enner", age: 18 },
    { firstname: "Bruce", lastname: "Lensen", age: 17 },
    { firstname: "Edward", lastname: "Robinson", age: 17 },

];

function printObjectArray(objectArray, targetElement){
    var content = '';

    for (var i = 0; i < objectArray.length; i++) {
        var currentItem = objectArray[i];
        content += '<li><span class="label">First name: </span>' +
            currentItem.firstname + '<br>';
        content += '<span class="label">Last name: </span>' +
            currentItem.lastname + '</li>' + '<div>-----------------------'
             + '</div>';
    };

    targetElement.innerHTML = content;
};

printObjectArray(studentsList, showInPage)

do{var newName = prompt('Inserisci il nome.')
}while(!newName || newName.trim() === '' || !isNaN(newName));

do{var newLastname = prompt('Inserisci il cognome.')
}while(!newLastname || newLastname.trim() === '' || !isNaN(newLastname));

do{var newAge = prompt('Inserisci la tua età.')
}while(!newAge || isNaN(newAge) || newAge.trim() === '');

var newStudent = {
    firstname : newName,
    lastname: newLastname,
    age:newAge,
};

studentsList.push(newStudent);

printObjectArray(studentsList, showInPage)
