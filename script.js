function searchFruit() {
    let input = document.getElementById("search-bar").value;
    input = input.toLowerCase();
    let fruit = document.getElementsByClassName("fruits");

    for( i=0; i < fruit.length; i++) {
        if (!fruit[i].innerHTML.toLowerCase().includes(input)) {
            fruit[i].style.display = "none";
        }
        else {
            fruit[i].style.display = "list-item";
        }
    }
}