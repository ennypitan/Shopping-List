const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


function addItem(e){
    e.preventDefault();


    const newItem = itemInput.value;

    // Validate Input
    if(newItem === ''){
        alert('Please add an Item');
        return;
    }

    // Create List Item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    li.innerHTML =` ${newItem}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
    itemList.appendChild(li);
    itemInput.value = '';
}

// Event Listeners
itemForm.addEventListener('submit', addItem)