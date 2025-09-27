const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-item-btn');
// const removeButton = document.getElementById('rmv-item-btn');
const editButton = document.getElementById('edit-item-btn');
const itemList = document.getElementById('list-items')
// const removeBtn = document.createElement('button');
//removeBtn.textContent = 'Remove';
//removeBtn.className = 'remove-btn';

addButton.addEventListener('click', () => {
    console.log('Button clicked')

  // Get the value from the input field
  let newItemText = itemInput.value.trim();

  // Check if the input is not empty
  if (newItemText !== '') {
    // Create a new list item (<li>) element
    const newListItem = document.createElement('li');

    // Set the text content of the new list item
    newListItem.textContent = newItemText;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn'
    removeButton.addEventListener('click', function() {
            itemList.removeChild(newListItem); // Remove the parent list item of this button
        });

    // Append the new list item with a remove button to the unordered list
    itemList.appendChild(newListItem);
    newListItem.appendChild(removeButton);
    
    
    // newListItem.appendChild(removeBtn);


    // Clear the input field after adding the item
    itemInput.value = '';
  } else {
    alert('Please enter an item before adding.');
  }
});