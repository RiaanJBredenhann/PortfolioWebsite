
// gets all the input values for the car
function store() {
    var brand = document.getElementById("carBrand").value;
    var price = document.getElementById("carPrice").value;
    var key = document.getElementById("key").value;

    // create car object and save input data
    const car = {
        brand: brand,
        price: price,
    }

    // convert car object to string
    window.localStorage.setItem(key, JSON.stringify(car));
}

// retrieves all items from localStorage
function retrieveRecords() {
    console.log("Retrieved Records");

    var key = document.getElementById("retrieveKey").value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var info = document.createTextNode(records);
    paragraph.appendChild(info);
    var element = document.getElementById("retrieve");
    element.innerHTML = "";
    element.appendChild(paragraph);
}

// delete item from localStorage
function removeItem() {
    var key = document.getElementById("removeKey").value;
    localStorage.removeItem(key);
    console.log("Removed Items")
}

// clears the entire localStorage
function clearStorage() {
    localStorage.clear();
    console.log("Cleared Records");
}

// ensures page is loaded before any functions are executed
window.onload = function() {
    document.getElementById("carForm").onsubmit = store;
    document.getElementById("retrieveButton").onclick = retrieveRecords;
    document.getElementById("removeButton").onclick = removeItem;
    document.getElementById("clearButton").onclick = clearStorage;   
}