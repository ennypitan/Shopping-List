const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');



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
    checkUI();
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
       if(confirm('Are you sure')){
        e.target.parentElement.parentElement.remove();

        checkUI();
       }
    }
    
}


function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);

    }
    checkUI();
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
  
    if (items.length === 0) {
      clearBtn.style.display = 'none';
      itemFilter.style.display = 'none';
    } else {
      clearBtn.style.display = 'block';
      itemFilter.style.display = 'block';
    }
  }


  function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
  
    items.forEach((item) => {
      const itemName = item.firstChild.textContent.toLowerCase();
  
      if (itemName.indexOf(text) != -1) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }


// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();