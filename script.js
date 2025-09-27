
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-item-btn');
const itemList = document.getElementById('list-items');

addButton.addEventListener('click', () => {
    console.log('Button clicked');

    // Get the value from the input field
    let newItemText = itemInput.value.trim();

    if (newItemText !== '') {
        const newListItem = document.createElement('li');

        // Create a span to hold the text (instead of using .textContent directly)
        const itemTextSpan = document.createElement('span');
        itemTextSpan.textContent = newItemText;
        newListItem.appendChild(itemTextSpan);

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', function () {
            itemList.removeChild(newListItem);
        });

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';

        editButton.addEventListener('click', function () {
            if (editButton.textContent === 'Edit') {
                // Switch to input field
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = itemTextSpan.textContent;
                inputField.className = 'edit-input';
                

                newListItem.insertBefore(inputField, itemTextSpan);
                newListItem.removeChild(itemTextSpan);

                editButton.textContent = 'Save';
            } else {
                // Save the updated text
                const inputField = newListItem.querySelector('.edit-input');
                const updatedText = inputField.value.trim();

                if (updatedText !== '') {
                    itemTextSpan.textContent = updatedText;
                    newListItem.insertBefore(itemTextSpan, inputField);
                    newListItem.removeChild(inputField);
                    editButton.textContent = 'Edit';
                } else {
                    alert('Item field cannot be empty.');
                }
            }
        });

        // Append buttons to the list item
        newListItem.appendChild(removeButton);
        newListItem.appendChild(editButton);

        // Add the new list item to the list
        itemList.appendChild(newListItem);

        // Clear the input field
        itemInput.value = '';
    } else {
        alert('Please enter an item before adding.');
    }
});