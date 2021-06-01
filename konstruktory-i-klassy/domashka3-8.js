//________________
// 3.8 domashka


let age = document.getElementById('age');
function showUser(surname, name) {
alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}
showUser('Ivanov', 'Ivan');