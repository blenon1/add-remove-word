const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const wordList = document.getElementById('wordList');

addButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();
    if (inputValue !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        wordList.appendChild(listItem);
        inputField.value = '';
    }
});

removeButton.addEventListener('click', () => {
    const listItems = wordList.getElementsByTagName('li');
    if (listItems.length > 0) {
        wordList.removeChild(listItems[listItems.length - 1]);
    }
});
