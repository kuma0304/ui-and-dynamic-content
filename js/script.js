// References
let dataInput = document.getElementById("data-input");
let addToListButton = document.getElementById("add-to-list");
let groceryList = document.getElementById("grocery-ul");
let inputError = document.querySelector(".feedback");

function addItem() {
    let newItem = document.createElement("li");
    
    if (dataInput.value.trim() !== "") {
        newItem.textContent = dataInput.value;        
        groceryList.appendChild(newItem);
        
        inputError.classList.remove("active");
        inputError.innerText = "";
        
        dataInput.value = "";        
        dataInput.focus();
    } else {
        inputError.classList.add("active");
        inputError.innerText = "Nothing entered!";
    }
}

addToListButton.addEventListener("click", addItem);
