function searchAnimal() {
    let input = document.getElementById("search-bar").value;
    input = input.toLowerCase();
    let animal = document.getElementsByClassName("animals");

    for( i=0; i < animal.length; i++) {
        if (!animal[i].innerHTML.toLowerCase().includes(input)) {
            animal[i].style.display = "none";
        }
        else {
            animal[i].style.display = "list-item";
        }
    }
}