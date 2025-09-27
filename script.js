
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
        // Allows you to target only the text part of the item when performing editing operations.
        const itemTextSpan = document.createElement('span');
        itemTextSpan.textContent = newItemText; // Assigns text to the span
        newListItem.appendChild(itemTextSpan); // Append the span to the <li>

        // Remove button and functionality
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', function () {
            itemList.removeChild(newListItem);
        });

        // Edit button and functionality
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', function () {
            if (editButton.textContent === 'Edit') {
                // Create input field
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = itemTextSpan.textContent;
                inputField.className = 'edit-input';
                
                // Switch to input field
                newListItem.insertBefore(inputField, itemTextSpan);
                newListItem.removeChild(itemTextSpan);

                editButton.textContent = 'Save';
            } else {
                // Save the updated text
                const inputField = newListItem.querySelector('.edit-input');
                const updatedText = inputField.value.trim();

                if (updatedText !== '') {
                    // Input field is replaced by the span again, so the text is displayed as regular text.
                    itemTextSpan.textContent = updatedText;
                    newListItem.insertBefore(itemTextSpan, inputField);
                    newListItem.removeChild(inputField);
                    editButton.textContent = 'Edit'; // Changes back to edit so user can edit again if needed
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

// The edit button text acts as a toggle between two modes: one for editing and one for saving.
// When the user clicks "Edit", you’re giving them an input field to modify the text,
// and when they click "Save", you're saving the changes and displaying the text again.